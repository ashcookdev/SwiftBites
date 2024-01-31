import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerInterviewSlots = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InterviewSlots, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Time?: string | null;
  readonly Date?: string | null;
  readonly Name?: string | null;
  readonly Notes?: string | null;
  readonly JobOffered?: string | null;
  readonly ApplicationID?: string | null;
  readonly Drivers?: Drivers | null;
  readonly ZoomLink?: string | null;
  readonly Telephone?: string | null;
  readonly Email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly interviewSlotsDriversId?: string | null;
}

type LazyInterviewSlots = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<InterviewSlots, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Time?: string | null;
  readonly Date?: string | null;
  readonly Name?: string | null;
  readonly Notes?: string | null;
  readonly JobOffered?: string | null;
  readonly ApplicationID?: string | null;
  readonly Drivers: AsyncItem<Drivers | undefined>;
  readonly ZoomLink?: string | null;
  readonly Telephone?: string | null;
  readonly Email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly interviewSlotsDriversId?: string | null;
}

export declare type InterviewSlots = LazyLoading extends LazyLoadingDisabled ? EagerInterviewSlots : LazyInterviewSlots

export declare const InterviewSlots: (new (init: ModelInit<InterviewSlots>) => InterviewSlots) & {
  copyOf(source: InterviewSlots, mutator: (draft: MutableModel<InterviewSlots>) => MutableModel<InterviewSlots> | void): InterviewSlots;
}

type EagerResturantInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ResturantInvoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MondayDrivers?: string | null;
  readonly TuesdayDrivers?: string | null;
  readonly WednesdayDrivers?: string | null;
  readonly ThursdayDrivers?: string | null;
  readonly FridayDrivers?: string | null;
  readonly SaturdayDrivers?: string | null;
  readonly SundayDrivers?: string | null;
  readonly Week?: number | null;
  readonly TotalBasic?: number | null;
  readonly TotalDelivery?: number | null;
  readonly TotalPromo?: number | null;
  readonly TotalSoftware?: number | null;
  readonly FullCost?: string | null;
  readonly Paid?: string | null;
  readonly ResturantID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResturantInvoice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ResturantInvoice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly MondayDrivers?: string | null;
  readonly TuesdayDrivers?: string | null;
  readonly WednesdayDrivers?: string | null;
  readonly ThursdayDrivers?: string | null;
  readonly FridayDrivers?: string | null;
  readonly SaturdayDrivers?: string | null;
  readonly SundayDrivers?: string | null;
  readonly Week?: number | null;
  readonly TotalBasic?: number | null;
  readonly TotalDelivery?: number | null;
  readonly TotalPromo?: number | null;
  readonly TotalSoftware?: number | null;
  readonly FullCost?: string | null;
  readonly Paid?: string | null;
  readonly ResturantID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ResturantInvoice = LazyLoading extends LazyLoadingDisabled ? EagerResturantInvoice : LazyResturantInvoice

export declare const ResturantInvoice: (new (init: ModelInit<ResturantInvoice>) => ResturantInvoice) & {
  copyOf(source: ResturantInvoice, mutator: (draft: MutableModel<ResturantInvoice>) => MutableModel<ResturantInvoice> | void): ResturantInvoice;
}

