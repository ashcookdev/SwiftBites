/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrdersCreateFormInputValues = {
    CreatedTime?: string;
    CreatedDate?: string;
    Collection?: boolean;
    Name?: string;
    Address?: string;
    Postcode?: string;
    Telephone?: string;
    Email?: string;
    Distance?: number;
    SecurityID?: string;
    Total?: number;
    DrinkItems?: string[];
    HotItems?: string[];
    Cooked?: boolean;
    JobAccepted?: boolean;
    Arrived?: boolean;
    Delivered?: boolean;
    TimeDelivered?: string;
    JobAcceptedTime?: string;
    Notes?: string;
    HotOrderPrep?: string;
    TotalNoVAT?: number;
    KitchenMenuId?: string[];
    ChefName?: string;
    Driver?: string;
    DeliveryCharge?: number;
    JourneyTime?: string;
    FullDeliveryTime?: string;
    BackAtBranch?: boolean;
    Complete?: boolean;
    Lat?: number[];
    Long?: number[];
    CustLat?: number;
    CustLong?: number;
    Paid?: boolean;
    ResturantID?: string;
    DriverID?: string;
    StarRating?: number;
};
export declare type OrdersCreateFormValidationValues = {
    CreatedTime?: ValidationFunction<string>;
    CreatedDate?: ValidationFunction<string>;
    Collection?: ValidationFunction<boolean>;
    Name?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    Postcode?: ValidationFunction<string>;
    Telephone?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Distance?: ValidationFunction<number>;
    SecurityID?: ValidationFunction<string>;
    Total?: ValidationFunction<number>;
    DrinkItems?: ValidationFunction<string>;
    HotItems?: ValidationFunction<string>;
    Cooked?: ValidationFunction<boolean>;
    JobAccepted?: ValidationFunction<boolean>;
    Arrived?: ValidationFunction<boolean>;
    Delivered?: ValidationFunction<boolean>;
    TimeDelivered?: ValidationFunction<string>;
    JobAcceptedTime?: ValidationFunction<string>;
    Notes?: ValidationFunction<string>;
    HotOrderPrep?: ValidationFunction<string>;
    TotalNoVAT?: ValidationFunction<number>;
    KitchenMenuId?: ValidationFunction<string>;
    ChefName?: ValidationFunction<string>;
    Driver?: ValidationFunction<string>;
    DeliveryCharge?: ValidationFunction<number>;
    JourneyTime?: ValidationFunction<string>;
    FullDeliveryTime?: ValidationFunction<string>;
    BackAtBranch?: ValidationFunction<boolean>;
    Complete?: ValidationFunction<boolean>;
    Lat?: ValidationFunction<number>;
    Long?: ValidationFunction<number>;
    CustLat?: ValidationFunction<number>;
    CustLong?: ValidationFunction<number>;
    Paid?: ValidationFunction<boolean>;
    ResturantID?: ValidationFunction<string>;
    DriverID?: ValidationFunction<string>;
    StarRating?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrdersCreateFormOverridesProps = {
    OrdersCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CreatedTime?: PrimitiveOverrideProps<TextFieldProps>;
    CreatedDate?: PrimitiveOverrideProps<TextFieldProps>;
    Collection?: PrimitiveOverrideProps<SwitchFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    Postcode?: PrimitiveOverrideProps<TextFieldProps>;
    Telephone?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Distance?: PrimitiveOverrideProps<TextFieldProps>;
    SecurityID?: PrimitiveOverrideProps<TextFieldProps>;
    Total?: PrimitiveOverrideProps<TextFieldProps>;
    DrinkItems?: PrimitiveOverrideProps<TextFieldProps>;
    HotItems?: PrimitiveOverrideProps<TextFieldProps>;
    Cooked?: PrimitiveOverrideProps<SwitchFieldProps>;
    JobAccepted?: PrimitiveOverrideProps<SwitchFieldProps>;
    Arrived?: PrimitiveOverrideProps<SwitchFieldProps>;
    Delivered?: PrimitiveOverrideProps<SwitchFieldProps>;
    TimeDelivered?: PrimitiveOverrideProps<TextFieldProps>;
    JobAcceptedTime?: PrimitiveOverrideProps<TextFieldProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
    HotOrderPrep?: PrimitiveOverrideProps<TextFieldProps>;
    TotalNoVAT?: PrimitiveOverrideProps<TextFieldProps>;
    KitchenMenuId?: PrimitiveOverrideProps<TextFieldProps>;
    ChefName?: PrimitiveOverrideProps<TextFieldProps>;
    Driver?: PrimitiveOverrideProps<TextFieldProps>;
    DeliveryCharge?: PrimitiveOverrideProps<TextFieldProps>;
    JourneyTime?: PrimitiveOverrideProps<TextFieldProps>;
    FullDeliveryTime?: PrimitiveOverrideProps<TextFieldProps>;
    BackAtBranch?: PrimitiveOverrideProps<SwitchFieldProps>;
    Complete?: PrimitiveOverrideProps<SwitchFieldProps>;
    Lat?: PrimitiveOverrideProps<TextFieldProps>;
    Long?: PrimitiveOverrideProps<TextFieldProps>;
    CustLat?: PrimitiveOverrideProps<TextFieldProps>;
    CustLong?: PrimitiveOverrideProps<TextFieldProps>;
    Paid?: PrimitiveOverrideProps<SwitchFieldProps>;
    ResturantID?: PrimitiveOverrideProps<TextFieldProps>;
    DriverID?: PrimitiveOverrideProps<TextFieldProps>;
    StarRating?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrdersCreateFormProps = React.PropsWithChildren<{
    overrides?: OrdersCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onSuccess?: (fields: OrdersCreateFormInputValues) => void;
    onError?: (fields: OrdersCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrdersCreateFormInputValues) => OrdersCreateFormInputValues;
    onValidate?: OrdersCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrdersCreateForm(props: OrdersCreateFormProps): React.ReactElement;
