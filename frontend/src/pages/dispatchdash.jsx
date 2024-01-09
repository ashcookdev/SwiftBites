import React, { useState, useEffect, useRef } from "react";
import { Orders } from '../models';
import { DataStore } from 'aws-amplify';
import { format, parse, set } from 'date-fns';
import { RocketLaunchIcon, ChevronDownIcon, CircleStackIcon, CheckCircleIcon, ClockIcon, TruckIcon, MapIcon, UserCircleIcon, ChatBubbleBottomCenterIcon } from '@heroicons/react/20/solid';
import Countdown from 'react-countdown';
import AssignDriver from './assigndriver';
import Tracker from './tracker';
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CakeIcon,
  CalendarDaysIcon,
  CalendarIcon,
  ChartPieIcon,
  CogIcon,
  CurrencyPoundIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  MapPinIcon,
  UsersIcon,
  XMarkIcon,

} from '@heroicons/react/24/outline'
import ViewOrder from './viewOrder';


const navigation = [
  { name: 'Dashboard', href: '/dash', icon: HomeIcon, current: true },
  { name: 'Map', href: '/map', icon: MapPinIcon, current: false },
  { name: 'Messages', href: '/messages', icon: ChatBubbleBottomCenterIcon, current: false},
  { name: 'Dispatch', href: '/dispatch', icon: CalendarDaysIcon, current: false },
  { name: 'Driver Portal', href: '/driverportal', icon: TruckIcon, current: false },
  { name: 'Kitchen', href: '/kitchen', icon: CakeIcon, current: false},
  {name: 'Till', href: '/till', icon: CurrencyPoundIcon, current: false},


  { name: 'Staff', href: '/shifts', icon: UserCircleIcon, current: false },
  { name: 'Clock In', href: 'clockin', icon: ClockIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon, current: false },
  { name: 'Settings', href: '/settings', icon: CogIcon, current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
import Time from '../time';
import { View } from "@aws-amplify/ui-react";



const isElectron = window && window.process && window.process.type;
const ipcRenderer = isElectron ? window.require('electron').ipcRenderer : null;

// Renderer callback with condition

export default function CafeKitchen() {
  const [orders, setOrders] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [selected, setSelected] = useState([])
  const allOrdersSelected = selected.length === orders.length;
  const currentDate = new Date();
  const [prevOrderCount, setPrevOrderCount] = useState(0);
  const [durationDistance, setDurationDistance] = useState({ distance: 0, duration: 0 });
  const [showAssignDriver, setShowAssignDriver] = useState(orders.Driver === null)
  const [isHovered, setIsHovered] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showViewOrder, setShowViewOrder] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);




if (show === true) {
  return (
    <ViewOrder order={selected} />
  )
  
}

  console.log(orders);
  console.log(durationDistance);


  

  // use effect refreshes the page every minute
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
        order.Complete=== false && order.Collection === false
    );
  


    setOrders(orders);
    // set time out on the loading screen
 
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
    // Calculate the current time and format it as a string
    const currentTime = new Date();
    const options = { timeZone: "Europe/London", hour12: false };
    const awstime = currentTime
      .toLocaleString("en-GB", options)
      .split(",")[1]
      .trim();
    const formattedTime = awstime.substring(0, 5);

    // Update record in DataStore
    DataStore.save(
      Orders.copyOf(order, (updated) => {
        updated.Completed = true;
        updated.Delivered = false;
      })
    );
  }

  


  



  return (
    <main className="lg:pl-20 bg-white">
    <div className="xl:pl-96">
      <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex">
          <div className="w-full pr-4 border-r border-gray-300">
<p className="text-purple-900 text-center mt-5">
Number of Orders: {orders.filter(order => order.Cooked && !order.JobAccepted).length}
</p>




<ul role="list" className="grid grid-cols-1 gap-6">
  
  {orders.map((order, index) => (
    <li
      key={index}
      className={`col-span-1 divide-y divide-gray-200 rounded-lg shadow ${
        order.Cooked
          ? order.JobAccepted
            ? order.Delivered
              ? "hidden"
              : "hidden"
            : "bg-green-500"
          : "bg-purple-200"
      }`}
    >
      <div className="flex w-full items-center justify-between space-x-6 p-6">
        <div className="flex-1 truncate">
          <div className="flex items-center space-x-3">
            <HomeIcon className="h-5 w-5 text-white" aria-hidden="true" />
            <div className="border border-gray-300 bg-white rounded-md p-2">
              <p className="mt-1 truncate text-sm text-black">{order.Address}</p>
              <h3 className="truncate text-sm font-medium text-black">{order.Postcode}</h3>
            </div>
            <span
              className={`inline-flex flex-shrink-0 items-center rounded-full px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset ${
                order.Cooked ? "text-blue-700 ring-blue-600 bg-blue-50" : "text-green-700 ring-green-600 bg-green-50"
              }`}
            >
              {order.role}
            </span>
          </div>
        </div>
       
        <div className="flex items-start space-x-3">
          <p className="rounded-full bg-white text-xs font-medium text-black p-1 border border-gray-300">{Math.floor(order.Distance)} Miles</p>
          <p className="rounded-full text-xs bg-white font-medium text-black p-1 border border-gray-300">{Math.floor(order.JourneyTime)} Minutes</p>
          {order.Cooked && order.JobAccepted && <TruckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
          <div className="relative">
            {showAssignDriver ? (
              <AssignDriver order={order.id} />
            ) : (
              <>
                <p className="text-white text-center">{order.Driver}</p>
                <button                     className="relative inline-flex mt-2 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
onClick={() => setShowAssignDriver(true)}>Change Driver</button>
              </>
            )}
            {/* Dropdown menu */}
            <button
type="button"
className="relative inline-flex mt-2 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
onClick={() => {
setSelected(order);
setShow(true);
}}
>
View Order
</button>

{show && <ViewOrder order={selected} />}
{selectedOrder && showViewOrder && (
  <ViewOrder order={selectedOrder} />
)}
          </div>
        </div>
      </div>
    </li>
  ))}
</ul>
</div>
<div className="w-1/3 pl-4">
<p className="text-purple-700 text-center mt-5">Drivers</p>

  <ul role="list" className="grid grid-cols-1 gap-6">
    {isHovered && (
      <div className="relative z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        <Tracker />
      </div>
    )
      
    }
    {orders.map((order, index) => (
      <li
        key={index}
        className={`relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${order.JobAccepted && !order.Delivered && !order.BackAtBranch
            ? "bg-blue-500 animate-pulse" // Add pulsating effect for emphasis
            : order.JobAccepted && order.Delivered
              ? "bg-green-500 animate-pulse" // Adjust color for Delivered state
              : "bg-green-500"
          }`}
      >
        <div className="flex flex-column w-full items-center justify-between space-x-6 p-6">
          <p className="text-xs text-white">{order.Driver}</p>

          {order.JobAccepted && !order.Delivered ? (
            <>
              <div className="relative">
              <button
  type="button"
  className="relative inline-flex mt-2 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
  onMouseEnter={() => setIsHovered(true)}
  onClick={() => setIsHovered(false)}

>
  {isHovered ? 'Close' : 'Map'}
</button>
                
<button
type="button"
className="relative inline-flex mt-2 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700"
onClick={() => {
setSelectedOrder(order);
setShowViewOrder(true);
}}
>
View Order
</button>

              </div>
            </>
          ) : order.JobAccepted && order.Delivered ? (
            <>
          
              <TruckIcon className="text-white" />
              <p className="text-xs text-white">Coming Back: {Math.floor(order.JourneyTime) } mins</p>
              
            </>
          ) : (
            <>
              <p className="text-xs text-white">Waiting for job</p>
            </>
          )}
        </div>
          
      </li>
    ))}

  </ul>
</div>
</div></div>
    </div>
  </main>
    )
}