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
export declare type DriverHoursCreateFormInputValues = {
    DriverID?: string;
    Date?: string;
    Week?: number;
    MondayBlock?: number;
    TuesdayBlock?: number;
    WednesdayBlock?: number;
    ThursdayBlock?: number;
    FridayBlock?: number;
    SaturdayBlock?: number;
    SundayBlock?: number;
    BasicWageTotal?: number;
    Hours?: number;
    Deliverys?: number;
    Promo?: number;
    ExtraTotal?: number;
    MondayResturant?: string;
    TuesdayResturant?: string;
    WednesdayResturant?: string;
    ThursdayResturant?: string;
    FridayResturant?: string;
    SaturdayResturant?: string;
    SundayResturant?: string;
    MondayClockIns?: string;
    TuesdayClockins?: string;
    WedesdayClockins?: string;
    ThursdayClockins?: string;
    FridayClockins?: string;
    SaturdayClockins?: string;
    SundayClockins?: string;
};
export declare type DriverHoursCreateFormValidationValues = {
    DriverID?: ValidationFunction<string>;
    Date?: ValidationFunction<string>;
    Week?: ValidationFunction<number>;
    MondayBlock?: ValidationFunction<number>;
    TuesdayBlock?: ValidationFunction<number>;
    WednesdayBlock?: ValidationFunction<number>;
    ThursdayBlock?: ValidationFunction<number>;
    FridayBlock?: ValidationFunction<number>;
    SaturdayBlock?: ValidationFunction<number>;
    SundayBlock?: ValidationFunction<number>;
    BasicWageTotal?: ValidationFunction<number>;
    Hours?: ValidationFunction<number>;
    Deliverys?: ValidationFunction<number>;
    Promo?: ValidationFunction<number>;
    ExtraTotal?: ValidationFunction<number>;
    MondayResturant?: ValidationFunction<string>;
    TuesdayResturant?: ValidationFunction<string>;
    WednesdayResturant?: ValidationFunction<string>;
    ThursdayResturant?: ValidationFunction<string>;
    FridayResturant?: ValidationFunction<string>;
    SaturdayResturant?: ValidationFunction<string>;
    SundayResturant?: ValidationFunction<string>;
    MondayClockIns?: ValidationFunction<string>;
    TuesdayClockins?: ValidationFunction<string>;
    WedesdayClockins?: ValidationFunction<string>;
    ThursdayClockins?: ValidationFunction<string>;
    FridayClockins?: ValidationFunction<string>;
    SaturdayClockins?: ValidationFunction<string>;
    SundayClockins?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DriverHoursCreateFormOverridesProps = {
    DriverHoursCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    DriverID?: PrimitiveOverrideProps<TextFieldProps>;
    Date?: PrimitiveOverrideProps<TextFieldProps>;
    Week?: PrimitiveOverrideProps<TextFieldProps>;
    MondayBlock?: PrimitiveOverrideProps<TextFieldProps>;
    TuesdayBlock?: PrimitiveOverrideProps<TextFieldProps>;
    WednesdayBlock?: PrimitiveOverrideProps<TextFieldProps>;
    ThursdayBlock?: PrimitiveOverrideProps<TextFieldProps>;
    FridayBlock?: PrimitiveOverrideProps<TextFieldProps>;
    SaturdayBlock?: PrimitiveOverrideProps<TextFieldProps>;
    SundayBlock?: PrimitiveOverrideProps<TextFieldProps>;
    BasicWageTotal?: PrimitiveOverrideProps<TextFieldProps>;
    Hours?: PrimitiveOverrideProps<TextFieldProps>;
    Deliverys?: PrimitiveOverrideProps<TextFieldProps>;
    Promo?: PrimitiveOverrideProps<TextFieldProps>;
    ExtraTotal?: PrimitiveOverrideProps<TextFieldProps>;
    MondayResturant?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TuesdayResturant?: PrimitiveOverrideProps<TextAreaFieldProps>;
    WednesdayResturant?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ThursdayResturant?: PrimitiveOverrideProps<TextFieldProps>;
    FridayResturant?: PrimitiveOverrideProps<TextFieldProps>;
    SaturdayResturant?: PrimitiveOverrideProps<TextFieldProps>;
    SundayResturant?: PrimitiveOverrideProps<TextFieldProps>;
    MondayClockIns?: PrimitiveOverrideProps<TextAreaFieldProps>;
    TuesdayClockins?: PrimitiveOverrideProps<TextAreaFieldProps>;
    WedesdayClockins?: PrimitiveOverrideProps<TextAreaFieldProps>;
    ThursdayClockins?: PrimitiveOverrideProps<TextAreaFieldProps>;
    FridayClockins?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SaturdayClockins?: PrimitiveOverrideProps<TextAreaFieldProps>;
    SundayClockins?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type DriverHoursCreateFormProps = React.PropsWithChildren<{
    overrides?: DriverHoursCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DriverHoursCreateFormInputValues) => DriverHoursCreateFormInputValues;
    onSuccess?: (fields: DriverHoursCreateFormInputValues) => void;
    onError?: (fields: DriverHoursCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DriverHoursCreateFormInputValues) => DriverHoursCreateFormInputValues;
    onValidate?: DriverHoursCreateFormValidationValues;
} & React.CSSProperties>;
export default function DriverHoursCreateForm(props: DriverHoursCreateFormProps): React.ReactElement;
