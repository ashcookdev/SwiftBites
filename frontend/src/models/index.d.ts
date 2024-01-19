import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly email?: string | null;
  readonly group?: (string | null)[] | null;
  readonly orderID?: string | null;
  readonly Orders?: (MessagesOrders | null)[] | null;
  readonly updatedAt?: string | null;
}

type LazyMessages = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Messages, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly content?: string | null;
  readonly createdAt?: string | null;
  readonly email?: string | null;
  readonly group?: (string | null)[] | null;
  readonly orderID?: string | null;
  readonly Orders: AsyncCollection<MessagesOrders>;
  readonly updatedAt?: string | null;
}

export declare type Messages = LazyLoading extends LazyLoadingDisabled ? EagerMessages : LazyMessages

export declare const Messages: (new (init: ModelInit<Messages>) => Messages) & {
  copyOf(source: Messages, mutator: (draft: MutableModel<Messages>) => MutableModel<Messages> | void): Messages;
}

type EagerOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CreatedTime?: string | null;
  readonly CreatedDate?: string | null;
  readonly Collection?: boolean | null;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Postcode?: string | null;
  readonly Telephone?: string | null;
  readonly Email?: string | null;
  readonly Distance?: number | null;
  readonly SecurityID?: string | null;
  readonly Total?: number | null;
  readonly DrinkItems?: (string | null)[] | null;
  readonly HotItems?: (string | null)[] | null;
  readonly Cooked?: boolean | null;
  readonly JobAccepted?: boolean | null;
  readonly Arrived?: boolean | null;
  readonly Delivered?: boolean | null;
  readonly TimeDelivered?: string | null;
  readonly JobAcceptedTime?: string | null;
  readonly Notes?: string | null;
  readonly HotOrderPrep?: string | null;
  readonly TotalNoVAT?: number | null;
  readonly KitchenMenuId?: (string | null)[] | null;
  readonly ChefName?: string | null;
  readonly Driver?: string | null;
  readonly DeliveryCharge?: number | null;
  readonly kitchenmenus?: (KitchenMenuOrders | null)[] | null;
  readonly messagess?: (MessagesOrders | null)[] | null;
  readonly JourneyTime?: string | null;
  readonly FullDeliveryTime?: string | null;
  readonly BackAtBranch?: boolean | null;
  readonly Complete?: boolean | null;
  readonly Lat?: (number | null)[] | null;
  readonly Long?: (number | null)[] | null;
  readonly CustLat?: number | null;
  readonly CustLong?: number | null;
  readonly Paid?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CreatedTime?: string | null;
  readonly CreatedDate?: string | null;
  readonly Collection?: boolean | null;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Postcode?: string | null;
  readonly Telephone?: string | null;
  readonly Email?: string | null;
  readonly Distance?: number | null;
  readonly SecurityID?: string | null;
  readonly Total?: number | null;
  readonly DrinkItems?: (string | null)[] | null;
  readonly HotItems?: (string | null)[] | null;
  readonly Cooked?: boolean | null;
  readonly JobAccepted?: boolean | null;
  readonly Arrived?: boolean | null;
  readonly Delivered?: boolean | null;
  readonly TimeDelivered?: string | null;
  readonly JobAcceptedTime?: string | null;
  readonly Notes?: string | null;
  readonly HotOrderPrep?: string | null;
  readonly TotalNoVAT?: number | null;
  readonly KitchenMenuId?: (string | null)[] | null;
  readonly ChefName?: string | null;
  readonly Driver?: string | null;
  readonly DeliveryCharge?: number | null;
  readonly kitchenmenus: AsyncCollection<KitchenMenuOrders>;
  readonly messagess: AsyncCollection<MessagesOrders>;
  readonly JourneyTime?: string | null;
  readonly FullDeliveryTime?: string | null;
  readonly BackAtBranch?: boolean | null;
  readonly Complete?: boolean | null;
  readonly Lat?: (number | null)[] | null;
  readonly Long?: (number | null)[] | null;
  readonly CustLat?: number | null;
  readonly CustLong?: number | null;
  readonly Paid?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Orders = LazyLoading extends LazyLoadingDisabled ? EagerOrders : LazyOrders

export declare const Orders: (new (init: ModelInit<Orders>) => Orders) & {
  copyOf(source: Orders, mutator: (draft: MutableModel<Orders>) => MutableModel<Orders> | void): Orders;
}

