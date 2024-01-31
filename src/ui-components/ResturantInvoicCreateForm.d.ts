/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ResturantInvoicCreateFormInputValues = {
    MondayDrivers?: string;
    TuesdayDrivers?: string;
    WednesdayDrivers?: string;
    ThursdayDrivers?: string;
    FridayDrivers?: string;
    SaturdayDrivers?: string;
    SundayDrivers?: string;
    Week?: number;
    TotalBasic?: number;
    TotalDelivery?: number;
    TotalPromo?: number;
    TotalSoftware?: number;
    FullCost?: string;
    Paid?: string;
    ResturantID?: string;
};
export declare type ResturantInvoicCreateFormValidationValues = {
    MondayDrivers?: ValidationFunction<string>;
    TuesdayDrivers?: ValidationFunction<string>;
    WednesdayDrivers?: ValidationFunction<string>;
    ThursdayDrivers?: ValidationFunction<string>;
    FridayDrivers?: ValidationFunction<string>;
    SaturdayDrivers?: ValidationFunction<string>;
    SundayDrivers?: ValidationFunction<string>;
    Week?: ValidationFunction<number>;
    TotalBasic?: ValidationFunction<number>;
    TotalDelivery?: ValidationFunction<number>;
    TotalPromo?: ValidationFunction<number>;
    TotalSoftware?: ValidationFunction<number>;
    FullCost?: ValidationFunction<string>;
    Paid?: ValidationFunction<string>;
    ResturantID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResturantInvoicCreateFormOverridesProps = {
    ResturantInvoicCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    MondayDrivers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TuesdayDrivers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    WednesdayDrivers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ThursdayDrivers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    FridayDrivers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SaturdayDrivers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SundayDrivers?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Week?: PrimitiveOverrideProps<TextFieldProps>;
    TotalBasic?: PrimitiveOverrideProps<TextFieldProps>;
    TotalDelivery?: PrimitiveOverrideProps<TextFieldProps>;
    TotalPromo?: PrimitiveOverrideProps<TextFieldProps>;
    TotalSoftware?: PrimitiveOverrideProps<TextFieldProps>;
    FullCost?: PrimitiveOverrideProps<TextFieldProps>;
    Paid?: PrimitiveOverrideProps<TextFieldProps>;
    ResturantID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResturantInvoicCreateFormProps = React.PropsWithChildren<{
    overrides?: ResturantInvoicCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResturantInvoicCreateFormInputValues) => ResturantInvoicCreateFormInputValues;
    onSuccess?: (fields: ResturantInvoicCreateFormInputValues) => void;
    onError?: (fields: ResturantInvoicCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResturantInvoicCreateFormInputValues) => ResturantInvoicCreateFormInputValues;
    onValidate?: ResturantInvoicCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResturantInvoicCreateForm(props: ResturantInvoicCreateFormProps): React.ReactElement;
