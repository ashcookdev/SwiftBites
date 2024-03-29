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
export declare type KitchenMenuCreateFormInputValues = {
    Name?: string;
    Price?: number;
    Description?: string;
    Notes?: string;
    Kitchen?: boolean;
    imageSrc?: string;
    Prep?: string;
    Ingredients?: string;
    Snooze?: boolean;
    Extras?: string;
    Category?: string;
    ProfitMargin?: number;
    PriceNoVAT?: number;
    InStock?: boolean;
    StockLevel?: number;
    ResturantID?: string;
};
export declare type KitchenMenuCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Price?: ValidationFunction<number>;
    Description?: ValidationFunction<string>;
    Notes?: ValidationFunction<string>;
    Kitchen?: ValidationFunction<boolean>;
    imageSrc?: ValidationFunction<string>;
    Prep?: ValidationFunction<string>;
    Ingredients?: ValidationFunction<string>;
    Snooze?: ValidationFunction<boolean>;
    Extras?: ValidationFunction<string>;
    Category?: ValidationFunction<string>;
    ProfitMargin?: ValidationFunction<number>;
    PriceNoVAT?: ValidationFunction<number>;
    InStock?: ValidationFunction<boolean>;
    StockLevel?: ValidationFunction<number>;
    ResturantID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type KitchenMenuCreateFormOverridesProps = {
    KitchenMenuCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Price?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
    Kitchen?: PrimitiveOverrideProps<SwitchFieldProps>;
    imageSrc?: PrimitiveOverrideProps<TextFieldProps>;
    Prep?: PrimitiveOverrideProps<TextFieldProps>;
    Ingredients?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Snooze?: PrimitiveOverrideProps<SwitchFieldProps>;
    Extras?: PrimitiveOverrideProps<TextAreaFieldProps>;
    Category?: PrimitiveOverrideProps<TextFieldProps>;
    ProfitMargin?: PrimitiveOverrideProps<TextFieldProps>;
    PriceNoVAT?: PrimitiveOverrideProps<TextFieldProps>;
    InStock?: PrimitiveOverrideProps<SwitchFieldProps>;
    StockLevel?: PrimitiveOverrideProps<TextFieldProps>;
    ResturantID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type KitchenMenuCreateFormProps = React.PropsWithChildren<{
    overrides?: KitchenMenuCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: KitchenMenuCreateFormInputValues) => KitchenMenuCreateFormInputValues;
    onSuccess?: (fields: KitchenMenuCreateFormInputValues) => void;
    onError?: (fields: KitchenMenuCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: KitchenMenuCreateFormInputValues) => KitchenMenuCreateFormInputValues;
    onValidate?: KitchenMenuCreateFormValidationValues;
} & React.CSSProperties>;
export default function KitchenMenuCreateForm(props: KitchenMenuCreateFormProps): React.ReactElement;
