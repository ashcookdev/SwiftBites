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
export declare type TakeAwayCreateFormInputValues = {
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
    City?: string;
    County?: string;
    Area?: string;
    Marketing?: string;
    PromoBudget?: string;
};
export declare type TakeAwayCreateFormValidationValues = {
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
    City?: ValidationFunction<string>;
    County?: ValidationFunction<string>;
    Area?: ValidationFunction<string>;
    Marketing?: ValidationFunction<string>;
    PromoBudget?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TakeAwayCreateFormOverridesProps = {
    TakeAwayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    City?: PrimitiveOverrideProps<TextFieldProps>;
    County?: PrimitiveOverrideProps<TextFieldProps>;
    Area?: PrimitiveOverrideProps<TextFieldProps>;
    Marketing?: PrimitiveOverrideProps<TextFieldProps>;
    PromoBudget?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TakeAwayCreateFormProps = React.PropsWithChildren<{
    overrides?: TakeAwayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TakeAwayCreateFormInputValues) => TakeAwayCreateFormInputValues;
    onSuccess?: (fields: TakeAwayCreateFormInputValues) => void;
    onError?: (fields: TakeAwayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TakeAwayCreateFormInputValues) => TakeAwayCreateFormInputValues;
    onValidate?: TakeAwayCreateFormValidationValues;
} & React.CSSProperties>;
export default function TakeAwayCreateForm(props: TakeAwayCreateFormProps): React.ReactElement;