type EagerDriverHours = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverHours, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DriverID?: string | null;
  readonly Date?: string | null;
  readonly Week?: number | null;
  readonly MondayBlock?: number | null;
  readonly TuesdayBlock?: number | null;
  readonly WednesdayBlock?: number | null;
  readonly ThursdayBlock?: number | null;
  readonly FridayBlock?: number | null;
  readonly SaturdayBlock?: number | null;
  readonly SundayBlock?: number | null;
  readonly BasicWageTotal?: number | null;
  readonly Hours?: number | null;
  readonly Deliverys?: number | null;
  readonly Promo?: number | null;
  readonly ExtraTotal?: number | null;
  readonly MondayResturant?: string | null;
  readonly TuesdayResturant?: string | null;
  readonly WednesdayResturant?: string | null;
  readonly ThursdayResturant?: string | null;
  readonly FridayResturant?: string | null;
  readonly SaturdayResturant?: string | null;
  readonly SundayResturant?: string | null;
  readonly Drivers?: (DriverHoursDrivers | null)[] | null;
  readonly Resturants?: (DriverHoursResturants | null)[] | null;
  readonly MondayClockIns?: string | null;
  readonly TuesdayClockins?: string | null;
  readonly WedesdayClockins?: string | null;
  readonly ThursdayClockins?: string | null;
  readonly FridayClockins?: string | null;
  readonly SaturdayClockins?: string | null;
  readonly SundayClockins?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriverHours = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverHours, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly DriverID?: string | null;
  readonly Date?: string | null;
  readonly Week?: number | null;
  readonly MondayBlock?: number | null;
  readonly TuesdayBlock?: number | null;
  readonly WednesdayBlock?: number | null;
  readonly ThursdayBlock?: number | null;
  readonly FridayBlock?: number | null;
  readonly SaturdayBlock?: number | null;
  readonly SundayBlock?: number | null;
  readonly BasicWageTotal?: number | null;
  readonly Hours?: number | null;
  readonly Deliverys?: number | null;
  readonly Promo?: number | null;
  readonly ExtraTotal?: number | null;
  readonly MondayResturant?: string | null;
  readonly TuesdayResturant?: string | null;
  readonly WednesdayResturant?: string | null;
  readonly ThursdayResturant?: string | null;
  readonly FridayResturant?: string | null;
  readonly SaturdayResturant?: string | null;
  readonly SundayResturant?: string | null;
  readonly Drivers: AsyncCollection<DriverHoursDrivers>;
  readonly Resturants: AsyncCollection<DriverHoursResturants>;
  readonly MondayClockIns?: string | null;
  readonly TuesdayClockins?: string | null;
  readonly WedesdayClockins?: string | null;
  readonly ThursdayClockins?: string | null;
  readonly FridayClockins?: string | null;
  readonly SaturdayClockins?: string | null;
  readonly SundayClockins?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DriverHours = LazyLoading extends LazyLoadingDisabled ? EagerDriverHours : LazyDriverHours

export declare const DriverHours: (new (init: ModelInit<DriverHours>) => DriverHours) & {
  copyOf(source: DriverHours, mutator: (draft: MutableModel<DriverHours>) => MutableModel<DriverHours> | void): DriverHours;
}

type EagerResturants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resturants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Postcode?: string | null;
  readonly Menu?: string | null;
  readonly Contract?: string | null;
  readonly Deliverys?: string | null;
  readonly CurrentDrivers?: number | null;
  readonly ContractStart?: string | null;
  readonly PaymentHistory?: string | null;
  readonly PaymentType?: string | null;
  readonly Telephone?: string | null;
  readonly Email?: string | null;
  readonly Reviews?: string | null;
  readonly StarRating?: number | null;
  readonly ContractFinish?: string | null;
  readonly Website?: string | null;
  readonly CurrentOutstanding?: number | null;
  readonly SortCode?: string | null;
  readonly AccountNumber?: string | null;
  readonly DriverID?: string | null;
  readonly driverhourss?: (DriverHoursResturants | null)[] | null;
  readonly driverss?: (DriversResturants | null)[] | null;
  readonly orderss?: (OrdersResturants | null)[] | null;
  readonly Genre?: string | null;
  readonly SalesNotes?: string | null;
  readonly VisitTime?: string | null;
  readonly CurrentTech?: string | null;
  readonly VisitDate?: string | null;
  readonly Prospect?: boolean | null;
  readonly Sold?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResturants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resturants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Postcode?: string | null;
  readonly Menu?: string | null;
  readonly Contract?: string | null;
  readonly Deliverys?: string | null;
  readonly CurrentDrivers?: number | null;
  readonly ContractStart?: string | null;
  readonly PaymentHistory?: string | null;
  readonly PaymentType?: string | null;
  readonly Telephone?: string | null;
  readonly Email?: string | null;
  readonly Reviews?: string | null;
  readonly StarRating?: number | null;
  readonly ContractFinish?: string | null;
  readonly Website?: string | null;
  readonly CurrentOutstanding?: number | null;
  readonly SortCode?: string | null;
  readonly AccountNumber?: string | null;
  readonly DriverID?: string | null;
  readonly driverhourss: AsyncCollection<DriverHoursResturants>;
  readonly driverss: AsyncCollection<DriversResturants>;
  readonly orderss: AsyncCollection<OrdersResturants>;
  readonly Genre?: string | null;
  readonly SalesNotes?: string | null;
  readonly VisitTime?: string | null;
  readonly CurrentTech?: string | null;
  readonly VisitDate?: string | null;
  readonly Prospect?: boolean | null;
  readonly Sold?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resturants = LazyLoading extends LazyLoadingDisabled ? EagerResturants : LazyResturants

