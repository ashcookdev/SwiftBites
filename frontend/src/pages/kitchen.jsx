import { Orders } from '../models';
import { DataStore } from 'aws-amplify';
import { useState, useEffect, useRef } from 'react';
import { format, parse, set } from 'date-fns';
import { Messages, StockControl, KitchenMenu } from '../models';
import { RocketLaunchIcon, ChevronRightIcon, CircleStackIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/20/solid';
import Countdown from 'react-countdown';
import Time from '../time';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const isElectron = window && window.process && window.process.type;
const ipcRenderer = isElectron ? window.require('electron').ipcRenderer : null;

// Renderer callback with condition
const renderer = ({ minutes, completed }) => {
  if (completed) {
    // Render a completed state
    return <ClockIcon className='w-12 h-12 animate-pulse text-white' />;
  } else {
    // Render a countdown
    return <span className='text-white'>{minutes} mins </span>;

  }
};

export default function CafeKitchen() {
  const [orders, setOrders] = useState([]);
  const [snooze, setSnooze] = useState(false);
  const [selected, setSelected] = useState({})
  const [isLoading, setIsLoading] = useState(false);


  const prevOrdersRef = useRef();

  useEffect(() => {
    prevOrdersRef.current = orders;
  }, [orders]);
  
  const prevOrders = prevOrdersRef.current;


  
// use effect refreshes the page every minute

useEffect(() => {
  const interval = setInterval(() => {
    window.location.reload();
  }, 60000);

  return () => clearInterval(interval);
}
  , []);

  



 

  async function fetchTodaysOrders() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const allOrders = await DataStore.query(Orders);


 

    const orders = allOrders.filter(
      (order) =>
        new Date(order.CreatedDate) >= today &&
        new Date(order.CreatedDate) < tomorrow &&
       order.Cooked === false
    );

console.log(orders);
   
// find out how many orders are in the array and number them 


    setOrders(orders);

    if (orders.Prep === 2) {
      setSnooze(true);
    }
  }




  useEffect(() => {
    fetchTodaysOrders();
    const subscription = DataStore.observe(Orders).subscribe(msg => {
      if (msg.opType === 'INSERT') {
        fetchTodaysOrders();
      }
    });

    return () => subscription.unsubscribe();
}, []);





  async function HandleOrderConfirmed(order) {

console.log("clicked");
setIsLoading(true)

    // Calculate the current time and format it as a string
    const currentTime = new Date();
    const options = { timeZone: "Europe/London", hour12: false };
    const awstime = currentTime
      .toLocaleString("en-GB", options)
      .split(",")[1]
      .trim();
    const formattedTime = awstime.substring(0, 5);

    // Loop through the hot items in the order
    for (const hotItemName of order.HotItems) {
      // Query the DataStore for the associated KitchenMenu item
      const kitchenMenuItem = (await DataStore.query(KitchenMenu)).find(
        (item) => item.Name === hotItemName
      );

      // Check if a KitchenMenu item was found
      if (kitchenMenuItem) {
        // Initialize an array to store the number of portions remaining for each ingredient
        const portionsRemaining = [];

        // Loop through the ingredients of the KitchenMenu item
        for (const ingredient of kitchenMenuItem.Ingredients) {
          // Calculate the required stock level for the ingredient
          const requiredStockLevel =
            ingredient.weight > 0 ? ingredient.weight : ingredient.quantity;

          // Query the DataStore for the associated StockControl item
          const stockControl = await DataStore.query(
            StockControl,
            ingredient.id
          );

          // Check if a StockControl item was found
          if (stockControl) {
            // Update the stock level of the StockControl item
            await DataStore.save(
              StockControl.copyOf(stockControl, (updated) => {
                updated.CurrentStockLevel -= requiredStockLevel;
              })
            );

            // Calculate the number of portions remaining for the ingredient and add it to the array
            portionsRemaining.push(
              Math.floor(stockControl.CurrentStockLevel / requiredStockLevel)
            );
          }
        }

        // Calculate the minimum number of portions remaining among all ingredients
        const minPortionsRemaining = Math.min(...portionsRemaining);

        // Update the stock level of the KitchenMenu item
        await DataStore.save(
          KitchenMenu.copyOf(kitchenMenuItem, (updated) => {
            updated.StockLevel = minPortionsRemaining;
          })
        );
      }
    }

    if (order.Collection === false) {

      const postcode = "me160st"
  
      // Fetch OSRM data for each order
      for (let order of orders) {
        // Check if distance data has already been fetched for this order
        if (!order.Distance) {
          try {
            const response = await fetch(`https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${postcode}&destinations=${order.Postcode}&key=VZDOQs4KS2MI9li7FB1GiwoHEAc8W52Ocb83tExRdKTQCWwKxE5vLC495aqj6C3A`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            } else {
              const data = await response.json();
              console.log(data);
  
              const distance = data.rows[0].elements[0].distance.value / 1609.344;
              const duration = data.rows[0].elements[0].duration.value / 60;


              console.log(distance);
              console.log(duration);

              const originalOrder = await DataStore.query(Orders, order.id);

              if (originalOrder) {
                const updatedOrder = Orders.copyOf(originalOrder, updated => {
                  updated.Distance = distance;
                  updated.JourneyTime = String(duration);
                  updated.Cooked = true;
                });

                await DataStore.save(updatedOrder);

              }
            }
          } catch (error) {
            console.error(error);
          }
        }
      }
    }
  


    // Update record in DataStore
    DataStore.save(
      Orders.copyOf(order, (updated) => {
        updated.Cooked = true;
        updated.Complete = false;
      })
    );

    // Update Messages model
    

    const data = {
      product: orders.map((item) => item.HotItems),
      name: "customer",
      table: orders.map((item) => item.Table),
    };

    
    setTimeout(() => {
      setIsLoading(false);
      window.location.reload();
    }, 6000);
  
    // Send the data to the cafe-print channel
    if (isElectron) {
      ipcRenderer.send('kitchen-print', { data });
    }
  }

  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Time />
      {Array.isArray(orders) && orders.length > 0 ? (
        <p className='text-purple-700 text-center'>
          Number of Orders: {orders.length}
        </p>
      ) : null}
      
      <ul role="list" className="divide-y divide-gray-100  mt-2 mb-2">
        {orders.map((order, index) => {
          const orderTime = parse(order.CreatedTime, 'HH:mm:ss', new Date());
          // add 20 minutes to order time
          const orderTimePlus20 = set(orderTime, { minutes: orderTime.getMinutes() + 20 });

          // Calculate remaining time in minutes
          const remainingTime = (orderTimePlus20.getTime() - new Date().getTime()) / 1000 / 60;

          // get time the order should be ready by
          const readyBy = format(orderTimePlus20, 'h:mm a');



          let backgroundColor = 'bg-green-500';
          if (order.timerFinished) {
            backgroundColor = 'bg-red-500 animate-pulse';
          } else if (remainingTime <= 20 && remainingTime > 10) {
            backgroundColor = 'bg-green-500';
          }
          else if (remainingTime <= 10 && remainingTime > 5) {
            backgroundColor = 'bg-yellow-500';
          }
          else if (remainingTime <= 5) {
            backgroundColor = 'bg-red-500';
          }

          return (
            <li
              key={index}
              className={`relative flex justify-between gap-x-6 px-4 py-5 sm:px-6 lg:px-8 ${backgroundColor} rounded-lg mt-2 mb-2 border border-gray-200 shadow-lg `}
            >
              <div className="flex gap-x-4">


                <CheckCircleIcon className="w-6 h-6 animate-pulse text-white" />
                

                
                <div className="min-w-0 flex-auto">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-white">
                    {order.Postcode}
                  </p>
              
                </div>
                  <h3 className="text-lg font-medium leading-6 text-white mb-2">
                  </h3>
                  <ul className="ml-3 font-medium text-white">
                    {order.HotItems.map((item, index) => (
                      <li key={`${item}-${index}`}>
                        <input id={item} name={item} type="checkbox" className='mr-1' />
                        <label htmlFor={item}>{item}</label>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold leading-6 text-white mt-2">
                    {order.Notes ? order.Notes : "No Order Notes"}
                  </p>
                  <p className="mt-1 flex text-xs leading-5 text-gray-500">
                    <a href={`mailto:${order.email}`} className="relative truncate hover:underline">
                      {order.email}
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-4 mb-1 mt-1">
                <div className="hidden sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">{order.role}</p>
                  <p className="mt-1 text-xs leading-5 text-white">
                    Order Time: {format(parse(order.CreatedTime, 'HH:mm:ss', new Date()), 'h:mm a')}
                  </p>
                 
                  <p className='text-white text-xs'>Ready By: {readyBy}</p>
                  <Countdown date={orderTimePlus20} renderer={renderer} />


                  <div>
                  {isLoading ? <div className="animate-pulse">
                  <img src="./swifty.png" height={50} width={50} alt="" />
                  <p className="text-gray-500 text-sm truncate">Sending to Dispatch</p>
                </div> : null}
                    <button
                      type="button"
                      onClick={() => HandleOrderConfirmed(order)}
                      className="inline-flex border border-white items-center gap-x-2 rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Ready <CheckCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}