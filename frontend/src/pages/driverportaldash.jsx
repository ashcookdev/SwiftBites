import { useState, useEffect, useContext } from 'react'
import { DataStore } from 'aws-amplify'
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
  }, []); // Add tracking to the dependency array


return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
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
              {order.JobAccepted ? (order.Delivered ? <span className="text-green-500 animate-pulse">Delivered, Returning</span> : <span className="text-blue-500 animate-pulse">Enroute</span>) : ""}

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
                  }  
  
  