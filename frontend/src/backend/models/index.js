// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InterviewSlots, ResturantInvoice, DriverHours, Resturants, Drivers, Messages, Orders, Staff, TimeEntry, KitchenMenu, HomePage, Holiday, ClockIn, StockControl, DriverHoursDrivers, DriverHoursResturants, DriversResturants, OrdersResturants, OrdersDrivers, MessagesOrders, KitchenMenuOrders, TimeEntryStaff, StockControlKitchenMenu, ClockInHoliday } = initSchema(schema);

export {
  InterviewSlots,
  ResturantInvoice,
  DriverHours,
  Resturants,
  Drivers,
  Messages,
  Orders,
  Staff,
  TimeEntry,
  KitchenMenu,
  HomePage,
  Holiday,
  ClockIn,
  StockControl,
  DriverHoursDrivers,
  DriverHoursResturants,
  DriversResturants,
  OrdersResturants,
  OrdersDrivers,
  MessagesOrders,
  KitchenMenuOrders,
  TimeEntryStaff,
  StockControlKitchenMenu,
  ClockInHoliday
};