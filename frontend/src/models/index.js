// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Messages, Orders, Staff, TimeEntry, KitchenMenu, HomePage, Holiday, ClockIn, StockControl, MessagesOrders, KitchenMenuOrders, TimeEntryStaff, StockControlKitchenMenu, ClockInHoliday } = initSchema(schema);

export {
  Messages,
  Orders,
  Staff,
  TimeEntry,
  KitchenMenu,
  HomePage,
  Holiday,
  ClockIn,
  StockControl,
  MessagesOrders,
  KitchenMenuOrders,
  TimeEntryStaff,
  StockControlKitchenMenu,
  ClockInHoliday
};