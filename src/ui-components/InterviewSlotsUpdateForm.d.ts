/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { InterviewSlots } from "../models";
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
export declare type InterviewSlotsUpdateFormInputValues = {
    Time?: string;
    Date?: string;
    Name?: string;
    Notes?: string;
    JobOffered?: string;
    ApplicationID?: string;
    ZoomLink?: string;
    Telephone?: string;
    Email?: string;
};
export declare type InterviewSlotsUpdateFormValidationValues = {
    Time?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Name?: ValidationFunction<string>;
    Notes?: ValidationFunction<string>;
    JobOffered?: ValidationFunction<string>;
    ApplicationID?: ValidationFunction<string>;
    ZoomLink?: ValidationFunction<string>;
    Telephone?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InterviewSlotsUpdateFormOverridesProps = {
    InterviewSlotsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Time?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Notes?: PrimitiveOverrideProps<TextFieldProps>;
    JobOffered?: PrimitiveOverrideProps<TextFieldProps>;
    ApplicationID?: PrimitiveOverrideProps<TextFieldProps>;
    ZoomLink?: PrimitiveOverrideProps<TextFieldProps>;
    Telephone?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type InterviewSlotsUpdateFormProps = React.PropsWithChildren<{
    overrides?: InterviewSlotsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    interviewSlots?: InterviewSlots;
    onSubmit?: (fields: InterviewSlotsUpdateFormInputValues) => InterviewSlotsUpdateFormInputValues;
    onSuccess?: (fields: InterviewSlotsUpdateFormInputValues) => void;
    onError?: (fields: InterviewSlotsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: InterviewSlotsUpdateFormInputValues) => InterviewSlotsUpdateFormInputValues;
    onValidate?: InterviewSlotsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function InterviewSlotsUpdateForm(props: InterviewSlotsUpdateFormProps): React.ReactElement;