export declare const Resturants: (new (init: ModelInit<Resturants>) => Resturants) & {
  copyOf(source: Resturants, mutator: (draft: MutableModel<Resturants>) => MutableModel<Resturants> | void): Resturants;
}

type EagerDrivers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Drivers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly PostCode?: string | null;
  readonly SortCode?: string | null;
  readonly AccountNumber?: string | null;
  readonly CarReg?: string | null;
  readonly MOTDate?: string | null;
  readonly StartDate?: string | null;
  readonly BasicWage?: number | null;
  readonly StarRating?: string | null;
  readonly InsuranceDetails?: string | null;
  readonly InterviewNotes?: string | null;
  readonly Nationality?: string | null;
  readonly YearsDriving?: string | null;
  readonly Deliverys?: number | null;
  readonly ContractFinish?: string | null;
  readonly InternalReviews?: string | null;
  readonly ContractType?: string | null;
  readonly Area?: string | null;
  readonly driverhourss?: (DriverHoursDrivers | null)[] | null;
  readonly Resturants?: (DriversResturants | null)[] | null;
  readonly orderss?: (OrdersDrivers | null)[] | null;
  readonly NationalInsurance?: string | null;
  readonly Telephone?: string | null;
  readonly LicenceNumber?: string | null;
  readonly PassedInterview?: boolean | null;
  readonly DriverReviews?: string | null;
  readonly DOB?: string | null;
  readonly InterviewAccepted?: boolean | null;
  readonly HRnotes?: string | null;
  readonly Current?: boolean | null;
  readonly County?: string | null;
  readonly Country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDrivers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Drivers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly PostCode?: string | null;
  readonly SortCode?: string | null;
  readonly AccountNumber?: string | null;
  readonly CarReg?: string | null;
  readonly MOTDate?: string | null;
  readonly StartDate?: string | null;
  readonly BasicWage?: number | null;
  readonly StarRating?: string | null;
  readonly InsuranceDetails?: string | null;
  readonly InterviewNotes?: string | null;
  readonly Nationality?: string | null;
  readonly YearsDriving?: string | null;
  readonly Deliverys?: number | null;
  readonly ContractFinish?: string | null;
  readonly InternalReviews?: string | null;
  readonly ContractType?: string | null;
  readonly Area?: string | null;
  readonly driverhourss: AsyncCollection<DriverHoursDrivers>;
  readonly Resturants: AsyncCollection<DriversResturants>;
  readonly orderss: AsyncCollection<OrdersDrivers>;
  readonly NationalInsurance?: string | null;
  readonly Telephone?: string | null;
  readonly LicenceNumber?: string | null;
  readonly PassedInterview?: boolean | null;
  readonly DriverReviews?: string | null;
  readonly DOB?: string | null;
  readonly InterviewAccepted?: boolean | null;
  readonly HRnotes?: string | null;
  readonly Current?: boolean | null;
  readonly County?: string | null;
  readonly Country?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Drivers = LazyLoading extends LazyLoadingDisabled ? EagerDrivers : LazyDrivers

export declare const Drivers: (new (init: ModelInit<Drivers>) => Drivers) & {
  copyOf(source: Drivers, mutator: (draft: MutableModel<Drivers>) => MutableModel<Drivers> | void): Drivers;
}

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
  readonly ResturantID?: string | null;
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
  readonly ResturantID?: string | null;
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
  readonly ResturantID?: string | null;
  readonly DriverID?: string | null;
  readonly Resturants?: (OrdersResturants | null)[] | null;
  readonly Drivers?: (OrdersDrivers | null)[] | null;
  readonly StarRating?: number | null;
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
  readonly ResturantID?: string | null;
  readonly DriverID?: string | null;
  readonly Resturants: AsyncCollection<OrdersResturants>;
  readonly Drivers: AsyncCollection<OrdersDrivers>;
  readonly StarRating?: number | null;
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
  readonly ResturantID?: string | null;
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
  readonly ResturantID?: string | null;
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
  readonly DriverID?: string | null;
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
  readonly DriverID?: string | null;
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

