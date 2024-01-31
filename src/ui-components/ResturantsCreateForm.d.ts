/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ResturantsCreateFormInputValues = {
    Name?: string;
    Address?: string;
    Postcode?: string;
    Menu?: string;
    Contract?: string;
    Deliverys?: string;
    CurrentDrivers?: number;
    ContractStart?: string;
    PaymentHistory?: string;
    PaymentType?: string;
    Telephone?: string;
    Email?: string;
    Reviews?: string;
    StarRating?: number;
    ContractFinish?: string;
    Website?: string;
    CurrentOutstanding?: number;
    SortCode?: string;
    AccountNumber?: string;
    DriverID?: string;
    Genre?: string;
    SalesNotes?: string;
    VisitTime?: string;
    CurrentTech?: string;
    VisitDate?: string;
    Prospect?: boolean;
    Sold?: boolean;
};
export declare type ResturantsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    Postcode?: ValidationFunction<string>;
    Menu?: ValidationFunction<string>;
    Contract?: ValidationFunction<string>;
    Deliverys?: ValidationFunction<string>;
    CurrentDrivers?: ValidationFunction<number>;
    ContractStart?: ValidationFunction<string>;
    PaymentHistory?: ValidationFunction<string>;
    PaymentType?: ValidationFunction<string>;
    Telephone?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Reviews?: ValidationFunction<string>;
    StarRating?: ValidationFunction<number>;
    ContractFinish?: ValidationFunction<string>;
    Website?: ValidationFunction<string>;
    CurrentOutstanding?: ValidationFunction<number>;
    SortCode?: ValidationFunction<string>;
    AccountNumber?: ValidationFunction<string>;
    DriverID?: ValidationFunction<string>;
    Genre?: ValidationFunction<string>;
    SalesNotes?: ValidationFunction<string>;
    VisitTime?: ValidationFunction<string>;
    CurrentTech?: ValidationFunction<string>;
    VisitDate?: ValidationFunction<string>;
    Prospect?: ValidationFunction<boolean>;
    Sold?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResturantsCreateFormOverridesProps = {
    ResturantsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    Postcode?: PrimitiveOverrideProps<TextFieldProps>;
    Menu?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Contract?: PrimitiveOverrideProps<TextFieldProps>;
    Deliverys?: PrimitiveOverrideProps<TextFieldProps>;
    CurrentDrivers?: PrimitiveOverrideProps<TextFieldProps>;
    ContractStart?: PrimitiveOverrideProps<TextFieldProps>;
    PaymentHistory?: PrimitiveOverrideProps<TextAreaFieldProps>;
    PaymentType?: PrimitiveOverrideProps<TextFieldProps>;
    Telephone?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Reviews?: PrimitiveOverrideProps<TextFieldProps>;
    StarRating?: PrimitiveOverrideProps<TextFieldProps>;
    ContractFinish?: PrimitiveOverrideProps<TextFieldProps>;
    Website?: PrimitiveOverrideProps<TextFieldProps>;
    CurrentOutstanding?: PrimitiveOverrideProps<TextFieldProps>;
    SortCode?: PrimitiveOverrideProps<TextFieldProps>;
    AccountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    DriverID?: PrimitiveOverrideProps<TextFieldProps>;
    Genre?: PrimitiveOverrideProps<TextFieldProps>;
    SalesNotes?: PrimitiveOverrideProps<TextFieldProps>;
    VisitTime?: PrimitiveOverrideProps<TextFieldProps>;
    CurrentTech?: PrimitiveOverrideProps<TextFieldProps>;
    VisitDate?: PrimitiveOverrideProps<TextFieldProps>;
    Prospect?: PrimitiveOverrideProps<SwitchFieldProps>;
    Sold?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ResturantsCreateFormProps = React.PropsWithChildren<{
    overrides?: ResturantsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResturantsCreateFormInputValues) => ResturantsCreateFormInputValues;
    onSuccess?: (fields: ResturantsCreateFormInputValues) => void;
    onError?: (fields: ResturantsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResturantsCreateFormInputValues) => ResturantsCreateFormInputValues;
    onValidate?: ResturantsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResturantsCreateForm(props: ResturantsCreateFormProps): React.ReactElement;
