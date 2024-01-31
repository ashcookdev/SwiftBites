/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { InterviewSlots } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function InterviewSlotsUpdateForm(props) {
  const {
    id: idProp,
    interviewSlots: interviewSlotsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Time: "",
    Date: "",
    Name: "",
    Notes: "",
    JobOffered: "",
    ApplicationID: "",
    ZoomLink: "",
    Telephone: "",
    Email: "",
  };
  const [Time, setTime] = React.useState(initialValues.Time);
  const [Date, setDate] = React.useState(initialValues.Date);
  const [Name, setName] = React.useState(initialValues.Name);
  const [Notes, setNotes] = React.useState(initialValues.Notes);
  const [JobOffered, setJobOffered] = React.useState(initialValues.JobOffered);
  const [ApplicationID, setApplicationID] = React.useState(
    initialValues.ApplicationID
  );
  const [ZoomLink, setZoomLink] = React.useState(initialValues.ZoomLink);
  const [Telephone, setTelephone] = React.useState(initialValues.Telephone);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = interviewSlotsRecord
      ? { ...initialValues, ...interviewSlotsRecord }
      : initialValues;
    setTime(cleanValues.Time);
    setDate(cleanValues.Date);
    setName(cleanValues.Name);
    setNotes(cleanValues.Notes);
    setJobOffered(cleanValues.JobOffered);
    setApplicationID(cleanValues.ApplicationID);
    setZoomLink(cleanValues.ZoomLink);
    setTelephone(cleanValues.Telephone);
    setEmail(cleanValues.Email);
    setErrors({});
  };
  const [interviewSlotsRecord, setInterviewSlotsRecord] = React.useState(
    interviewSlotsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(InterviewSlots, idProp)
        : interviewSlotsModelProp;
      setInterviewSlotsRecord(record);
    };
    queryData();
  }, [idProp, interviewSlotsModelProp]);
  React.useEffect(resetStateValues, [interviewSlotsRecord]);
  const validations = {
    Time: [],
    Date: [],
    Name: [],
    Notes: [],
    JobOffered: [],
    ApplicationID: [],
    ZoomLink: [],
    Telephone: [],
    Email: [],
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
          Time,
          Date,
          Name,
          Notes,
          JobOffered,
          ApplicationID,
          ZoomLink,
          Telephone,
          Email,
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
            InterviewSlots.copyOf(interviewSlotsRecord, (updated) => {
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
      {...getOverrideProps(overrides, "InterviewSlotsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Time"
        isRequired={false}
        isReadOnly={false}
        value={Time}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Time: value,
              Date,
              Name,
              Notes,
              JobOffered,
              ApplicationID,
              ZoomLink,
              Telephone,
              Email,
            };
            const result = onChange(modelFields);
            value = result?.Time ?? value;
          }
          if (errors.Time?.hasError) {
            runValidationTasks("Time", value);
          }
          setTime(value);
        }}
        onBlur={() => runValidationTasks("Time", Time)}
        errorMessage={errors.Time?.errorMessage}
        hasError={errors.Time?.hasError}
        {...getOverrideProps(overrides, "Time")}
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
              Time,
              Date: value,
              Name,
              Notes,
              JobOffered,
              ApplicationID,
              ZoomLink,
              Telephone,
              Email,
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
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Time,
              Date,
              Name: value,
              Notes,
              JobOffered,
              ApplicationID,
              ZoomLink,
              Telephone,
              Email,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={Notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Time,
              Date,
              Name,
              Notes: value,
              JobOffered,
              ApplicationID,
              ZoomLink,
              Telephone,
              Email,
            };
            const result = onChange(modelFields);
            value = result?.Notes ?? value;
          }
          if (errors.Notes?.hasError) {
            runValidationTasks("Notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("Notes", Notes)}
        errorMessage={errors.Notes?.errorMessage}
        hasError={errors.Notes?.hasError}
        {...getOverrideProps(overrides, "Notes")}
      ></TextField>
      <TextField
        label="Job offered"
        isRequired={false}
        isReadOnly={false}
        value={JobOffered}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Time,
              Date,
              Name,
              Notes,
              JobOffered: value,
              ApplicationID,
              ZoomLink,
              Telephone,
              Email,
            };
            const result = onChange(modelFields);
            value = result?.JobOffered ?? value;
          }
          if (errors.JobOffered?.hasError) {
            runValidationTasks("JobOffered", value);
          }
          setJobOffered(value);
        }}
        onBlur={() => runValidationTasks("JobOffered", JobOffered)}
        errorMessage={errors.JobOffered?.errorMessage}
        hasError={errors.JobOffered?.hasError}
        {...getOverrideProps(overrides, "JobOffered")}
      ></TextField>
      <TextField
        label="Application id"
        isRequired={false}
        isReadOnly={false}
        value={ApplicationID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Time,
              Date,
              Name,
              Notes,
              JobOffered,
              ApplicationID: value,
              ZoomLink,
              Telephone,
              Email,
            };
            const result = onChange(modelFields);
            value = result?.ApplicationID ?? value;
          }
          if (errors.ApplicationID?.hasError) {
            runValidationTasks("ApplicationID", value);
          }
          setApplicationID(value);
        }}
        onBlur={() => runValidationTasks("ApplicationID", ApplicationID)}
        errorMessage={errors.ApplicationID?.errorMessage}
        hasError={errors.ApplicationID?.hasError}
        {...getOverrideProps(overrides, "ApplicationID")}
      ></TextField>
      <TextField
        label="Zoom link"
        isRequired={false}
        isReadOnly={false}
        value={ZoomLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Time,
              Date,
              Name,
              Notes,
              JobOffered,
              ApplicationID,
              ZoomLink: value,
              Telephone,
              Email,
            };
            const result = onChange(modelFields);
            value = result?.ZoomLink ?? value;
          }
          if (errors.ZoomLink?.hasError) {
            runValidationTasks("ZoomLink", value);
          }
          setZoomLink(value);
        }}
        onBlur={() => runValidationTasks("ZoomLink", ZoomLink)}
        errorMessage={errors.ZoomLink?.errorMessage}
        hasError={errors.ZoomLink?.hasError}
        {...getOverrideProps(overrides, "ZoomLink")}
      ></TextField>
      <TextField
        label="Telephone"
        isRequired={false}
        isReadOnly={false}
        value={Telephone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Time,
              Date,
              Name,
              Notes,
              JobOffered,
              ApplicationID,
              ZoomLink,
              Telephone: value,
              Email,
            };
            const result = onChange(modelFields);
            value = result?.Telephone ?? value;
          }
          if (errors.Telephone?.hasError) {
            runValidationTasks("Telephone", value);
          }
          setTelephone(value);
        }}
        onBlur={() => runValidationTasks("Telephone", Telephone)}
        errorMessage={errors.Telephone?.errorMessage}
        hasError={errors.Telephone?.hasError}
        {...getOverrideProps(overrides, "Telephone")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Time,
              Date,
              Name,
              Notes,
              JobOffered,
              ApplicationID,
              ZoomLink,
              Telephone,
              Email: value,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
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
          isDisabled={!(idProp || interviewSlotsModelProp)}
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
              !(idProp || interviewSlotsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
