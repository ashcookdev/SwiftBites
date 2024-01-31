import { CheckIcon } from '@heroicons/react/20/solid'
import CostCalculator from './costcalulator'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const includedFeatures = [
  'Access to Delivery Portal',
  'Access to Stock Control System',
  'Point of Sale System',
  'Driver Rating System',
    'Finance Centre',
    'Full Driver Tracking Capabilities',
    'Driver Booking System',
    'Marketing Suite',
    'API Integration with Delivery Companies',
    'Menu Builder',
    'Customer Database',
    'Full Customer Management System',
    'Desktop and Mobile App',
    'Dedicated Account Manager',






]

export default function Example() {


    const [start, setStart] = useState(false);

    const navigate = useNavigate();

    if (start) {
        navigate('/bookvisit');
    }
    


  return (
    <div className="bg-gradient-to-t from-transparent from-0% via-cyan-100 to-fuchsia-100 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
            <img className="h-30 w-auto sm:h-30" src="/bytes.png" alt="SwiftBytes" />
            <CostCalculator />

        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Software Costs</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
             This is the pricing for the software costs.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Per Month</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">£200.00</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">GBP</span>
                </p>
                <button onClick={()=> setStart(true)}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
Book Visit                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
