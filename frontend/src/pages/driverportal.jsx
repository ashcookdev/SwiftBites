import { useState, useEffect, useContext } from 'react'
import { DataStore, Geo } from 'aws-amplify'
import { Orders, Driver } from '../models'
import { format, parse, set } from 'date-fns'
import React from 'react'
import { Auth } from 'aws-amplify'
import Messages from './messages'

export default function DriverPortal() {
  const [driverEmail, setDriverEmail] = useState(null)
  const [orders, setOrders] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [tracking, setTracking] = useState(false);

  

  




  useEffect(() => {
    async function fetchData() {
      const user = await Auth.currentUserInfo();
      setDriverEmail(user.attributes.email);
  
      const allOrders = await DataStore.query(Orders);
      const filteredOrders = allOrders.filter((order) => order.Complete === false && order.Cooked === true);
  
      setOrders(filteredOrders);
    }
    fetchData();
  }, [tracking]); // Add tracking to the dependency array
  


  const handleAcceptJob = (order) => async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const position = await getCurrentLocation();
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const latarry = []
  const longarry = []

  latarry.push(latitude)
  longarry.push(longitude)


  setIsLoading(true);

  const now = new Date();
  const awsTime = format(now, "HH:mm:ss.SSS");

  const url = `https://api.postcodes.io/postcodes/${order.Postcode}`;



  const customerLocation = await fetch(url)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));

    console.log(customerLocation);


  const customerLatitude = customerLocation.result.latitude;
  const customerLongitude = customerLocation.result.longitude;

  const originalOrder = await DataStore.query(Orders, order.id);
  if (originalOrder) {
    const updatedOrder = Orders.copyOf(originalOrder, updated => {
      updated.JobAccepted = true;
      updated.JobAcceptedTime = awsTime;
      updated.Lat = latarry;
      updated.Long = longarry;
      
      updated.CustLat = customerLatitude;
      updated.CustLong = customerLongitude;
    });

    await DataStore.save(updatedOrder);
  }

  setTimeout(() => {
    setIsLoading(false);
    GeoLocate(order);
    setTracking(true);
  }, 6000);
};



let lastUpdateTime = Date.now();

const GeoLocate = (order) => {
  console.log("geolocate function running");

  const watchId = navigator.geolocation.watchPosition(async (position) => {
    const now = Date.now();
    if (now - lastUpdateTime < 60000) {
      // Less than a minute has passed since the last update, so we skip this update
      return;
    }

    lastUpdateTime = now;

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const lat = []
    const long = []

    lat.push(latitude)
    long.push(longitude)

    const originalOrder = await DataStore.query(Orders, order.id);
    if (originalOrder) {
      const updatedOrder = Orders.copyOf(originalOrder, updated => {
        updated.Lat= lat; // Push the latitude to the array
        updated.Long= long // Push the longitude to the array
      });

      await DataStore.save(updatedOrder);
    }

    console.log("location updated");
    console.log(latitude);
    console.log(longitude);
  }, (error) => {
    console.log(error);
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  });

  return () => navigator.geolocation.clearWatch(watchId);
};










  

  const handleDelivered = (order) => async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);

    const now = new Date()
    const awsTime = format(now, "HH:mm:ss.SSS");

    const originalOrder = await DataStore.query(Orders, order.id)
    if (originalOrder) {
      const updatedOrder = Orders.copyOf(originalOrder, updated => {
        updated.Delivered = true
        updated.BackAtBranch = false
        updated.TimeDelivered = awsTime
      })

      await DataStore.save(updatedOrder)
    }
    setTimeout(() => {
      setIsLoading(false);
      GeoLocate(order);
      setTracking(true);
    }, 5000);
  }

  const handleBackAtBranch = (order) => async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setIsLoading(true);

    const now = new Date()
    const awsTime = format(now, "HH:mm:ss.SSS");

    const originalOrder = await DataStore.query(Orders, order.id)
    if (originalOrder) {
      const updatedOrder = Orders.copyOf(originalOrder, updated => {
        updated.BackAtBranch = true
        updated.TimeBackAtBranch = awsTime
        updated.Complete= true
      })

      await DataStore.save(updatedOrder)
    }
    setTimeout(() => {
      setIsLoading(false);
      setTracking(false);
    }, 5000);
  }

 


// get current location of driver and calculate distance to order address and reload location every 1 mins


// route to google maps open in new tab

const handleRoute = (order) => async () => {
  GeoLocate(order);

  // use address and postcode to create url

  const branchpostcode = "me160st"


  // take user to google maps with directions from branch postcode to order address and postcode

  const url = `https://www.google.com/maps/dir/${branchpostcode}/${order.Address}+${order.Postcode}`





  window.open(url, '_blank').focus();

}

const logout = async () => {
  await Auth.signOut();
  window.location.reload();
}





return (
  <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
    <button onClick={logout}
      type="button"
      className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 mt-5 mb-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Logout
    </button>

    <p className="text-black text-center border border-purple-300 bg-purple-300">Number of Orders: {orders.length}</p>
    <ul role="list" className="grid grid-cols-1 gap-6">
      {orders.map((order, index) => (
        <li key={index} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-green-100 mt-10 shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{order.Address}</h3>
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {Math.floor(order.Distance)} Miles
                </span>
              </div>
              <p className="text-gray-500 text-sm truncate">{order.Postcode}</p>
              <p className="text-gray-500 text-sm truncate">{order.Name}</p>
              <p className="text-gray-500 text-sm truncate">{order.Telephone}</p>
              <p className="text-gray-500 text-sm truncate">{order.Email}</p>
              <ol className="list-decimal list-inside mt-5">
                {order.HotItems.map((item, index) => (
                  <li key={index} className="text-sm font-medium text-gray-900">{item}</li>
                ))}
              </ol>
              <div>
              <p className="text-sm text-black mt-5"> Total: £{order.Total}</p>

              </div>
            </div>
            {tracking ? (
              <p className="text-green-500 animate-pulse text-sm truncate">Tracking Enabled</p>
            ) : null}
            <div className="flex-shrink-0 space-x-4">
              {isLoading ? 
                <div className="animate-pulse">
                  <img src="./swifty.png" alt="" width="100" height="100" />
                  <p className="text-gray-500 text-sm truncate">Tracking Enabled</p>
                </div> 
              : null}
              {order.JobAccepted === false && order.Delivered === false ? (
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  onClick={handleAcceptJob(order)}
                >
                  Accept Job
                </button>
              ) : order.JobAccepted === true && order.Delivered === true ? (
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                  onClick={handleBackAtBranch(order)} // Assuming you have a function for this action
                >
                  Back at Branch
                </button>
              ) : (
                <button
                  type="button"
                  className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  onClick={handleDelivered(order)}
                >
                  Delivered
                </button>
              )}
              <button
                onClick={handleRoute(order)}
                type="button"
                className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
              >
                Route
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
    <Messages />

  </div>
)

  }
  