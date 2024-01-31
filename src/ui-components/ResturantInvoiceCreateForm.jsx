/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { ResturantInvoice } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function ResturantInvoiceCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    MondayDrivers: "",
    TuesdayDrivers: "",
    WednesdayDrivers: "",
    ThursdayDrivers: "",
    FridayDrivers: "",
    SaturdayDrivers: "",
    SundayDrivers: "",
    Week: "",
    TotalBasic: "",
    TotalDelivery: "",
    TotalPromo: "",
    TotalSoftware: "",
    FullCost: "",
    Paid: "",
    ResturantID: "",
  };
  const [MondayDrivers, setMondayDrivers] = React.useState(
    initialValues.MondayDrivers
  );
  const [TuesdayDrivers, setTuesdayDrivers] = React.useState(
    initialValues.TuesdayDrivers
  );
  const [WednesdayDrivers, setWednesdayDrivers] = React.useState(
    initialValues.WednesdayDrivers
  );
  const [ThursdayDrivers, setThursdayDrivers] = React.useState(
    initialValues.ThursdayDrivers
  );
  const [FridayDrivers, setFridayDrivers] = React.useState(
    initialValues.FridayDrivers
  );
  const [SaturdayDrivers, setSaturdayDrivers] = React.useState(
    initialValues.SaturdayDrivers
  );
  const [SundayDrivers, setSundayDrivers] = React.useState(
    initialValues.SundayDrivers
  );
  const [Week, setWeek] = React.useState(initialValues.Week);
  const [TotalBasic, setTotalBasic] = React.useState(initialValues.TotalBasic);
  const [TotalDelivery, setTotalDelivery] = React.useState(
    initialValues.TotalDelivery
  );
  const [TotalPromo, setTotalPromo] = React.useState(initialValues.TotalPromo);
  const [TotalSoftware, setTotalSoftware] = React.useState(
    initialValues.TotalSoftware
  );
  const [FullCost, setFullCost] = React.useState(initialValues.FullCost);
  const [Paid, setPaid] = React.useState(initialValues.Paid);
  const [ResturantID, setResturantID] = React.useState(
    initialValues.ResturantID
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMondayDrivers(initialValues.MondayDrivers);
    setTuesdayDrivers(initialValues.TuesdayDrivers);
    setWednesdayDrivers(initialValues.WednesdayDrivers);
    setThursdayDrivers(initialValues.ThursdayDrivers);
    setFridayDrivers(initialValues.FridayDrivers);
    setSaturdayDrivers(initialValues.SaturdayDrivers);
    setSundayDrivers(initialValues.SundayDrivers);
    setWeek(initialValues.Week);
    setTotalBasic(initialValues.TotalBasic);
    setTotalDelivery(initialValues.TotalDelivery);
    setTotalPromo(initialValues.TotalPromo);
    setTotalSoftware(initialValues.TotalSoftware);
    setFullCost(initialValues.FullCost);
    setPaid(initialValues.Paid);
    setResturantID(initialValues.ResturantID);
    setErrors({});
  };
  const validations = {
    MondayDrivers: [{ type: "JSON" }],
    TuesdayDrivers: [{ type: "JSON" }],
    WednesdayDrivers: [{ type: "JSON" }],
    ThursdayDrivers: [{ type: "JSON" }],
    FridayDrivers: [{ type: "JSON" }],
    SaturdayDrivers: [{ type: "JSON" }],
    SundayDrivers: [{ type: "JSON" }],
    Week: [],
    TotalBasic: [],
    TotalDelivery: [],
    TotalPromo: [],
    TotalSoftware: [],
    FullCost: [],
    Paid: [],
    ResturantID: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          MondayDrivers,
          TuesdayDrivers,
          WednesdayDrivers,
          ThursdayDrivers,
          FridayDrivers,
          SaturdayDrivers,
          SundayDrivers,
          Week,
          TotalBasic,
          TotalDelivery,
          TotalPromo,
          TotalSoftware,
          FullCost,
          Paid,
          ResturantID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new ResturantInvoice(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ResturantInvoiceCreateForm")}
      {...rest}
    >
      <TextAreaField
        label="Monday drivers"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers: value,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.MondayDrivers ?? value;
          }
          if (errors.MondayDrivers?.hasError) {
            runValidationTasks("MondayDrivers", value);
          }
          setMondayDrivers(value);
        }}
        onBlur={() => runValidationTasks("MondayDrivers", MondayDrivers)}
        errorMessage={errors.MondayDrivers?.errorMessage}
        hasError={errors.MondayDrivers?.hasError}
        {...getOverrideProps(overrides, "MondayDrivers")}
      ></TextAreaField>
      <TextAreaField
        label="Tuesday drivers"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers: value,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.TuesdayDrivers ?? value;
          }
          if (errors.TuesdayDrivers?.hasError) {
            runValidationTasks("TuesdayDrivers", value);
          }
          setTuesdayDrivers(value);
        }}
        onBlur={() => runValidationTasks("TuesdayDrivers", TuesdayDrivers)}
        errorMessage={errors.TuesdayDrivers?.errorMessage}
        hasError={errors.TuesdayDrivers?.hasError}
        {...getOverrideProps(overrides, "TuesdayDrivers")}
      ></TextAreaField>
      <TextAreaField
        label="Wednesday drivers"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers: value,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.WednesdayDrivers ?? value;
          }
          if (errors.WednesdayDrivers?.hasError) {
            runValidationTasks("WednesdayDrivers", value);
          }
          setWednesdayDrivers(value);
        }}
        onBlur={() => runValidationTasks("WednesdayDrivers", WednesdayDrivers)}
        errorMessage={errors.WednesdayDrivers?.errorMessage}
        hasError={errors.WednesdayDrivers?.hasError}
        {...getOverrideProps(overrides, "WednesdayDrivers")}
      ></TextAreaField>
      <TextAreaField
        label="Thursday drivers"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers: value,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.ThursdayDrivers ?? value;
          }
          if (errors.ThursdayDrivers?.hasError) {
            runValidationTasks("ThursdayDrivers", value);
          }
          setThursdayDrivers(value);
        }}
        onBlur={() => runValidationTasks("ThursdayDrivers", ThursdayDrivers)}
        errorMessage={errors.ThursdayDrivers?.errorMessage}
        hasError={errors.ThursdayDrivers?.hasError}
        {...getOverrideProps(overrides, "ThursdayDrivers")}
      ></TextAreaField>
      <TextAreaField
        label="Friday drivers"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers: value,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.FridayDrivers ?? value;
          }
          if (errors.FridayDrivers?.hasError) {
            runValidationTasks("FridayDrivers", value);
          }
          setFridayDrivers(value);
        }}
        onBlur={() => runValidationTasks("FridayDrivers", FridayDrivers)}
        errorMessage={errors.FridayDrivers?.errorMessage}
        hasError={errors.FridayDrivers?.hasError}
        {...getOverrideProps(overrides, "FridayDrivers")}
      ></TextAreaField>
      <TextAreaField
        label="Saturday drivers"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers: value,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.SaturdayDrivers ?? value;
          }
          if (errors.SaturdayDrivers?.hasError) {
            runValidationTasks("SaturdayDrivers", value);
          }
          setSaturdayDrivers(value);
        }}
        onBlur={() => runValidationTasks("SaturdayDrivers", SaturdayDrivers)}
        errorMessage={errors.SaturdayDrivers?.errorMessage}
        hasError={errors.SaturdayDrivers?.hasError}
        {...getOverrideProps(overrides, "SaturdayDrivers")}
      ></TextAreaField>
      <TextAreaField
        label="Sunday drivers"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers: value,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.SundayDrivers ?? value;
          }
          if (errors.SundayDrivers?.hasError) {
            runValidationTasks("SundayDrivers", value);
          }
          setSundayDrivers(value);
        }}
        onBlur={() => runValidationTasks("SundayDrivers", SundayDrivers)}
        errorMessage={errors.SundayDrivers?.errorMessage}
        hasError={errors.SundayDrivers?.hasError}
        {...getOverrideProps(overrides, "SundayDrivers")}
      ></TextAreaField>
      <TextField
        label="Week"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Week}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week: value,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.Week ?? value;
          }
          if (errors.Week?.hasError) {
            runValidationTasks("Week", value);
          }
          setWeek(value);
        }}
        onBlur={() => runValidationTasks("Week", Week)}
        errorMessage={errors.Week?.errorMessage}
        hasError={errors.Week?.hasError}
        {...getOverrideProps(overrides, "Week")}
      ></TextField>
      <TextField
        label="Total basic"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalBasic}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic: value,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.TotalBasic ?? value;
          }
          if (errors.TotalBasic?.hasError) {
            runValidationTasks("TotalBasic", value);
          }
          setTotalBasic(value);
        }}
        onBlur={() => runValidationTasks("TotalBasic", TotalBasic)}
        errorMessage={errors.TotalBasic?.errorMessage}
        hasError={errors.TotalBasic?.hasError}
        {...getOverrideProps(overrides, "TotalBasic")}
      ></TextField>
      <TextField
        label="Total delivery"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalDelivery}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery: value,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.TotalDelivery ?? value;
          }
          if (errors.TotalDelivery?.hasError) {
            runValidationTasks("TotalDelivery", value);
          }
          setTotalDelivery(value);
        }}
        onBlur={() => runValidationTasks("TotalDelivery", TotalDelivery)}
        errorMessage={errors.TotalDelivery?.errorMessage}
        hasError={errors.TotalDelivery?.hasError}
        {...getOverrideProps(overrides, "TotalDelivery")}
      ></TextField>
      <TextField
        label="Total promo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalPromo}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo: value,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.TotalPromo ?? value;
          }
          if (errors.TotalPromo?.hasError) {
            runValidationTasks("TotalPromo", value);
          }
          setTotalPromo(value);
        }}
        onBlur={() => runValidationTasks("TotalPromo", TotalPromo)}
        errorMessage={errors.TotalPromo?.errorMessage}
        hasError={errors.TotalPromo?.hasError}
        {...getOverrideProps(overrides, "TotalPromo")}
      ></TextField>
      <TextField
        label="Total software"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalSoftware}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware: value,
              FullCost,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.TotalSoftware ?? value;
          }
          if (errors.TotalSoftware?.hasError) {
            runValidationTasks("TotalSoftware", value);
          }
          setTotalSoftware(value);
        }}
        onBlur={() => runValidationTasks("TotalSoftware", TotalSoftware)}
        errorMessage={errors.TotalSoftware?.errorMessage}
        hasError={errors.TotalSoftware?.hasError}
        {...getOverrideProps(overrides, "TotalSoftware")}
      ></TextField>
      <TextField
        label="Full cost"
        isRequired={false}
        isReadOnly={false}
        value={FullCost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost: value,
              Paid,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.FullCost ?? value;
          }
          if (errors.FullCost?.hasError) {
            runValidationTasks("FullCost", value);
          }
          setFullCost(value);
        }}
        onBlur={() => runValidationTasks("FullCost", FullCost)}
        errorMessage={errors.FullCost?.errorMessage}
        hasError={errors.FullCost?.hasError}
        {...getOverrideProps(overrides, "FullCost")}
      ></TextField>
      <TextField
        label="Paid"
        isRequired={false}
        isReadOnly={false}
        value={Paid}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid: value,
              ResturantID,
            };
            const result = onChange(modelFields);
            value = result?.Paid ?? value;
          }
          if (errors.Paid?.hasError) {
            runValidationTasks("Paid", value);
          }
          setPaid(value);
        }}
        onBlur={() => runValidationTasks("Paid", Paid)}
        errorMessage={errors.Paid?.errorMessage}
        hasError={errors.Paid?.hasError}
        {...getOverrideProps(overrides, "Paid")}
      ></TextField>
      <TextField
        label="Resturant id"
        isRequired={false}
        isReadOnly={false}
        value={ResturantID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              MondayDrivers,
              TuesdayDrivers,
              WednesdayDrivers,
              ThursdayDrivers,
              FridayDrivers,
              SaturdayDrivers,
              SundayDrivers,
              Week,
              TotalBasic,
              TotalDelivery,
              TotalPromo,
              TotalSoftware,
              FullCost,
              Paid,
              ResturantID: value,
            };
            const result = onChange(modelFields);
            value = result?.ResturantID ?? value;
          }
          if (errors.ResturantID?.hasError) {
            runValidationTasks("ResturantID", value);
          }
          setResturantID(value);
        }}
        onBlur={() => runValidationTasks("ResturantID", ResturantID)}
        errorMessage={errors.ResturantID?.errorMessage}
        hasError={errors.ResturantID?.hasError}
        {...getOverrideProps(overrides, "ResturantID")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
