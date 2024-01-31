/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type MessagesCreateFormInputValues = {
    content?: string;
    createdAt?: string;
    email?: string;
    group?: string[];
    orderID?: string;
    ResturantID?: string;
};
export declare type MessagesCreateFormValidationValues = {
    content?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    group?: ValidationFunction<string>;
    orderID?: ValidationFunction<string>;
    ResturantID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessagesCreateFormOverridesProps = {
    MessagesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    group?: PrimitiveOverrideProps<TextFieldProps>;
    orderID?: PrimitiveOverrideProps<TextFieldProps>;
    ResturantID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MessagesCreateFormProps = React.PropsWithChildren<{
    overrides?: MessagesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MessagesCreateFormInputValues) => MessagesCreateFormInputValues;
    onSuccess?: (fields: MessagesCreateFormInputValues) => void;
    onError?: (fields: MessagesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MessagesCreateFormInputValues) => MessagesCreateFormInputValues;
    onValidate?: MessagesCreateFormValidationValues;
} & React.CSSProperties>;
export default function MessagesCreateForm(props: MessagesCreateFormProps): React.ReactElement;
