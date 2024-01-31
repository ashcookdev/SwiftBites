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
import { DriverHours } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function DriverHoursCreateForm(props) {
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
    DriverID: "",
    Date: "",
    Week: "",
    MondayBlock: "",
    TuesdayBlock: "",
    WednesdayBlock: "",
    ThursdayBlock: "",
    FridayBlock: "",
    SaturdayBlock: "",
    SundayBlock: "",
    BasicWageTotal: "",
    Hours: "",
    Deliverys: "",
    Promo: "",
    ExtraTotal: "",
    MondayResturant: "",
    TuesdayResturant: "",
    WednesdayResturant: "",
    ThursdayResturant: "",
    FridayResturant: "",
    SaturdayResturant: "",
    SundayResturant: "",
    MondayClockIns: "",
    TuesdayClockins: "",
    WedesdayClockins: "",
    ThursdayClockins: "",
    FridayClockins: "",
    SaturdayClockins: "",
    SundayClockins: "",
  };
  const [DriverID, setDriverID] = React.useState(initialValues.DriverID);
  const [Date, setDate] = React.useState(initialValues.Date);
  const [Week, setWeek] = React.useState(initialValues.Week);
  const [MondayBlock, setMondayBlock] = React.useState(
    initialValues.MondayBlock
  );
  const [TuesdayBlock, setTuesdayBlock] = React.useState(
    initialValues.TuesdayBlock
  );
  const [WednesdayBlock, setWednesdayBlock] = React.useState(
    initialValues.WednesdayBlock
  );
  const [ThursdayBlock, setThursdayBlock] = React.useState(
    initialValues.ThursdayBlock
  );
  const [FridayBlock, setFridayBlock] = React.useState(
    initialValues.FridayBlock
  );
  const [SaturdayBlock, setSaturdayBlock] = React.useState(
    initialValues.SaturdayBlock
  );
  const [SundayBlock, setSundayBlock] = React.useState(
    initialValues.SundayBlock
  );
  const [BasicWageTotal, setBasicWageTotal] = React.useState(
    initialValues.BasicWageTotal
  );
  const [Hours, setHours] = React.useState(initialValues.Hours);
  const [Deliverys, setDeliverys] = React.useState(initialValues.Deliverys);
  const [Promo, setPromo] = React.useState(initialValues.Promo);
  const [ExtraTotal, setExtraTotal] = React.useState(initialValues.ExtraTotal);
  const [MondayResturant, setMondayResturant] = React.useState(
    initialValues.MondayResturant
  );
  const [TuesdayResturant, setTuesdayResturant] = React.useState(
    initialValues.TuesdayResturant
  );
  const [WednesdayResturant, setWednesdayResturant] = React.useState(
    initialValues.WednesdayResturant
  );
  const [ThursdayResturant, setThursdayResturant] = React.useState(
    initialValues.ThursdayResturant
  );
  const [FridayResturant, setFridayResturant] = React.useState(
    initialValues.FridayResturant
  );
  const [SaturdayResturant, setSaturdayResturant] = React.useState(
    initialValues.SaturdayResturant
  );
  const [SundayResturant, setSundayResturant] = React.useState(
    initialValues.SundayResturant
  );
  const [MondayClockIns, setMondayClockIns] = React.useState(
    initialValues.MondayClockIns
  );
  const [TuesdayClockins, setTuesdayClockins] = React.useState(
    initialValues.TuesdayClockins
  );
  const [WedesdayClockins, setWedesdayClockins] = React.useState(
    initialValues.WedesdayClockins
  );
  const [ThursdayClockins, setThursdayClockins] = React.useState(
    initialValues.ThursdayClockins
  );
  const [FridayClockins, setFridayClockins] = React.useState(
    initialValues.FridayClockins
  );
  const [SaturdayClockins, setSaturdayClockins] = React.useState(
    initialValues.SaturdayClockins
  );
  const [SundayClockins, setSundayClockins] = React.useState(
    initialValues.SundayClockins
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDriverID(initialValues.DriverID);
    setDate(initialValues.Date);
    setWeek(initialValues.Week);
    setMondayBlock(initialValues.MondayBlock);
    setTuesdayBlock(initialValues.TuesdayBlock);
    setWednesdayBlock(initialValues.WednesdayBlock);
    setThursdayBlock(initialValues.ThursdayBlock);
    setFridayBlock(initialValues.FridayBlock);
    setSaturdayBlock(initialValues.SaturdayBlock);
    setSundayBlock(initialValues.SundayBlock);
    setBasicWageTotal(initialValues.BasicWageTotal);
    setHours(initialValues.Hours);
    setDeliverys(initialValues.Deliverys);
    setPromo(initialValues.Promo);
    setExtraTotal(initialValues.ExtraTotal);
    setMondayResturant(initialValues.MondayResturant);
    setTuesdayResturant(initialValues.TuesdayResturant);
    setWednesdayResturant(initialValues.WednesdayResturant);
    setThursdayResturant(initialValues.ThursdayResturant);
    setFridayResturant(initialValues.FridayResturant);
    setSaturdayResturant(initialValues.SaturdayResturant);
    setSundayResturant(initialValues.SundayResturant);
    setMondayClockIns(initialValues.MondayClockIns);
    setTuesdayClockins(initialValues.TuesdayClockins);
    setWedesdayClockins(initialValues.WedesdayClockins);
    setThursdayClockins(initialValues.ThursdayClockins);
    setFridayClockins(initialValues.FridayClockins);
    setSaturdayClockins(initialValues.SaturdayClockins);
    setSundayClockins(initialValues.SundayClockins);
    setErrors({});
  };
  const validations = {
    DriverID: [],
    Date: [],
    Week: [],
    MondayBlock: [],
    TuesdayBlock: [],
    WednesdayBlock: [],
    ThursdayBlock: [],
    FridayBlock: [],
    SaturdayBlock: [],
    SundayBlock: [],
    BasicWageTotal: [],
    Hours: [],
    Deliverys: [],
    Promo: [],
    ExtraTotal: [],
    MondayResturant: [{ type: "JSON" }],
    TuesdayResturant: [{ type: "JSON" }],
    WednesdayResturant: [{ type: "JSON" }],
    ThursdayResturant: [],
    FridayResturant: [],
    SaturdayResturant: [],
    SundayResturant: [],
    MondayClockIns: [{ type: "JSON" }],
    TuesdayClockins: [{ type: "JSON" }],
    WedesdayClockins: [{ type: "JSON" }],
    ThursdayClockins: [{ type: "JSON" }],
    FridayClockins: [{ type: "JSON" }],
    SaturdayClockins: [{ type: "JSON" }],
    SundayClockins: [{ type: "JSON" }],
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
          DriverID,
          Date,
          Week,
          MondayBlock,
          TuesdayBlock,
          WednesdayBlock,
          ThursdayBlock,
          FridayBlock,
          SaturdayBlock,
          SundayBlock,
          BasicWageTotal,
          Hours,
          Deliverys,
          Promo,
          ExtraTotal,
          MondayResturant,
          TuesdayResturant,
          WednesdayResturant,
          ThursdayResturant,
          FridayResturant,
          SaturdayResturant,
          SundayResturant,
          MondayClockIns,
          TuesdayClockins,
          WedesdayClockins,
          ThursdayClockins,
          FridayClockins,
          SaturdayClockins,
          SundayClockins,
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
          await DataStore.save(new DriverHours(modelFields));
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
      {...getOverrideProps(overrides, "DriverHoursCreateForm")}
      {...rest}
    >
      <TextField
        label="Driver id"
        isRequired={false}
        isReadOnly={false}
        value={DriverID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID: value,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.DriverID ?? value;
          }
          if (errors.DriverID?.hasError) {
            runValidationTasks("DriverID", value);
          }
          setDriverID(value);
        }}
        onBlur={() => runValidationTasks("DriverID", DriverID)}
        errorMessage={errors.DriverID?.errorMessage}
        hasError={errors.DriverID?.hasError}
        {...getOverrideProps(overrides, "DriverID")}
      ></TextField>
      <TextField
        label="Date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date: value,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.Date ?? value;
          }
          if (errors.Date?.hasError) {
            runValidationTasks("Date", value);
          }
          setDate(value);
        }}
        onBlur={() => runValidationTasks("Date", Date)}
        errorMessage={errors.Date?.errorMessage}
        hasError={errors.Date?.hasError}
        {...getOverrideProps(overrides, "Date")}
      ></TextField>
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
              DriverID,
              Date,
              Week: value,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
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
        label="Monday block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={MondayBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock: value,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.MondayBlock ?? value;
          }
          if (errors.MondayBlock?.hasError) {
            runValidationTasks("MondayBlock", value);
          }
          setMondayBlock(value);
        }}
        onBlur={() => runValidationTasks("MondayBlock", MondayBlock)}
        errorMessage={errors.MondayBlock?.errorMessage}
        hasError={errors.MondayBlock?.hasError}
        {...getOverrideProps(overrides, "MondayBlock")}
      ></TextField>
      <TextField
        label="Tuesday block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TuesdayBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock: value,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.TuesdayBlock ?? value;
          }
          if (errors.TuesdayBlock?.hasError) {
            runValidationTasks("TuesdayBlock", value);
          }
          setTuesdayBlock(value);
        }}
        onBlur={() => runValidationTasks("TuesdayBlock", TuesdayBlock)}
        errorMessage={errors.TuesdayBlock?.errorMessage}
        hasError={errors.TuesdayBlock?.hasError}
        {...getOverrideProps(overrides, "TuesdayBlock")}
      ></TextField>
      <TextField
        label="Wednesday block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={WednesdayBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock: value,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.WednesdayBlock ?? value;
          }
          if (errors.WednesdayBlock?.hasError) {
            runValidationTasks("WednesdayBlock", value);
          }
          setWednesdayBlock(value);
        }}
        onBlur={() => runValidationTasks("WednesdayBlock", WednesdayBlock)}
        errorMessage={errors.WednesdayBlock?.errorMessage}
        hasError={errors.WednesdayBlock?.hasError}
        {...getOverrideProps(overrides, "WednesdayBlock")}
      ></TextField>
      <TextField
        label="Thursday block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ThursdayBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock: value,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.ThursdayBlock ?? value;
          }
          if (errors.ThursdayBlock?.hasError) {
            runValidationTasks("ThursdayBlock", value);
          }
          setThursdayBlock(value);
        }}
        onBlur={() => runValidationTasks("ThursdayBlock", ThursdayBlock)}
        errorMessage={errors.ThursdayBlock?.errorMessage}
        hasError={errors.ThursdayBlock?.hasError}
        {...getOverrideProps(overrides, "ThursdayBlock")}
      ></TextField>
      <TextField
        label="Friday block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={FridayBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock: value,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.FridayBlock ?? value;
          }
          if (errors.FridayBlock?.hasError) {
            runValidationTasks("FridayBlock", value);
          }
          setFridayBlock(value);
        }}
        onBlur={() => runValidationTasks("FridayBlock", FridayBlock)}
        errorMessage={errors.FridayBlock?.errorMessage}
        hasError={errors.FridayBlock?.hasError}
        {...getOverrideProps(overrides, "FridayBlock")}
      ></TextField>
      <TextField
        label="Saturday block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SaturdayBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock: value,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.SaturdayBlock ?? value;
          }
          if (errors.SaturdayBlock?.hasError) {
            runValidationTasks("SaturdayBlock", value);
          }
          setSaturdayBlock(value);
        }}
        onBlur={() => runValidationTasks("SaturdayBlock", SaturdayBlock)}
        errorMessage={errors.SaturdayBlock?.errorMessage}
        hasError={errors.SaturdayBlock?.hasError}
        {...getOverrideProps(overrides, "SaturdayBlock")}
      ></TextField>
      <TextField
        label="Sunday block"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={SundayBlock}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock: value,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.SundayBlock ?? value;
          }
          if (errors.SundayBlock?.hasError) {
            runValidationTasks("SundayBlock", value);
          }
          setSundayBlock(value);
        }}
        onBlur={() => runValidationTasks("SundayBlock", SundayBlock)}
        errorMessage={errors.SundayBlock?.errorMessage}
        hasError={errors.SundayBlock?.hasError}
        {...getOverrideProps(overrides, "SundayBlock")}
      ></TextField>
      <TextField
        label="Basic wage total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={BasicWageTotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal: value,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.BasicWageTotal ?? value;
          }
          if (errors.BasicWageTotal?.hasError) {
            runValidationTasks("BasicWageTotal", value);
          }
          setBasicWageTotal(value);
        }}
        onBlur={() => runValidationTasks("BasicWageTotal", BasicWageTotal)}
        errorMessage={errors.BasicWageTotal?.errorMessage}
        hasError={errors.BasicWageTotal?.hasError}
        {...getOverrideProps(overrides, "BasicWageTotal")}
      ></TextField>
      <TextField
        label="Hours"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Hours}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours: value,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.Hours ?? value;
          }
          if (errors.Hours?.hasError) {
            runValidationTasks("Hours", value);
          }
          setHours(value);
        }}
        onBlur={() => runValidationTasks("Hours", Hours)}
        errorMessage={errors.Hours?.errorMessage}
        hasError={errors.Hours?.hasError}
        {...getOverrideProps(overrides, "Hours")}
      ></TextField>
      <TextField
        label="Deliverys"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Deliverys}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys: value,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.Deliverys ?? value;
          }
          if (errors.Deliverys?.hasError) {
            runValidationTasks("Deliverys", value);
          }
          setDeliverys(value);
        }}
        onBlur={() => runValidationTasks("Deliverys", Deliverys)}
        errorMessage={errors.Deliverys?.errorMessage}
        hasError={errors.Deliverys?.hasError}
        {...getOverrideProps(overrides, "Deliverys")}
      ></TextField>
      <TextField
        label="Promo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Promo}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo: value,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.Promo ?? value;
          }
          if (errors.Promo?.hasError) {
            runValidationTasks("Promo", value);
          }
          setPromo(value);
        }}
        onBlur={() => runValidationTasks("Promo", Promo)}
        errorMessage={errors.Promo?.errorMessage}
        hasError={errors.Promo?.hasError}
        {...getOverrideProps(overrides, "Promo")}
      ></TextField>
      <TextField
        label="Extra total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ExtraTotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal: value,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.ExtraTotal ?? value;
          }
          if (errors.ExtraTotal?.hasError) {
            runValidationTasks("ExtraTotal", value);
          }
          setExtraTotal(value);
        }}
        onBlur={() => runValidationTasks("ExtraTotal", ExtraTotal)}
        errorMessage={errors.ExtraTotal?.errorMessage}
        hasError={errors.ExtraTotal?.hasError}
        {...getOverrideProps(overrides, "ExtraTotal")}
      ></TextField>
      <TextAreaField
        label="Monday resturant"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant: value,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.MondayResturant ?? value;
          }
          if (errors.MondayResturant?.hasError) {
            runValidationTasks("MondayResturant", value);
          }
          setMondayResturant(value);
        }}
        onBlur={() => runValidationTasks("MondayResturant", MondayResturant)}
        errorMessage={errors.MondayResturant?.errorMessage}
        hasError={errors.MondayResturant?.hasError}
        {...getOverrideProps(overrides, "MondayResturant")}
      ></TextAreaField>
      <TextAreaField
        label="Tuesday resturant"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant: value,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.TuesdayResturant ?? value;
          }
          if (errors.TuesdayResturant?.hasError) {
            runValidationTasks("TuesdayResturant", value);
          }
          setTuesdayResturant(value);
        }}
        onBlur={() => runValidationTasks("TuesdayResturant", TuesdayResturant)}
        errorMessage={errors.TuesdayResturant?.errorMessage}
        hasError={errors.TuesdayResturant?.hasError}
        {...getOverrideProps(overrides, "TuesdayResturant")}
      ></TextAreaField>
      <TextAreaField
        label="Wednesday resturant"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant: value,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.WednesdayResturant ?? value;
          }
          if (errors.WednesdayResturant?.hasError) {
            runValidationTasks("WednesdayResturant", value);
          }
          setWednesdayResturant(value);
        }}
        onBlur={() =>
          runValidationTasks("WednesdayResturant", WednesdayResturant)
        }
        errorMessage={errors.WednesdayResturant?.errorMessage}
        hasError={errors.WednesdayResturant?.hasError}
        {...getOverrideProps(overrides, "WednesdayResturant")}
      ></TextAreaField>
      <TextField
        label="Thursday resturant"
        isRequired={false}
        isReadOnly={false}
        value={ThursdayResturant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant: value,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.ThursdayResturant ?? value;
          }
          if (errors.ThursdayResturant?.hasError) {
            runValidationTasks("ThursdayResturant", value);
          }
          setThursdayResturant(value);
        }}
        onBlur={() =>
          runValidationTasks("ThursdayResturant", ThursdayResturant)
        }
        errorMessage={errors.ThursdayResturant?.errorMessage}
        hasError={errors.ThursdayResturant?.hasError}
        {...getOverrideProps(overrides, "ThursdayResturant")}
      ></TextField>
      <TextField
        label="Friday resturant"
        isRequired={false}
        isReadOnly={false}
        value={FridayResturant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant: value,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.FridayResturant ?? value;
          }
          if (errors.FridayResturant?.hasError) {
            runValidationTasks("FridayResturant", value);
          }
          setFridayResturant(value);
        }}
        onBlur={() => runValidationTasks("FridayResturant", FridayResturant)}
        errorMessage={errors.FridayResturant?.errorMessage}
        hasError={errors.FridayResturant?.hasError}
        {...getOverrideProps(overrides, "FridayResturant")}
      ></TextField>
      <TextField
        label="Saturday resturant"
        isRequired={false}
        isReadOnly={false}
        value={SaturdayResturant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant: value,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.SaturdayResturant ?? value;
          }
          if (errors.SaturdayResturant?.hasError) {
            runValidationTasks("SaturdayResturant", value);
          }
          setSaturdayResturant(value);
        }}
        onBlur={() =>
          runValidationTasks("SaturdayResturant", SaturdayResturant)
        }
        errorMessage={errors.SaturdayResturant?.errorMessage}
        hasError={errors.SaturdayResturant?.hasError}
        {...getOverrideProps(overrides, "SaturdayResturant")}
      ></TextField>
      <TextField
        label="Sunday resturant"
        isRequired={false}
        isReadOnly={false}
        value={SundayResturant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant: value,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.SundayResturant ?? value;
          }
          if (errors.SundayResturant?.hasError) {
            runValidationTasks("SundayResturant", value);
          }
          setSundayResturant(value);
        }}
        onBlur={() => runValidationTasks("SundayResturant", SundayResturant)}
        errorMessage={errors.SundayResturant?.errorMessage}
        hasError={errors.SundayResturant?.hasError}
        {...getOverrideProps(overrides, "SundayResturant")}
      ></TextField>
      <TextAreaField
        label="Monday clock ins"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns: value,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.MondayClockIns ?? value;
          }
          if (errors.MondayClockIns?.hasError) {
            runValidationTasks("MondayClockIns", value);
          }
          setMondayClockIns(value);
        }}
        onBlur={() => runValidationTasks("MondayClockIns", MondayClockIns)}
        errorMessage={errors.MondayClockIns?.errorMessage}
        hasError={errors.MondayClockIns?.hasError}
        {...getOverrideProps(overrides, "MondayClockIns")}
      ></TextAreaField>
      <TextAreaField
        label="Tuesday clockins"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins: value,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.TuesdayClockins ?? value;
          }
          if (errors.TuesdayClockins?.hasError) {
            runValidationTasks("TuesdayClockins", value);
          }
          setTuesdayClockins(value);
        }}
        onBlur={() => runValidationTasks("TuesdayClockins", TuesdayClockins)}
        errorMessage={errors.TuesdayClockins?.errorMessage}
        hasError={errors.TuesdayClockins?.hasError}
        {...getOverrideProps(overrides, "TuesdayClockins")}
      ></TextAreaField>
      <TextAreaField
        label="Wedesday clockins"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins: value,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.WedesdayClockins ?? value;
          }
          if (errors.WedesdayClockins?.hasError) {
            runValidationTasks("WedesdayClockins", value);
          }
          setWedesdayClockins(value);
        }}
        onBlur={() => runValidationTasks("WedesdayClockins", WedesdayClockins)}
        errorMessage={errors.WedesdayClockins?.errorMessage}
        hasError={errors.WedesdayClockins?.hasError}
        {...getOverrideProps(overrides, "WedesdayClockins")}
      ></TextAreaField>
      <TextAreaField
        label="Thursday clockins"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins: value,
              FridayClockins,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.ThursdayClockins ?? value;
          }
          if (errors.ThursdayClockins?.hasError) {
            runValidationTasks("ThursdayClockins", value);
          }
          setThursdayClockins(value);
        }}
        onBlur={() => runValidationTasks("ThursdayClockins", ThursdayClockins)}
        errorMessage={errors.ThursdayClockins?.errorMessage}
        hasError={errors.ThursdayClockins?.hasError}
        {...getOverrideProps(overrides, "ThursdayClockins")}
      ></TextAreaField>
      <TextAreaField
        label="Friday clockins"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins: value,
              SaturdayClockins,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.FridayClockins ?? value;
          }
          if (errors.FridayClockins?.hasError) {
            runValidationTasks("FridayClockins", value);
          }
          setFridayClockins(value);
        }}
        onBlur={() => runValidationTasks("FridayClockins", FridayClockins)}
        errorMessage={errors.FridayClockins?.errorMessage}
        hasError={errors.FridayClockins?.hasError}
        {...getOverrideProps(overrides, "FridayClockins")}
      ></TextAreaField>
      <TextAreaField
        label="Saturday clockins"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins: value,
              SundayClockins,
            };
            const result = onChange(modelFields);
            value = result?.SaturdayClockins ?? value;
          }
          if (errors.SaturdayClockins?.hasError) {
            runValidationTasks("SaturdayClockins", value);
          }
          setSaturdayClockins(value);
        }}
        onBlur={() => runValidationTasks("SaturdayClockins", SaturdayClockins)}
        errorMessage={errors.SaturdayClockins?.errorMessage}
        hasError={errors.SaturdayClockins?.hasError}
        {...getOverrideProps(overrides, "SaturdayClockins")}
      ></TextAreaField>
      <TextAreaField
        label="Sunday clockins"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              DriverID,
              Date,
              Week,
              MondayBlock,
              TuesdayBlock,
              WednesdayBlock,
              ThursdayBlock,
              FridayBlock,
              SaturdayBlock,
              SundayBlock,
              BasicWageTotal,
              Hours,
              Deliverys,
              Promo,
              ExtraTotal,
              MondayResturant,
              TuesdayResturant,
              WednesdayResturant,
              ThursdayResturant,
              FridayResturant,
              SaturdayResturant,
              SundayResturant,
              MondayClockIns,
              TuesdayClockins,
              WedesdayClockins,
              ThursdayClockins,
              FridayClockins,
              SaturdayClockins,
              SundayClockins: value,
            };
            const result = onChange(modelFields);
            value = result?.SundayClockins ?? value;
          }
          if (errors.SundayClockins?.hasError) {
            runValidationTasks("SundayClockins", value);
          }
          setSundayClockins(value);
        }}
        onBlur={() => runValidationTasks("SundayClockins", SundayClockins)}
        errorMessage={errors.SundayClockins?.errorMessage}
        hasError={errors.SundayClockins?.hasError}
        {...getOverrideProps(overrides, "SundayClockins")}
      ></TextAreaField>
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
