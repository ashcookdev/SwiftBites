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
import Time from '../time';



const navigation = [
  { name: 'Dashboard', href: '/dash', icon: HomeIcon, current: true },
  { name: 'Map', href: '/map', icon: MapPinIcon, current: false },
  { name: 'Messages', href: '/messages', icon: ChatBubbleBottomCenterIcon, current: false},
  { name: 'Dispatch', href: '/dispatch', icon: CalendarDaysIcon, current: false },
  { name: 'Driver Portal', href: '/driverportal', icon: TruckIcon, current: false },
  { name: 'Kitchen', href: '/kitchen', icon: CakeIcon, current: false},
  {name: 'Till', href: '/till', icon: CurrencyPoundIcon, current: false},


  { name: 'Staff', href: '/shifts', icon: UserCircleIcon, current: false },
  { name: 'Clock In', href: '/clockin', icon: ClockIcon, current: false },
  { name: 'Reports', href: '/reports', icon: ChartPieIcon, current: false },
  { name: 'Settings', href: '/settings', icon: CogIcon, current: false },

]

const teams = [
  { name: 'Team A', href: '#', initial: 'A', current: false },
  { name: 'Team B', href: '#', initial: 'B', current: false },
  { name: 'Team C', href: '#', initial: 'C', current: true },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



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
  const [shownDriver, setShownDriver] = useState(false);




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


  

  

  


  

return(

  <div>
  <Transition.Root show={sidebarOpen} as={Fragment}>
    <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
      <Transition.Child
        as={Fragment}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-900/80" />
      </Transition.Child>

      <div className="fixed inset-0 flex">
        <Transition.Child
          as={Fragment}
          enter="transition ease-in-out duration-300 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                  <span className="sr-only">Close sidebar</span>
                  <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </Transition.Child>
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-2 ring-1 ring-white/10">
              <div className="flex h-16 shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="swifty.png"
                  alt="Your Company"
                />
              </div>
              <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                  <li>
                    <ul role="list" className="-mx-2 space-y-1">
                      {navigation.map((item) => (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                          >
                            <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                    <ul role="list" className="-mx-2 mt-2 space-y-1">
                      {teams.map((team) => (
                        <li key={team.name}>
                          <a
                            href={team.href}
                            className={classNames(
                              team.current
                                ? 'bg-gray-800 text-white'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800',
                              'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                            )}
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                              {team.initial}
                            </span>
                            <span className="truncate">{team.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>

  {/* Static sidebar for desktop */}
  <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
    {/* Sidebar component, swap this element with another sidebar if you like */}
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="swifty.png"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <item.icon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
            <ul role="list" className="-mx-2 mt-2 space-y-1">
              {teams.map((team) => (
                <li key={team.name}>
                  <a
                    href={team.href}
                    className={classNames(
                      team.current
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800',
                      'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                    )}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                      {team.initial}
                    </span>
                    <span className="truncate">{team.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800"
            >
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="swifty.png"
                alt=""
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Ash Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

  <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-gray-900 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
    <button type="button" className="-m-2.5 p-2.5 text-gray-400 lg:hidden" onClick={() => setSidebarOpen(true)}>
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
    </button>
    <div className="flex-1 text-sm font-semibold leading-6 text-white">Dashboard</div>
    <a href="#">
      <span className="sr-only">Your profile</span>
      <img
        className="h-8 w-8 rounded-full bg-gray-800"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
    </a>
  </div>

  <main className="py-10 lg:pl-72">
    <div className="px-4 sm:px-6 lg:px-8">
    <Time/>
          <div className="xl:pl-96">
            <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">  <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 flex">
      <div className="w-2/3 pr-4 border-r border-gray-300">

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
                  <div className="border border-gray-300 bg-white rounded-md p-2 flex flex-col md:flex-column">
  <p className="mt-3 text-xs text-black">{order.Address}</p>
  <h3 className="text-xs font-medium text-black">{order.Postcode}</h3>
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
                
                {order.Cooked && order.JobAccepted && <TruckIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
                <p className=" flex-start rounded-full bg-white text-xs font-medium text-black p-1 border border-gray-300">{Math.floor(order.Distance)} Miles</p>
                <p className="rounded-full text-xs bg-white font-medium text-black p-1 border border-gray-300">{Math.floor(order.JourneyTime)} Minutes</p>
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
    </div>
    
    </div>
          </div>
    </div>
  </main>
</div>
                )}






                
