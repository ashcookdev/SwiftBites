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
export declare type DriversCreateFormInputValues = {
    Name?: string;
    Address?: string;
    PostCode?: string;
    SortCode?: string;
    AccountNumber?: string;
    CarReg?: string;
    MOTDate?: string;
    StartDate?: string;
    BasicWage?: number;
    StarRating?: string;
    InsuranceDetails?: string;
    InterviewNotes?: string;
    Nationality?: string;
    YearsDriving?: string;
    Deliverys?: number;
    ContractFinish?: string;
    InternalReviews?: string;
    ContractType?: string;
    Area?: string;
    NationalInsurance?: string;
    Telephone?: string;
    LicenceNumber?: string;
    PassedInterview?: boolean;
    DriverReviews?: string;
    DOB?: string;
    InterviewAccepted?: boolean;
    HRnotes?: string;
    Current?: boolean;
    County?: string;
    Country?: string;
};
export declare type DriversCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Address?: ValidationFunction<string>;
    PostCode?: ValidationFunction<string>;
    SortCode?: ValidationFunction<string>;
    AccountNumber?: ValidationFunction<string>;
    CarReg?: ValidationFunction<string>;
    MOTDate?: ValidationFunction<string>;
    StartDate?: ValidationFunction<string>;
    BasicWage?: ValidationFunction<number>;
    StarRating?: ValidationFunction<string>;
    InsuranceDetails?: ValidationFunction<string>;
    InterviewNotes?: ValidationFunction<string>;
    Nationality?: ValidationFunction<string>;
    YearsDriving?: ValidationFunction<string>;
    Deliverys?: ValidationFunction<number>;
    ContractFinish?: ValidationFunction<string>;
    InternalReviews?: ValidationFunction<string>;
    ContractType?: ValidationFunction<string>;
    Area?: ValidationFunction<string>;
    NationalInsurance?: ValidationFunction<string>;
    Telephone?: ValidationFunction<string>;
    LicenceNumber?: ValidationFunction<string>;
    PassedInterview?: ValidationFunction<boolean>;
    DriverReviews?: ValidationFunction<string>;
    DOB?: ValidationFunction<string>;
    InterviewAccepted?: ValidationFunction<boolean>;
    HRnotes?: ValidationFunction<string>;
    Current?: ValidationFunction<boolean>;
    County?: ValidationFunction<string>;
    Country?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriversCreateFormOverridesProps = {
    DriversCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Address?: PrimitiveOverrideProps<TextFieldProps>;
    PostCode?: PrimitiveOverrideProps<TextFieldProps>;
    SortCode?: PrimitiveOverrideProps<TextFieldProps>;
    AccountNumber?: PrimitiveOverrideProps<TextFieldProps>;
    CarReg?: PrimitiveOverrideProps<TextFieldProps>;
    MOTDate?: PrimitiveOverrideProps<TextFieldProps>;
    StartDate?: PrimitiveOverrideProps<TextFieldProps>;
    BasicWage?: PrimitiveOverrideProps<TextFieldProps>;
    StarRating?: PrimitiveOverrideProps<TextFieldProps>;
    InsuranceDetails?: PrimitiveOverrideProps<TextAreaFieldProps>;
    InterviewNotes?: PrimitiveOverrideProps<TextFieldProps>;
    Nationality?: PrimitiveOverrideProps<TextFieldProps>;
    YearsDriving?: PrimitiveOverrideProps<TextFieldProps>;
    Deliverys?: PrimitiveOverrideProps<TextFieldProps>;
    ContractFinish?: PrimitiveOverrideProps<TextFieldProps>;
    InternalReviews?: PrimitiveOverrideProps<TextFieldProps>;
    ContractType?: PrimitiveOverrideProps<TextFieldProps>;
    Area?: PrimitiveOverrideProps<TextFieldProps>;
    NationalInsurance?: PrimitiveOverrideProps<TextFieldProps>;
    Telephone?: PrimitiveOverrideProps<TextFieldProps>;
    LicenceNumber?: PrimitiveOverrideProps<TextFieldProps>;
    PassedInterview?: PrimitiveOverrideProps<SwitchFieldProps>;
    DriverReviews?: PrimitiveOverrideProps<TextAreaFieldProps>;
    DOB?: PrimitiveOverrideProps<TextFieldProps>;
    InterviewAccepted?: PrimitiveOverrideProps<SwitchFieldProps>;
    HRnotes?: PrimitiveOverrideProps<TextFieldProps>;
    Current?: PrimitiveOverrideProps<SwitchFieldProps>;
    County?: PrimitiveOverrideProps<TextFieldProps>;
    Country?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DriversCreateFormProps = React.PropsWithChildren<{
    overrides?: DriversCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DriversCreateFormInputValues) => DriversCreateFormInputValues;
    onSuccess?: (fields: DriversCreateFormInputValues) => void;
    onError?: (fields: DriversCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DriversCreateFormInputValues) => DriversCreateFormInputValues;
    onValidate?: DriversCreateFormValidationValues;
} & React.CSSProperties>;
export default function DriversCreateForm(props: DriversCreateFormProps): React.ReactElement;