type EagerStaff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Staff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly TimeEntries?: string | null;
  readonly Role?: string | null;
  readonly HourlyRate?: number | null;
  readonly StartDate?: string | null;
  readonly Current?: boolean | null;
  readonly Telephone?: string | null;
  readonly ContractType?: string | null;
  readonly CarReg?: string | null;
  readonly EndDate?: string | null;
  readonly Age?: string | null;
  readonly DOB?: string | null;
  readonly timeentrys?: (TimeEntryStaff | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStaff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Staff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly TimeEntries?: string | null;
  readonly Role?: string | null;
  readonly HourlyRate?: number | null;
  readonly StartDate?: string | null;
  readonly Current?: boolean | null;
  readonly Telephone?: string | null;
  readonly ContractType?: string | null;
  readonly CarReg?: string | null;
  readonly EndDate?: string | null;
  readonly Age?: string | null;
  readonly DOB?: string | null;
  readonly timeentrys: AsyncCollection<TimeEntryStaff>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Staff = LazyLoading extends LazyLoadingDisabled ? EagerStaff : LazyStaff

export declare const Staff: (new (init: ModelInit<Staff>) => Staff) & {
  copyOf(source: Staff, mutator: (draft: MutableModel<Staff>) => MutableModel<Staff> | void): Staff;
}

type EagerTimeEntry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TimeEntry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StaffID?: string | null;
  readonly Hours?: number | null;
  readonly Dates?: (string | null)[] | null;
  readonly ShiftStart?: (string | null)[] | null;
  readonly ShiftFinish?: (string | null)[] | null;
  readonly Month?: string | null;
  readonly StaffName?: string | null;
  readonly Holiday?: (string | null)[] | null;
  readonly Staff?: (TimeEntryStaff | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimeEntry = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TimeEntry, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly StaffID?: string | null;
  readonly Hours?: number | null;
  readonly Dates?: (string | null)[] | null;
  readonly ShiftStart?: (string | null)[] | null;
  readonly ShiftFinish?: (string | null)[] | null;
  readonly Month?: string | null;
  readonly StaffName?: string | null;
  readonly Holiday?: (string | null)[] | null;
  readonly Staff: AsyncCollection<TimeEntryStaff>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TimeEntry = LazyLoading extends LazyLoadingDisabled ? EagerTimeEntry : LazyTimeEntry

export declare const TimeEntry: (new (init: ModelInit<TimeEntry>) => TimeEntry) & {
  copyOf(source: TimeEntry, mutator: (draft: MutableModel<TimeEntry>) => MutableModel<TimeEntry> | void): TimeEntry;
}

type EagerKitchenMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KitchenMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Price?: number | null;
  readonly Description?: string | null;
  readonly Notes?: string | null;
  readonly Kitchen?: boolean | null;
  readonly imageSrc?: string | null;
  readonly Prep?: string | null;
  readonly Ingredients?: string | null;
  readonly Snooze?: boolean | null;
  readonly Extras?: string | null;
  readonly Category?: string | null;
  readonly ProfitMargin?: number | null;
  readonly PriceNoVAT?: number | null;
  readonly InStock?: boolean | null;
  readonly StockLevel?: number | null;
  readonly stockcontrols?: (StockControlKitchenMenu | null)[] | null;
  readonly Orders?: (KitchenMenuOrders | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKitchenMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KitchenMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Price?: number | null;
  readonly Description?: string | null;
  readonly Notes?: string | null;
  readonly Kitchen?: boolean | null;
  readonly imageSrc?: string | null;
  readonly Prep?: string | null;
  readonly Ingredients?: string | null;
  readonly Snooze?: boolean | null;
  readonly Extras?: string | null;
  readonly Category?: string | null;
  readonly ProfitMargin?: number | null;
  readonly PriceNoVAT?: number | null;
  readonly InStock?: boolean | null;
  readonly StockLevel?: number | null;
  readonly stockcontrols: AsyncCollection<StockControlKitchenMenu>;
  readonly Orders: AsyncCollection<KitchenMenuOrders>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type KitchenMenu = LazyLoading extends LazyLoadingDisabled ? EagerKitchenMenu : LazyKitchenMenu

export declare const KitchenMenu: (new (init: ModelInit<KitchenMenu>) => KitchenMenu) & {
  copyOf(source: KitchenMenu, mutator: (draft: MutableModel<KitchenMenu>) => MutableModel<KitchenMenu> | void): KitchenMenu;
}

type EagerHomePage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HomePage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TopSectionTitle?: string | null;
  readonly TopSectionPic?: string | null;
  readonly TopSectionDescription?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHomePage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<HomePage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly TopSectionTitle?: string | null;
  readonly TopSectionPic?: string | null;
  readonly TopSectionDescription?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type HomePage = LazyLoading extends LazyLoadingDisabled ? EagerHomePage : LazyHomePage

export declare const HomePage: (new (init: ModelInit<HomePage>) => HomePage) & {
  copyOf(source: HomePage, mutator: (draft: MutableModel<HomePage>) => MutableModel<HomePage> | void): HomePage;
}

type EagerHoliday = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Holiday, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly StartDate?: string | null;
  readonly Description?: string | null;
  readonly EndDate?: string | null;
  readonly Approved?: boolean | null;
  readonly clockins?: (ClockInHoliday | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyHoliday = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Holiday, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly StartDate?: string | null;
  readonly Description?: string | null;
  readonly EndDate?: string | null;
  readonly Approved?: boolean | null;
  readonly clockins: AsyncCollection<ClockInHoliday>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Holiday = LazyLoading extends LazyLoadingDisabled ? EagerHoliday : LazyHoliday

export declare const Holiday: (new (init: ModelInit<Holiday>) => Holiday) & {
  copyOf(source: Holiday, mutator: (draft: MutableModel<Holiday>) => MutableModel<Holiday> | void): Holiday;
}

type EagerClockIn = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClockIn, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClockIn?: string | null;
  readonly ClockOut?: string | null;
  readonly Sick?: boolean | null;
  readonly Holiday?: string | null;
  readonly StaffId?: string | null;
  readonly TimeEntryId?: string | null;
  readonly Date?: string | null;
  readonly ClockedIn?: boolean | null;
  readonly ClockedOut?: boolean | null;
  readonly StaffName?: string | null;
  readonly StaffRole?: string | null;
  readonly Break?: boolean | null;
  readonly BreakStart?: string | null;
  readonly BreakEnd?: string | null;
  readonly Holidays?: (ClockInHoliday | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClockIn = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClockIn, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ClockIn?: string | null;
  readonly ClockOut?: string | null;
  readonly Sick?: boolean | null;
  readonly Holiday?: string | null;
  readonly StaffId?: string | null;
  readonly TimeEntryId?: string | null;
  readonly Date?: string | null;
  readonly ClockedIn?: boolean | null;
  readonly ClockedOut?: boolean | null;
  readonly StaffName?: string | null;
  readonly StaffRole?: string | null;
  readonly Break?: boolean | null;
  readonly BreakStart?: string | null;
  readonly BreakEnd?: string | null;
  readonly Holidays: AsyncCollection<ClockInHoliday>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClockIn = LazyLoading extends LazyLoadingDisabled ? EagerClockIn : LazyClockIn

export declare const ClockIn: (new (init: ModelInit<ClockIn>) => ClockIn) & {
  copyOf(source: ClockIn, mutator: (draft: MutableModel<ClockIn>) => MutableModel<ClockIn> | void): ClockIn;
}

type EagerStockControl = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockControl, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Weight?: number | null;
  readonly Quantity?: number | null;
  readonly Price?: number | null;
  readonly PreVAT?: number | null;
  readonly Supplier?: string | null;
  readonly VAT?: number | null;
  readonly CurrentStockLevel?: number | null;
  readonly Cases?: number | null;
  readonly ProductId?: string | null;
  readonly NewPrice?: number | null;
  readonly NewVAT?: number | null;
  readonly UsedBy?: string | null;
  readonly KitchenMenus?: (StockControlKitchenMenu | null)[] | null;
  readonly MatchCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockControl = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockControl, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Weight?: number | null;
  readonly Quantity?: number | null;
  readonly Price?: number | null;
  readonly PreVAT?: number | null;
  readonly Supplier?: string | null;
  readonly VAT?: number | null;
  readonly CurrentStockLevel?: number | null;
  readonly Cases?: number | null;
  readonly ProductId?: string | null;
  readonly NewPrice?: number | null;
  readonly NewVAT?: number | null;
  readonly UsedBy?: string | null;
  readonly KitchenMenus: AsyncCollection<StockControlKitchenMenu>;
  readonly MatchCode?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockControl = LazyLoading extends LazyLoadingDisabled ? EagerStockControl : LazyStockControl

export declare const StockControl: (new (init: ModelInit<StockControl>) => StockControl) & {
  copyOf(source: StockControl, mutator: (draft: MutableModel<StockControl>) => MutableModel<StockControl> | void): StockControl;
}

type EagerMessagesOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessagesOrders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messagesId?: string | null;
  readonly ordersId?: string | null;
  readonly messages: Messages;
  readonly orders: Orders;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessagesOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MessagesOrders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly messagesId?: string | null;
  readonly ordersId?: string | null;
  readonly messages: AsyncItem<Messages>;
  readonly orders: AsyncItem<Orders>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MessagesOrders = LazyLoading extends LazyLoadingDisabled ? EagerMessagesOrders : LazyMessagesOrders

export declare const MessagesOrders: (new (init: ModelInit<MessagesOrders>) => MessagesOrders) & {
  copyOf(source: MessagesOrders, mutator: (draft: MutableModel<MessagesOrders>) => MutableModel<MessagesOrders> | void): MessagesOrders;
}

type EagerKitchenMenuOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KitchenMenuOrders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ordersId?: string | null;
  readonly kitchenMenuId?: string | null;
  readonly orders: Orders;
  readonly kitchenMenu: KitchenMenu;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyKitchenMenuOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<KitchenMenuOrders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ordersId?: string | null;
  readonly kitchenMenuId?: string | null;
  readonly orders: AsyncItem<Orders>;
  readonly kitchenMenu: AsyncItem<KitchenMenu>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type KitchenMenuOrders = LazyLoading extends LazyLoadingDisabled ? EagerKitchenMenuOrders : LazyKitchenMenuOrders

export declare const KitchenMenuOrders: (new (init: ModelInit<KitchenMenuOrders>) => KitchenMenuOrders) & {
  copyOf(source: KitchenMenuOrders, mutator: (draft: MutableModel<KitchenMenuOrders>) => MutableModel<KitchenMenuOrders> | void): KitchenMenuOrders;
}

type EagerTimeEntryStaff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TimeEntryStaff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly staffId?: string | null;
  readonly timeEntryId?: string | null;
  readonly staff: Staff;
  readonly timeEntry: TimeEntry;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTimeEntryStaff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TimeEntryStaff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly staffId?: string | null;
  readonly timeEntryId?: string | null;
  readonly staff: AsyncItem<Staff>;
  readonly timeEntry: AsyncItem<TimeEntry>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TimeEntryStaff = LazyLoading extends LazyLoadingDisabled ? EagerTimeEntryStaff : LazyTimeEntryStaff

export declare const TimeEntryStaff: (new (init: ModelInit<TimeEntryStaff>) => TimeEntryStaff) & {
  copyOf(source: TimeEntryStaff, mutator: (draft: MutableModel<TimeEntryStaff>) => MutableModel<TimeEntryStaff> | void): TimeEntryStaff;
}

type EagerStockControlKitchenMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockControlKitchenMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly kitchenMenuId?: string | null;
  readonly stockControlId?: string | null;
  readonly kitchenMenu: KitchenMenu;
  readonly stockControl: StockControl;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStockControlKitchenMenu = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StockControlKitchenMenu, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly kitchenMenuId?: string | null;
  readonly stockControlId?: string | null;
  readonly kitchenMenu: AsyncItem<KitchenMenu>;
  readonly stockControl: AsyncItem<StockControl>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StockControlKitchenMenu = LazyLoading extends LazyLoadingDisabled ? EagerStockControlKitchenMenu : LazyStockControlKitchenMenu

export declare const StockControlKitchenMenu: (new (init: ModelInit<StockControlKitchenMenu>) => StockControlKitchenMenu) & {
  copyOf(source: StockControlKitchenMenu, mutator: (draft: MutableModel<StockControlKitchenMenu>) => MutableModel<StockControlKitchenMenu> | void): StockControlKitchenMenu;
}

type EagerClockInHoliday = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClockInHoliday, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly holidayId?: string | null;
  readonly clockInId?: string | null;
  readonly holiday: Holiday;
  readonly clockIn: ClockIn;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClockInHoliday = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClockInHoliday, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly holidayId?: string | null;
  readonly clockInId?: string | null;
  readonly holiday: AsyncItem<Holiday>;
  readonly clockIn: AsyncItem<ClockIn>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClockInHoliday = LazyLoading extends LazyLoadingDisabled ? EagerClockInHoliday : LazyClockInHoliday

export declare const ClockInHoliday: (new (init: ModelInit<ClockInHoliday>) => ClockInHoliday) & {
  copyOf(source: ClockInHoliday, mutator: (draft: MutableModel<ClockInHoliday>) => MutableModel<ClockInHoliday> | void): ClockInHoliday;
}