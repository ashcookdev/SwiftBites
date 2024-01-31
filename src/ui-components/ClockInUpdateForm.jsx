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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { ClockIn as ClockIn0 } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function ClockInUpdateForm(props) {
  const {
    id: idProp,
    clockIn: clockInModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    ClockIn: "",
    ClockOut: "",
    Sick: false,
    Holiday: "",
    StaffId: "",
    TimeEntryId: "",
    Date: "",
    ClockedIn: false,
    ClockedOut: false,
    StaffName: "",
    StaffRole: "",
    Break: false,
    BreakStart: "",
    BreakEnd: "",
    DriverID: "",
  };
  const [clockIn, setClockIn] = React.useState(initialValues.ClockIn);
  const [ClockOut, setClockOut] = React.useState(initialValues.ClockOut);
  const [Sick, setSick] = React.useState(initialValues.Sick);
  const [Holiday, setHoliday] = React.useState(initialValues.Holiday);
  const [StaffId, setStaffId] = React.useState(initialValues.StaffId);
  const [TimeEntryId, setTimeEntryId] = React.useState(
    initialValues.TimeEntryId
  );
  const [Date, setDate] = React.useState(initialValues.Date);
  const [ClockedIn, setClockedIn] = React.useState(initialValues.ClockedIn);
  const [ClockedOut, setClockedOut] = React.useState(initialValues.ClockedOut);
  const [StaffName, setStaffName] = React.useState(initialValues.StaffName);
  const [StaffRole, setStaffRole] = React.useState(initialValues.StaffRole);
  const [Break1, setBreak1] = React.useState(initialValues.Break);
  const [BreakStart, setBreakStart] = React.useState(initialValues.BreakStart);
  const [BreakEnd, setBreakEnd] = React.useState(initialValues.BreakEnd);
  const [DriverID, setDriverID] = React.useState(initialValues.DriverID);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clockInRecord
      ? { ...initialValues, ...clockInRecord }
      : initialValues;
    setClockIn(cleanValues.ClockIn);
    setClockOut(cleanValues.ClockOut);
    setSick(cleanValues.Sick);
    setHoliday(cleanValues.Holiday);
    setStaffId(cleanValues.StaffId);
    setTimeEntryId(cleanValues.TimeEntryId);
    setDate(cleanValues.Date);
    setClockedIn(cleanValues.ClockedIn);
    setClockedOut(cleanValues.ClockedOut);
    setStaffName(cleanValues.StaffName);
    setStaffRole(cleanValues.StaffRole);
    setBreak1(cleanValues.Break);
    setBreakStart(cleanValues.BreakStart);
    setBreakEnd(cleanValues.BreakEnd);
    setDriverID(cleanValues.DriverID);
    setErrors({});
  };
  const [clockInRecord, setClockInRecord] = React.useState(clockInModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ClockIn0, idProp)
        : clockInModelProp;
      setClockInRecord(record);
    };
    queryData();
  }, [idProp, clockInModelProp]);
  React.useEffect(resetStateValues, [clockInRecord]);
  const validations = {
    ClockIn: [],
    ClockOut: [],
    Sick: [],
    Holiday: [],
    StaffId: [],
    TimeEntryId: [],
    Date: [],
    ClockedIn: [],
    ClockedOut: [],
    StaffName: [],
    StaffRole: [],
    Break: [],
    BreakStart: [],
    BreakEnd: [],
    DriverID: [],
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
          ClockIn: clockIn,
          ClockOut,
          Sick,
          Holiday,
          StaffId,
          TimeEntryId,
          Date,
          ClockedIn,
          ClockedOut,
          StaffName,
          StaffRole,
          Break: Break1,
          BreakStart,
          BreakEnd,
          DriverID,
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
          await DataStore.save(
            ClockIn0.copyOf(clockInRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ClockInUpdateForm")}
      {...rest}
    >
      <TextField
        label="Clock in"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={clockIn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: value,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.ClockIn ?? value;
          }
          if (errors.ClockIn?.hasError) {
            runValidationTasks("ClockIn", value);
          }
          setClockIn(value);
        }}
        onBlur={() => runValidationTasks("ClockIn", clockIn)}
        errorMessage={errors.ClockIn?.errorMessage}
        hasError={errors.ClockIn?.hasError}
        {...getOverrideProps(overrides, "ClockIn")}
      ></TextField>
      <TextField
        label="Clock out"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={ClockOut}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut: value,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.ClockOut ?? value;
          }
          if (errors.ClockOut?.hasError) {
            runValidationTasks("ClockOut", value);
          }
          setClockOut(value);
        }}
        onBlur={() => runValidationTasks("ClockOut", ClockOut)}
        errorMessage={errors.ClockOut?.errorMessage}
        hasError={errors.ClockOut?.hasError}
        {...getOverrideProps(overrides, "ClockOut")}
      ></TextField>
      <SwitchField
        label="Sick"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Sick}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick: value,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.Sick ?? value;
          }
          if (errors.Sick?.hasError) {
            runValidationTasks("Sick", value);
          }
          setSick(value);
        }}
        onBlur={() => runValidationTasks("Sick", Sick)}
        errorMessage={errors.Sick?.errorMessage}
        hasError={errors.Sick?.hasError}
        {...getOverrideProps(overrides, "Sick")}
      ></SwitchField>
      <TextField
        label="Holiday"
        isRequired={false}
        isReadOnly={false}
        value={Holiday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday: value,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.Holiday ?? value;
          }
          if (errors.Holiday?.hasError) {
            runValidationTasks("Holiday", value);
          }
          setHoliday(value);
        }}
        onBlur={() => runValidationTasks("Holiday", Holiday)}
        errorMessage={errors.Holiday?.errorMessage}
        hasError={errors.Holiday?.hasError}
        {...getOverrideProps(overrides, "Holiday")}
      ></TextField>
      <TextField
        label="Staff id"
        isRequired={false}
        isReadOnly={false}
        value={StaffId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId: value,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.StaffId ?? value;
          }
          if (errors.StaffId?.hasError) {
            runValidationTasks("StaffId", value);
          }
          setStaffId(value);
        }}
        onBlur={() => runValidationTasks("StaffId", StaffId)}
        errorMessage={errors.StaffId?.errorMessage}
        hasError={errors.StaffId?.hasError}
        {...getOverrideProps(overrides, "StaffId")}
      ></TextField>
      <TextField
        label="Time entry id"
        isRequired={false}
        isReadOnly={false}
        value={TimeEntryId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId: value,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.TimeEntryId ?? value;
          }
          if (errors.TimeEntryId?.hasError) {
            runValidationTasks("TimeEntryId", value);
          }
          setTimeEntryId(value);
        }}
        onBlur={() => runValidationTasks("TimeEntryId", TimeEntryId)}
        errorMessage={errors.TimeEntryId?.errorMessage}
        hasError={errors.TimeEntryId?.hasError}
        {...getOverrideProps(overrides, "TimeEntryId")}
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
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date: value,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
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
      <SwitchField
        label="Clocked in"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ClockedIn}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn: value,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.ClockedIn ?? value;
          }
          if (errors.ClockedIn?.hasError) {
            runValidationTasks("ClockedIn", value);
          }
          setClockedIn(value);
        }}
        onBlur={() => runValidationTasks("ClockedIn", ClockedIn)}
        errorMessage={errors.ClockedIn?.errorMessage}
        hasError={errors.ClockedIn?.hasError}
        {...getOverrideProps(overrides, "ClockedIn")}
      ></SwitchField>
      <SwitchField
        label="Clocked out"
        defaultChecked={false}
        isDisabled={false}
        isChecked={ClockedOut}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut: value,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.ClockedOut ?? value;
          }
          if (errors.ClockedOut?.hasError) {
            runValidationTasks("ClockedOut", value);
          }
          setClockedOut(value);
        }}
        onBlur={() => runValidationTasks("ClockedOut", ClockedOut)}
        errorMessage={errors.ClockedOut?.errorMessage}
        hasError={errors.ClockedOut?.hasError}
        {...getOverrideProps(overrides, "ClockedOut")}
      ></SwitchField>
      <TextField
        label="Staff name"
        isRequired={false}
        isReadOnly={false}
        value={StaffName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName: value,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.StaffName ?? value;
          }
          if (errors.StaffName?.hasError) {
            runValidationTasks("StaffName", value);
          }
          setStaffName(value);
        }}
        onBlur={() => runValidationTasks("StaffName", StaffName)}
        errorMessage={errors.StaffName?.errorMessage}
        hasError={errors.StaffName?.hasError}
        {...getOverrideProps(overrides, "StaffName")}
      ></TextField>
      <TextField
        label="Staff role"
        isRequired={false}
        isReadOnly={false}
        value={StaffRole}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole: value,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.StaffRole ?? value;
          }
          if (errors.StaffRole?.hasError) {
            runValidationTasks("StaffRole", value);
          }
          setStaffRole(value);
        }}
        onBlur={() => runValidationTasks("StaffRole", StaffRole)}
        errorMessage={errors.StaffRole?.errorMessage}
        hasError={errors.StaffRole?.hasError}
        {...getOverrideProps(overrides, "StaffRole")}
      ></TextField>
      <SwitchField
        label="Break"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Break1}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: value,
              BreakStart,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.Break ?? value;
          }
          if (errors.Break?.hasError) {
            runValidationTasks("Break", value);
          }
          setBreak1(value);
        }}
        onBlur={() => runValidationTasks("Break", Break1)}
        errorMessage={errors.Break?.errorMessage}
        hasError={errors.Break?.hasError}
        {...getOverrideProps(overrides, "Break")}
      ></SwitchField>
      <TextField
        label="Break start"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={BreakStart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart: value,
              BreakEnd,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.BreakStart ?? value;
          }
          if (errors.BreakStart?.hasError) {
            runValidationTasks("BreakStart", value);
          }
          setBreakStart(value);
        }}
        onBlur={() => runValidationTasks("BreakStart", BreakStart)}
        errorMessage={errors.BreakStart?.errorMessage}
        hasError={errors.BreakStart?.hasError}
        {...getOverrideProps(overrides, "BreakStart")}
      ></TextField>
      <TextField
        label="Break end"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={BreakEnd}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd: value,
              DriverID,
            };
            const result = onChange(modelFields);
            value = result?.BreakEnd ?? value;
          }
          if (errors.BreakEnd?.hasError) {
            runValidationTasks("BreakEnd", value);
          }
          setBreakEnd(value);
        }}
        onBlur={() => runValidationTasks("BreakEnd", BreakEnd)}
        errorMessage={errors.BreakEnd?.errorMessage}
        hasError={errors.BreakEnd?.hasError}
        {...getOverrideProps(overrides, "BreakEnd")}
      ></TextField>
      <TextField
        label="Driver id"
        isRequired={false}
        isReadOnly={false}
        value={DriverID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              ClockIn: clockIn,
              ClockOut,
              Sick,
              Holiday,
              StaffId,
              TimeEntryId,
              Date,
              ClockedIn,
              ClockedOut,
              StaffName,
              StaffRole,
              Break: Break1,
              BreakStart,
              BreakEnd,
              DriverID: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || clockInModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || clockInModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