type EagerDriverHoursDrivers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverHoursDrivers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly driverHoursId?: string | null;
  readonly driversId?: string | null;
  readonly driverHours: DriverHours;
  readonly drivers: Drivers;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriverHoursDrivers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverHoursDrivers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly driverHoursId?: string | null;
  readonly driversId?: string | null;
  readonly driverHours: AsyncItem<DriverHours>;
  readonly drivers: AsyncItem<Drivers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DriverHoursDrivers = LazyLoading extends LazyLoadingDisabled ? EagerDriverHoursDrivers : LazyDriverHoursDrivers

export declare const DriverHoursDrivers: (new (init: ModelInit<DriverHoursDrivers>) => DriverHoursDrivers) & {
  copyOf(source: DriverHoursDrivers, mutator: (draft: MutableModel<DriverHoursDrivers>) => MutableModel<DriverHoursDrivers> | void): DriverHoursDrivers;
}

type EagerDriverHoursResturants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverHoursResturants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly driverHoursId?: string | null;
  readonly resturantsId?: string | null;
  readonly driverHours: DriverHours;
  readonly resturants: Resturants;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriverHoursResturants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriverHoursResturants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly driverHoursId?: string | null;
  readonly resturantsId?: string | null;
  readonly driverHours: AsyncItem<DriverHours>;
  readonly resturants: AsyncItem<Resturants>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DriverHoursResturants = LazyLoading extends LazyLoadingDisabled ? EagerDriverHoursResturants : LazyDriverHoursResturants

export declare const DriverHoursResturants: (new (init: ModelInit<DriverHoursResturants>) => DriverHoursResturants) & {
  copyOf(source: DriverHoursResturants, mutator: (draft: MutableModel<DriverHoursResturants>) => MutableModel<DriverHoursResturants> | void): DriverHoursResturants;
}

type EagerDriversResturants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriversResturants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resturantsId?: string | null;
  readonly driversId?: string | null;
  readonly resturants: Resturants;
  readonly drivers: Drivers;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDriversResturants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DriversResturants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resturantsId?: string | null;
  readonly driversId?: string | null;
  readonly resturants: AsyncItem<Resturants>;
  readonly drivers: AsyncItem<Drivers>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DriversResturants = LazyLoading extends LazyLoadingDisabled ? EagerDriversResturants : LazyDriversResturants

export declare const DriversResturants: (new (init: ModelInit<DriversResturants>) => DriversResturants) & {
  copyOf(source: DriversResturants, mutator: (draft: MutableModel<DriversResturants>) => MutableModel<DriversResturants> | void): DriversResturants;
}

type EagerOrdersResturants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdersResturants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resturantsId?: string | null;
  readonly ordersId?: string | null;
  readonly resturants: Resturants;
  readonly orders: Orders;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrdersResturants = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdersResturants, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly resturantsId?: string | null;
  readonly ordersId?: string | null;
  readonly resturants: AsyncItem<Resturants>;
  readonly orders: AsyncItem<Orders>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrdersResturants = LazyLoading extends LazyLoadingDisabled ? EagerOrdersResturants : LazyOrdersResturants

export declare const OrdersResturants: (new (init: ModelInit<OrdersResturants>) => OrdersResturants) & {
  copyOf(source: OrdersResturants, mutator: (draft: MutableModel<OrdersResturants>) => MutableModel<OrdersResturants> | void): OrdersResturants;
}

type EagerOrdersDrivers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdersDrivers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly driversId?: string | null;
  readonly ordersId?: string | null;
  readonly drivers: Drivers;
  readonly orders: Orders;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrdersDrivers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrdersDrivers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly driversId?: string | null;
  readonly ordersId?: string | null;
  readonly drivers: AsyncItem<Drivers>;
  readonly orders: AsyncItem<Orders>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type OrdersDrivers = LazyLoading extends LazyLoadingDisabled ? EagerOrdersDrivers : LazyOrdersDrivers

export declare const OrdersDrivers: (new (init: ModelInit<OrdersDrivers>) => OrdersDrivers) & {
  copyOf(source: OrdersDrivers, mutator: (draft: MutableModel<OrdersDrivers>) => MutableModel<OrdersDrivers> | void): OrdersDrivers;
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