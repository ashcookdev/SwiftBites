// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { InterviewSlots, ResturantInvoice, DriverHours, TakeAway, Drivers, Messages, Orders, Staff, TimeEntry, KitchenMenu, HomePage, Holiday, ClockIn, StockControl, DriverHoursDrivers, DriverHoursTakeAway, DriversTakeAway, OrdersTakeAway, TakeAwayKitchenMenu, OrdersDrivers, MessagesOrders, KitchenMenuOrders, TimeEntryStaff, StockControlKitchenMenu, ClockInHoliday } = initSchema(schema);

export {
  InterviewSlots,
  ResturantInvoice,
  DriverHours,
  TakeAway,
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
  DriverHoursTakeAway,
  DriversTakeAway,
  OrdersTakeAway,
  TakeAwayKitchenMenu,
  OrdersDrivers,
  MessagesOrders,
  KitchenMenuOrders,
  TimeEntryStaff,
  StockControlKitchenMenu,
  ClockInHoliday
};