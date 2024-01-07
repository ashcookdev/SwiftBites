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
export declare type DeliveriesCreateFormInputValues = {
    Name?: string;
    Address?: string;
    Postcode?: string;
    Order?: string;
    Total?: string;
    DeliveryCharge?: number;
    TimeCreated?: string;
    Date?: string;
    TimeDelivered?: string;
    Delivered?: boolean;
    Distance?: number;
};
export declare type DeliveriesCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    Postcode?: ValidationFunction<string>;
    Order?: ValidationFunction<string>;
    Total?: ValidationFunction<string>;
    DeliveryCharge?: ValidationFunction<number>;
    TimeCreated?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    TimeDelivered?: ValidationFunction<string>;
    Delivered?: ValidationFunction<boolean>;
    Distance?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DeliveriesCreateFormOverridesProps = {
    DeliveriesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    Postcode?: PrimitiveOverrideProps<TextFieldProps>;
    Order?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Total?: PrimitiveOverrideProps<TextFieldProps>;
    DeliveryCharge?: PrimitiveOverrideProps<TextFieldProps>;
    TimeCreated?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    TimeDelivered?: PrimitiveOverrideProps<TextFieldProps>;
    Delivered?: PrimitiveOverrideProps<SwitchFieldProps>;
    Distance?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DeliveriesCreateFormProps = React.PropsWithChildren<{
    overrides?: DeliveriesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DeliveriesCreateFormInputValues) => DeliveriesCreateFormInputValues;
    onSuccess?: (fields: DeliveriesCreateFormInputValues) => void;
    onError?: (fields: DeliveriesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DeliveriesCreateFormInputValues) => DeliveriesCreateFormInputValues;
    onValidate?: DeliveriesCreateFormValidationValues;
} & React.CSSProperties>;
export default function DeliveriesCreateForm(props: DeliveriesCreateFormProps): React.ReactElement;
