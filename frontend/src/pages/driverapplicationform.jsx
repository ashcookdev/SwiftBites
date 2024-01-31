
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { DataStore } from 'aws-amplify'
import { useEffect, useState } from 'react'
import {Drivers} from '../backend/models'
import ApplicationComplete from './applicationcomplete'
export default function Application() {

        const [formData, setFormData] = useState({
          Name: '',
          Address: '',
          PostCode: '',
          CarReg: '',
          MOTDate: '',
          Area: '',
          InsuranceDetails: {},
          YearsDriving: '',
          NationalInsurance: '',
          Telephone: '',
          LicenceNumber: '',
          PassedInterview: false,
          DOB: '',
          InterviewAccepted: false,
          HRnotes: '',
          Current: false,
        });
        const [showInterview, setShowInterview] = useState(false);

      
        const handleChange = (e) => {
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        };
      
        const handleSubmit = async (e) => {
            e.preventDefault();
          
           
          
            // Check if YearsDriving is less than 3
            if (parseInt(formData.YearsDriving) < 3) {
              alert('Sorry, we cannot proceed. Your driving experience is less than 3 years.');
              return;
            }
          
            try {
              await DataStore.save(new Drivers(formData));
              console.log('Form data saved successfully.');
          
              // If the data is saved successfully, set showInterview to true
              setShowInterview(true);
          
              setFormData({
                // ... (reset form fields)
              });
            } catch (error) {
              console.error('Error saving form data:', error);
            }
          };
    


  return (
    <div className="bg-white">
    {showInterview ? <ApplicationComplete/> : (

    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Application Form</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will only be used internally for application purposes.
          </p>
          </div>

          

        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3 space-y-2">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Full name
                    </label>
                    <div className="mt-2">
                        <input onChange={handleChange}
                        value={formData.Name}
                            type="text"
                            name="Name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-3 space-y-2">
                    <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
DOB                    </label>
                    <div className="mt-2">
                        <input onChange={handleChange}
                        value={formData.DOB}
                            type="date"
                            name="DOB"
                            id="dob"
                           
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-4 space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                        onChange={handleChange}
                        value={formData.Email}
                        type="text"
                            id="email"
                            name="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-4 space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                        Telephone
                    </label>
                    <div className="mt-2">
                        <input
                        onChange={handleChange}
                        value={formData.Telephone}
                        type="text"
                            id="phone"
                            name="Telephone"
                            autoComplete="telephone"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


                <div className="col-span-full space-y-2">
                    <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                        Street address
                    </label>
                    <div className="mt-2">
                        <input
                        onChange={handleChange}
                        value={formData.Address}
                            type="text"
                            name="Address"
                            id="Address"
                            autoComplete="Address"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1 space-y-2">
                   

                                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                                    <div className="sm:col-span-2 space-y-2">
                                        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                            City
                                        </label>
                                        <div className="mt-2">
                                            <input onChange={handleChange}
                                                value={formData.Area}
                                                type="Area"
                                                name="Area"
                                                id="Area"
                                                autoComplete="address-level2"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    </div>

                                    
                                    
                    

                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                        County
                    </label>
                    <div className="mt-2">
                        <input onChange={handleChange}
                            value={formData.County}
                            type="text"
                            name="County"
                            id="County"
                            autoComplete="address-level1"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                        Postcode
                    </label>
                    <div className="mt-2">
                        <input onChange={handleChange}
                            value={formData.PostCode}
                            type="text"
                            name="PostCode"
                            id="PostCode"
                            autoComplete="postal-code"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="nin" className="block text-sm font-medium leading-6 text-gray-900">
                        National Insurance Number
                    </label>
                    <div className="mt-2">
                        <input onChange={handleChange}
                            value={formData.NationalInsurance}
                            type="text"
                            name="NationalInsurance"
                            id="NationalInsurance"
                            autoComplete="NationalInsurance"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="driving-license" className="block text-sm font-medium leading-6 text-gray-900">
                        Driving License Number
                    </label>
                    <div className="mt-2">
                        <input onChange={handleChange}
                            value={formData.LicenceNumber}
                            type="text"
                            name="LicenceNumber"
                            id=" LicenceNumber"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="car-reg" className="block text-sm font-medium leading-6 text-gray-900">
                        Car Registration 
                    </label>
                    <div className="mt-2">
                        <input onChange={handleChange}
                        value={formData.CarReg}
                            type="text"
                            name="CarReg"
                            id="CarReg"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="driving-experience" className="block text-sm font-medium leading-6 text-gray-900">
                        Years of Driving Experience 
                    </label>
                    <div className="mt-2">
                        <input
                        onChange={handleChange}
                        value={formData.YearsDriving}

                            type="text"
                            name="YearsDriving"
                            id="years-driving"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="driving-experience" className="block text-sm font-medium leading-6 text-gray-900">
                        MOT Expiry Date
                    </label>
                    <div className="mt-2">
                        <input
                        onChange={handleChange}
                        value={formData.MOTDate}
                            type="date"
                            name="MOTDate"
                            id="    MOTDate"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="bus-reg" className="block text-sm font-medium leading-6 text-gray-900">
                        Business Insurance Company
                    </label>
                    <div className="mt-2">
                        <input onChange={handleChange}
                        value={formData.InsuranceDetails.Company}

                            type="text"
                            name="InsuranceDetails.Company"
                            id="bus-insurance"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2 space-y-2">
                    <label htmlFor="car-reg" className="block text-sm font-medium leading-6 text-gray-900">
                        Business Insurance Policy Number
                    </label>
                    <div className="mt-2">
                        <input
                        onChange={handleChange}
                        value={formData.InsuranceDetails.PolicyNumber}
                            type="text"
                            name="years-driving"
                            id="years-driving"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <p className="mt-1 text-sm leading-6 text-gray-600">
Please Insure you have answered all questions correctly and honestly.
            </p>
          
        </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit to Recruitment Team
        </button>
      </div>

      </div>
      </div>

      </form>
    )}

      </div>
      
      )
}
