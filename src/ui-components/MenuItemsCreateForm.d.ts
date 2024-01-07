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
export declare type MenuItemsCreateFormInputValues = {
    Name?: string;
    PriceDelivery?: number;
    StockLevel?: string;
    Ingredients?: string;
    PreVAT?: string;
    ProfitMargin?: string;
    PriceCollection?: number;
};
export declare type MenuItemsCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    PriceDelivery?: ValidationFunction<number>;
    StockLevel?: ValidationFunction<string>;
    Ingredients?: ValidationFunction<string>;
    PreVAT?: ValidationFunction<string>;
    ProfitMargin?: ValidationFunction<string>;
    PriceCollection?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MenuItemsCreateFormOverridesProps = {
    MenuItemsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    PriceDelivery?: PrimitiveOverrideProps<TextFieldProps>;
    StockLevel?: PrimitiveOverrideProps<TextFieldProps>;
    Ingredients?: PrimitiveOverrideProps<TextAreaFieldProps>;
    PreVAT?: PrimitiveOverrideProps<TextFieldProps>;
    ProfitMargin?: PrimitiveOverrideProps<TextFieldProps>;
    PriceCollection?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MenuItemsCreateFormProps = React.PropsWithChildren<{
    overrides?: MenuItemsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MenuItemsCreateFormInputValues) => MenuItemsCreateFormInputValues;
    onSuccess?: (fields: MenuItemsCreateFormInputValues) => void;
    onError?: (fields: MenuItemsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MenuItemsCreateFormInputValues) => MenuItemsCreateFormInputValues;
    onValidate?: MenuItemsCreateFormValidationValues;
} & React.CSSProperties>;
export default function MenuItemsCreateForm(props: MenuItemsCreateFormProps): React.ReactElement;
