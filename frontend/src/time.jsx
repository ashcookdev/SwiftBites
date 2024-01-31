import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Orders,ClockIn } from './backend/models';

export default function Time() {
  const [time, setTime] = useState(new Date());

  const [orders, setOrders] = useState([]);
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
    fetchOrders();
    getDrivers();
    }
    , []);

    async function getDrivers() {
    const drivers = await DataStore.query(ClockIn);
    const filteredDrivers = drivers.filter(driver => driver.ClockedIn === true);
    setDrivers(filteredDrivers);
    }



  async function fetchOrders() {
    const orders = await DataStore.query(Orders);
    const filteredOrders = orders.filter(order => order.Complete === false);
    setOrders(filteredOrders);
  }

  const today = new Date();

  // convert date to yyyy-mm-dd format

    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    console.log(date);




  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="border-b border-gray-200 pb-5 mt-2 flex justify-center">
    <div className="flex flex-wrap items-center space-x-4">
      <div className="px-4 py-2 bg-blue-500 rounded-full sm:w-auto">
        <h3 className="text-xs font-semibold leading-6 text-white">
          {time.toLocaleTimeString()}
        </h3>
      </div>
      <div className="px-4 py-2 bg-green-500 rounded-full sm:w-auto">
        <h3 className="text-xs font-semibold leading-6 text-white">
        On Road: {orders.filter(order => order.Paid === true && order.Cooked === true && order.Delivered === false).length}
        </h3>
      </div>
      <div className="px-4 py-2 bg-yellow-500 rounded-full sm:w-auto">
        <h3 className="text-xs font-semibold leading-6 text-white">
          Cooking: {orders.filter(order => order.Cooked === false && order.Paid === true).length}
        </h3>
      </div>
      <div className="px-4 py-2 bg-red-500 rounded-full sm:w-auto">
        <h3 className="text-xs font-semibold leading-6 text-white">
          Ready: {orders.filter(order => order.Cooked === true && order.Paid === true).length}
        </h3>
      </div>
      <div className="px-4 py-2 bg-purple-500 rounded-full sm:w-auto">
        <h3 className="text-xs font-semibold leading-6 text-white">
          Drivers: {drivers.length}
        </h3>
        
      </div>
      <div className="px-4 py-2 bg-orange-500 rounded-full sm:w-auto">
        <h3 className="text-xs font-semibold leading-6 text-white">
          On Way Back: {orders.filter(order => order.Delivered === true && order.Complete === false).length}
        </h3>
        
      </div>
      <div className="px-4 py-2 bg-indigo-500 rounded-full sm:w-auto">
        <h3 className="text-xs font-semibold leading-6 text-white">
          Out On Delivery: {orders.filter(order => order.Delivered === false && order.JobAccepted === true).length}
        </h3>
        
      </div>
    </div>
  </div>
  )};  