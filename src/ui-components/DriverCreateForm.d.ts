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
export declare type DriverCreateFormInputValues = {
    Name?: string;
    OnWay?: boolean;
    WayBack?: boolean;
    Deliverys?: number;
    BackAtBranch?: boolean;
    Long?: string;
    Lat?: string;
};
export declare type DriverCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    OnWay?: ValidationFunction<boolean>;
    WayBack?: ValidationFunction<boolean>;
    Deliverys?: ValidationFunction<number>;
    BackAtBranch?: ValidationFunction<boolean>;
    Long?: ValidationFunction<string>;
    Lat?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverCreateFormOverridesProps = {
    DriverCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    OnWay?: PrimitiveOverrideProps<SwitchFieldProps>;
    WayBack?: PrimitiveOverrideProps<SwitchFieldProps>;
    Deliverys?: PrimitiveOverrideProps<TextFieldProps>;
    BackAtBranch?: PrimitiveOverrideProps<SwitchFieldProps>;
    Long?: PrimitiveOverrideProps<TextFieldProps>;
    Lat?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DriverCreateFormProps = React.PropsWithChildren<{
    overrides?: DriverCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DriverCreateFormInputValues) => DriverCreateFormInputValues;
    onSuccess?: (fields: DriverCreateFormInputValues) => void;
    onError?: (fields: DriverCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DriverCreateFormInputValues) => DriverCreateFormInputValues;
    onValidate?: DriverCreateFormValidationValues;
} & React.CSSProperties>;
export default function DriverCreateForm(props: DriverCreateFormProps): React.ReactElement;
