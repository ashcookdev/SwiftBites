import { useState } from 'react';

export default function CostCalculator() {
  const [ordersPerDay, setOrdersPerDay] = useState('');
  const [averageOrderValue, setAverageOrderValue] = useState('');
  const [hoursOpen, setHoursOpen] = useState('');
  const [numberOfDrivers, setNumberOfDrivers] = useState('');
  const [swiftBytesResult, setSwiftBytesResult] = useState(null);
  const [competitorsResult, setCompetitorsResult] = useState(null);
  const [differenceResult, setCostDifferenceResult] = useState(null);
    const [orders, setOrders] = useState(null);
    const [driverCosts, setDriverCosts] = useState(null);


  const calculateCost = () => {
    // Parse input values to numbers
    const orders = parseFloat(ordersPerDay);
    const orderValue = parseFloat(averageOrderValue.replace('£', ''));
    const hours = parseFloat(hoursOpen);
    const drivers = parseFloat(numberOfDrivers);

    const revenue = orders * orderValue;
    const driverCosts = hours * drivers * 12.42;
  
    // SwiftBytes Calculation
    const swiftBytesTotal = orders * orderValue - hours * drivers * 13.42 + 6.66;
  
    // Competitors Calculation
    const competitorsTotal = orders * orderValue - 0.3 * (orders * orderValue);

  
    // Calculate the difference
    const costDifference = swiftBytesTotal - competitorsTotal;

    setOrders(revenue.toFixed(2));
    setDriverCosts(driverCosts.toFixed(2));

  
    setSwiftBytesResult(swiftBytesTotal.toFixed(2));
    setCompetitorsResult(competitorsTotal.toFixed(2));
    setCostDifferenceResult(costDifference.toFixed(2));
  };
  

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6 mb-2">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Cost Calculator</h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>See how much you could be saving by switching to SwiftBytes.</p>
        </div>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="orders" className="block text-xs font-medium text-gray-900">
            Orders Per Day
          </label>
          <input
            type="number"
            name="orders"
            id="orders"
            value={ordersPerDay}
            onChange={(e) => setOrdersPerDay(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="30"
          />
        </div>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="averageOrderValue" className="block text-xs font-medium text-gray-900">
            Average Order Value
          </label>
          <input
            type="text"
            name="averageOrderValue"
            id="averageOrderValue"
            value={averageOrderValue}
            onChange={(e) => setAverageOrderValue(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="£20.00"
          />
        </div>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="hoursOpen" className="block text-xs font-medium text-gray-900">
            Hours Your Open
          </label>
          <input
            type="number"
            name="hoursOpen"
            id="hoursOpen"
            value={hoursOpen}
            onChange={(e) => setHoursOpen(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="6"
          />
        </div>
        <div className="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          <label htmlFor="numberOfDrivers" className="block text-xs font-medium text-gray-900">
            Number of Drivers
          </label>
          <input
            type="number"
            name="numberOfDrivers"
            id="numberOfDrivers"
            value={numberOfDrivers}
            onChange={(e) => setNumberOfDrivers(e.target.value)}
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="1"
          />
        </div>
        <div className="mt-5">
          <button
            type="button"
            onClick={calculateCost}
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Calculate
          </button>
        </div>
        {swiftBytesResult && competitorsResult && differenceResult && orders && driverCosts &&  (
  <div className="mt-5">
    <div className="flex justify-between">
      <div className="text-sm text-green-500">SwiftBytes</div>
      <div className="text-sm text-gray-900">Revenue</div>
      <div className="text-sm text-gray-900">Competitors</div>
    </div>
    <div className="flex justify-between">
      <div className="text-sm text-green-500">£{swiftBytesResult}</div>
      <div className="text-sm text-gray-500">£{orders}</div>
      <div className="text-sm text-red-500">£{competitorsResult}</div>
    </div>
    <div className="flex justify-between">
      <div className="text-sm text-gray-500">Driver Costs: £{driverCosts}</div>

      <div className="text-sm text-green-500">Saving £{differenceResult}</div>
      <div className="text-sm text-red-500">includes 30% Commission</div>

      
    </div>
    <div className="flex justify-between"> 
        <div className="text-sm text-gray-500">Software Costs £6.66</div>
        </div>

  </div>
)}




            
      </div>
    </div>
  );
}
