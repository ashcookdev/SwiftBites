import React, { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Orders } from '../models';
import { Map, Marker, Overlay } from 'pigeon-maps';
import { HomeIcon } from '@heroicons/react/20/solid';

export default function DriverLocation() {
  const [driver, setDriver] = useState(null);

  useEffect(() => {
    const fetchDriver = async () => {
      const drivers = await DataStore.query(Orders);
      const filteredDrivers = drivers.filter(driver => driver.JobAccepted && !driver.Complete);
      setDriver(filteredDrivers);
    };

    const subscription = DataStore.observe(Orders).subscribe(fetchDriver);
    fetchDriver();

    return () => subscription.unsubscribe();
  }, []);

  console.log(driver);  

  return (
    <div className="h-screen w-full">
      {driver && driver.map(driver => (
        <div key={driver.id} className="h-full w-full mr-5">
          <Map 
            defaultCenter={[driver.Lat[driver.Lat.length - 1], driver.Long[driver.Long.length - 1]]} 
            defaultZoom={14} 
            width="100%" 
            height="100%"
          >
            <Marker width={50} anchor={[51.288413, 0.516339]}>
  <Overlay anchor={[51.288413, 0.516339]} offset={[120, 79]}>
    <HomeIcon className='animate-pulse text-red-500' height={50} width={50} />
    <div className="bg-white p-2 rounded shadow">
                  <p className='text-xs'>{driver.Name}</p>
                  <p className='text-xs'>To: {driver.Address}</p>
                </div>
  </Overlay>
</Marker>
        
  
            <Marker width={50} anchor={[driver.Lat[driver.Lat.length - 1], driver.Long[driver.Long.length - 1]]}>
              <Overlay anchor={[driver.Lat[driver.Lat.length - 1], driver.Long[driver.Long.length - 1]]} offset={[120, 79]}>
                <img className='animate-pulse' src="./swifty.png" width={150} height={150} alt="" />
                <div className="bg-white p-2 rounded shadow">
                  <p className='text-xs'>{driver.Driver}</p>
                  <p className='text-xs'>To: {driver.Postcode}</p>
                  {driver.JobAccepted ? (driver.Delivered ? <span className="text-green-500 animate-pulse">Delivered, Returning</span> : <span className="text-blue-500 animate-pulse">Enroute</span>) : ""}
                </div>
              </Overlay>
            </Marker>
          </Map>
        </div>
      ))}
    </div>
  );
}
