import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './login';
import Map from './map';
import DriverPortal from './pages/driverportal';
import Dispatch from './pages/dispatch';
import Settings from './pages/settings';
import StockControl from './pages/stockcontrol';
import BuildAMeal from './pages/buildameal';
import MealProfit from './pages/mealprofitmargins';
import TillProducts from './pages/tillproducts';
import StaffNav from './StaffNavbar';
import CustomerNav from './customernav';
import Till from './pages/till';
import Kitchen from './pages/kitchenhome';
import Delivery from './pages/deliveryform';
import Staff from './pages/shifts';
import StaffDetails from './pages/staffdetails';
import Task from './pages/Task';
import StaffActions from './pages/staffactions';
import Home from './pages/home';
import Messages from './pages/messages';
import SwiftHome from './pages/SwiftHome';
import Sales from './pages/sales';
import SalesPricing from './pages/salespricing';
import DriverSign from './pages/driversignup';
import DriverSignApplication from './pages/driverapplicationform';

export function App() {
  const [userGroup, setUserGroup] = React.useState('');
  const location = useLocation();

  useEffect(() => {
    Auth.currentSession().then((session) => {
      const groups = session.getIdToken().payload['cognito:groups'] || [];
      setUserGroup(groups[0] || '');
    });
  }, []);

  const allowedGroups = ['Developer', 'Drivers', 'Admin', 'Staff'];

  const isSignedIn = Auth.currentAuthenticatedUser() ? true : false;

  return (
    <>
      {isSignedIn &&
        !allowedGroups.includes(userGroup) &&
        !['/kitchen', '/finance', '/chat', '/map', '/dash', '/dispatch', '/', '/kitchen', '/mobileportal', '/'].includes(
          location.pathname
        ) ? (
        <CustomerNav />
      ) : isSignedIn &&
        allowedGroups.includes(userGroup) &&
        !['/finance', '/chat', '/dash', '/map', '/dispatch', '/', '/kitchen', '/mobileportal'].includes(location.pathname) ? (
        <StaffNav />
      ) : null}
      <Routes>
        <Route path="/" element={<SwiftHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/pricing" element={<SalesPricing />} />
        <Route path="/driversignup" element={<DriverSign />} />
        <Route path='/driversignup/application' element={<DriverSignApplication />} />
        {userGroup === 'Admin' && (
          <>
            <Route path="/dash" element={<Home />} />
            <Route path="/map" element={<Map />} />
            <Route path="/till" element={<Till />} />
            <Route path="/driverportal" element={<DriverPortal />} />
            <Route path="/dispatch" element={<Dispatch />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/stockcontrol" element={<StockControl />} />
            <Route path="/buildameal" element={<BuildAMeal />} />
            <Route path="/mealprofit" element={<MealProfit />} />
            <Route path="/tillproducts" element={<TillProducts />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/staff/staffedit" element={<StaffDetails />} />
            <Route path="/staff/shiftbooking" element={<Task />} />
            <Route path="/clockin" element={<StaffActions />} />
            <Route path="/messages" element={<Messages />} />
          </>
        )}
        {userGroup === 'Drivers' && (
          <>
            <Route path="/mobileportal" element={<DriverPortal />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default withAuthenticator(App);
