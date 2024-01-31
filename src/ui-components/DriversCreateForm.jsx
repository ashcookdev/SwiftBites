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
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { Drivers } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function DriversCreateForm(props) {
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
    Name: "",
    Address: "",
    PostCode: "",
    SortCode: "",
    AccountNumber: "",
    CarReg: "",
    MOTDate: "",
    StartDate: "",
    BasicWage: "",
    StarRating: "",
    InsuranceDetails: "",
    InterviewNotes: "",
    Nationality: "",
    YearsDriving: "",
    Deliverys: "",
    ContractFinish: "",
    InternalReviews: "",
    ContractType: "",
    Area: "",
    NationalInsurance: "",
    Telephone: "",
    LicenceNumber: "",
    PassedInterview: false,
    DriverReviews: "",
    DOB: "",
    InterviewAccepted: false,
    HRnotes: "",
    Current: false,
    County: "",
    Country: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [PostCode, setPostCode] = React.useState(initialValues.PostCode);
  const [SortCode, setSortCode] = React.useState(initialValues.SortCode);
  const [AccountNumber, setAccountNumber] = React.useState(
    initialValues.AccountNumber
  );
  const [CarReg, setCarReg] = React.useState(initialValues.CarReg);
  const [MOTDate, setMOTDate] = React.useState(initialValues.MOTDate);
  const [StartDate, setStartDate] = React.useState(initialValues.StartDate);
  const [BasicWage, setBasicWage] = React.useState(initialValues.BasicWage);
  const [StarRating, setStarRating] = React.useState(initialValues.StarRating);
  const [InsuranceDetails, setInsuranceDetails] = React.useState(
    initialValues.InsuranceDetails
  );
  const [InterviewNotes, setInterviewNotes] = React.useState(
    initialValues.InterviewNotes
  );
  const [Nationality, setNationality] = React.useState(
    initialValues.Nationality
  );
  const [YearsDriving, setYearsDriving] = React.useState(
    initialValues.YearsDriving
  );
  const [Deliverys, setDeliverys] = React.useState(initialValues.Deliverys);
  const [ContractFinish, setContractFinish] = React.useState(
    initialValues.ContractFinish
  );
  const [InternalReviews, setInternalReviews] = React.useState(
    initialValues.InternalReviews
  );
  const [ContractType, setContractType] = React.useState(
    initialValues.ContractType
  );
  const [Area, setArea] = React.useState(initialValues.Area);
  const [NationalInsurance, setNationalInsurance] = React.useState(
    initialValues.NationalInsurance
  );
  const [Telephone, setTelephone] = React.useState(initialValues.Telephone);
  const [LicenceNumber, setLicenceNumber] = React.useState(
    initialValues.LicenceNumber
  );
  const [PassedInterview, setPassedInterview] = React.useState(
    initialValues.PassedInterview
  );
  const [DriverReviews, setDriverReviews] = React.useState(
    initialValues.DriverReviews
  );
  const [DOB, setDOB] = React.useState(initialValues.DOB);
  const [InterviewAccepted, setInterviewAccepted] = React.useState(
    initialValues.InterviewAccepted
  );
  const [HRnotes, setHRnotes] = React.useState(initialValues.HRnotes);
  const [Current, setCurrent] = React.useState(initialValues.Current);
  const [County, setCounty] = React.useState(initialValues.County);
  const [Country, setCountry] = React.useState(initialValues.Country);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setAddress(initialValues.Address);
    setPostCode(initialValues.PostCode);
    setSortCode(initialValues.SortCode);
    setAccountNumber(initialValues.AccountNumber);
    setCarReg(initialValues.CarReg);
    setMOTDate(initialValues.MOTDate);
    setStartDate(initialValues.StartDate);
    setBasicWage(initialValues.BasicWage);
    setStarRating(initialValues.StarRating);
    setInsuranceDetails(initialValues.InsuranceDetails);
    setInterviewNotes(initialValues.InterviewNotes);
    setNationality(initialValues.Nationality);
    setYearsDriving(initialValues.YearsDriving);
    setDeliverys(initialValues.Deliverys);
    setContractFinish(initialValues.ContractFinish);
    setInternalReviews(initialValues.InternalReviews);
    setContractType(initialValues.ContractType);
    setArea(initialValues.Area);
    setNationalInsurance(initialValues.NationalInsurance);
    setTelephone(initialValues.Telephone);
    setLicenceNumber(initialValues.LicenceNumber);
    setPassedInterview(initialValues.PassedInterview);
    setDriverReviews(initialValues.DriverReviews);
    setDOB(initialValues.DOB);
    setInterviewAccepted(initialValues.InterviewAccepted);
    setHRnotes(initialValues.HRnotes);
    setCurrent(initialValues.Current);
    setCounty(initialValues.County);
    setCountry(initialValues.Country);
    setErrors({});
  };
  const validations = {
    Name: [],
    Address: [],
    PostCode: [],
    SortCode: [],
    AccountNumber: [],
    CarReg: [],
    MOTDate: [],
    StartDate: [],
    BasicWage: [],
    StarRating: [],
    InsuranceDetails: [{ type: "JSON" }],
    InterviewNotes: [],
    Nationality: [],
    YearsDriving: [],
    Deliverys: [],
    ContractFinish: [],
    InternalReviews: [],
    ContractType: [],
    Area: [],
    NationalInsurance: [],
    Telephone: [],
    LicenceNumber: [],
    PassedInterview: [],
    DriverReviews: [{ type: "JSON" }],
    DOB: [],
    InterviewAccepted: [],
    HRnotes: [],
    Current: [],
    County: [],
    Country: [],
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
          Name,
          Address,
          PostCode,
          SortCode,
          AccountNumber,
          CarReg,
          MOTDate,
          StartDate,
          BasicWage,
          StarRating,
          InsuranceDetails,
          InterviewNotes,
          Nationality,
          YearsDriving,
          Deliverys,
          ContractFinish,
          InternalReviews,
          ContractType,
          Area,
          NationalInsurance,
          Telephone,
          LicenceNumber,
          PassedInterview,
          DriverReviews,
          DOB,
          InterviewAccepted,
          HRnotes,
          Current,
          County,
          Country,
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
          await DataStore.save(new Drivers(modelFields));
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
      {...getOverrideProps(overrides, "DriversCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
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
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={Address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address: value,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.Address ?? value;
          }
          if (errors.Address?.hasError) {
            runValidationTasks("Address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("Address", Address)}
        errorMessage={errors.Address?.errorMessage}
        hasError={errors.Address?.hasError}
        {...getOverrideProps(overrides, "Address")}
      ></TextField>
      <TextField
        label="Post code"
        isRequired={false}
        isReadOnly={false}
        value={PostCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode: value,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.PostCode ?? value;
          }
          if (errors.PostCode?.hasError) {
            runValidationTasks("PostCode", value);
          }
          setPostCode(value);
        }}
        onBlur={() => runValidationTasks("PostCode", PostCode)}
        errorMessage={errors.PostCode?.errorMessage}
        hasError={errors.PostCode?.hasError}
        {...getOverrideProps(overrides, "PostCode")}
      ></TextField>
      <TextField
        label="Sort code"
        isRequired={false}
        isReadOnly={false}
        value={SortCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode: value,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.SortCode ?? value;
          }
          if (errors.SortCode?.hasError) {
            runValidationTasks("SortCode", value);
          }
          setSortCode(value);
        }}
        onBlur={() => runValidationTasks("SortCode", SortCode)}
        errorMessage={errors.SortCode?.errorMessage}
        hasError={errors.SortCode?.hasError}
        {...getOverrideProps(overrides, "SortCode")}
      ></TextField>
      <TextField
        label="Account number"
        isRequired={false}
        isReadOnly={false}
        value={AccountNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber: value,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.AccountNumber ?? value;
          }
          if (errors.AccountNumber?.hasError) {
            runValidationTasks("AccountNumber", value);
          }
          setAccountNumber(value);
        }}
        onBlur={() => runValidationTasks("AccountNumber", AccountNumber)}
        errorMessage={errors.AccountNumber?.errorMessage}
        hasError={errors.AccountNumber?.hasError}
        {...getOverrideProps(overrides, "AccountNumber")}
      ></TextField>
      <TextField
        label="Car reg"
        isRequired={false}
        isReadOnly={false}
        value={CarReg}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg: value,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.CarReg ?? value;
          }
          if (errors.CarReg?.hasError) {
            runValidationTasks("CarReg", value);
          }
          setCarReg(value);
        }}
        onBlur={() => runValidationTasks("CarReg", CarReg)}
        errorMessage={errors.CarReg?.errorMessage}
        hasError={errors.CarReg?.hasError}
        {...getOverrideProps(overrides, "CarReg")}
      ></TextField>
      <TextField
        label="Mot date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={MOTDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate: value,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.MOTDate ?? value;
          }
          if (errors.MOTDate?.hasError) {
            runValidationTasks("MOTDate", value);
          }
          setMOTDate(value);
        }}
        onBlur={() => runValidationTasks("MOTDate", MOTDate)}
        errorMessage={errors.MOTDate?.errorMessage}
        hasError={errors.MOTDate?.hasError}
        {...getOverrideProps(overrides, "MOTDate")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={StartDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate: value,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.StartDate ?? value;
          }
          if (errors.StartDate?.hasError) {
            runValidationTasks("StartDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("StartDate", StartDate)}
        errorMessage={errors.StartDate?.errorMessage}
        hasError={errors.StartDate?.hasError}
        {...getOverrideProps(overrides, "StartDate")}
      ></TextField>
      <TextField
        label="Basic wage"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={BasicWage}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage: value,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.BasicWage ?? value;
          }
          if (errors.BasicWage?.hasError) {
            runValidationTasks("BasicWage", value);
          }
          setBasicWage(value);
        }}
        onBlur={() => runValidationTasks("BasicWage", BasicWage)}
        errorMessage={errors.BasicWage?.errorMessage}
        hasError={errors.BasicWage?.hasError}
        {...getOverrideProps(overrides, "BasicWage")}
      ></TextField>
      <TextField
        label="Star rating"
        isRequired={false}
        isReadOnly={false}
        value={StarRating}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating: value,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.StarRating ?? value;
          }
          if (errors.StarRating?.hasError) {
            runValidationTasks("StarRating", value);
          }
          setStarRating(value);
        }}
        onBlur={() => runValidationTasks("StarRating", StarRating)}
        errorMessage={errors.StarRating?.errorMessage}
        hasError={errors.StarRating?.hasError}
        {...getOverrideProps(overrides, "StarRating")}
      ></TextField>
      <TextAreaField
        label="Insurance details"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails: value,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.InsuranceDetails ?? value;
          }
          if (errors.InsuranceDetails?.hasError) {
            runValidationTasks("InsuranceDetails", value);
          }
          setInsuranceDetails(value);
        }}
        onBlur={() => runValidationTasks("InsuranceDetails", InsuranceDetails)}
        errorMessage={errors.InsuranceDetails?.errorMessage}
        hasError={errors.InsuranceDetails?.hasError}
        {...getOverrideProps(overrides, "InsuranceDetails")}
      ></TextAreaField>
      <TextField
        label="Interview notes"
        isRequired={false}
        isReadOnly={false}
        value={InterviewNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes: value,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.InterviewNotes ?? value;
          }
          if (errors.InterviewNotes?.hasError) {
            runValidationTasks("InterviewNotes", value);
          }
          setInterviewNotes(value);
        }}
        onBlur={() => runValidationTasks("InterviewNotes", InterviewNotes)}
        errorMessage={errors.InterviewNotes?.errorMessage}
        hasError={errors.InterviewNotes?.hasError}
        {...getOverrideProps(overrides, "InterviewNotes")}
      ></TextField>
      <TextField
        label="Nationality"
        isRequired={false}
        isReadOnly={false}
        value={Nationality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality: value,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.Nationality ?? value;
          }
          if (errors.Nationality?.hasError) {
            runValidationTasks("Nationality", value);
          }
          setNationality(value);
        }}
        onBlur={() => runValidationTasks("Nationality", Nationality)}
        errorMessage={errors.Nationality?.errorMessage}
        hasError={errors.Nationality?.hasError}
        {...getOverrideProps(overrides, "Nationality")}
      ></TextField>
      <TextField
        label="Years driving"
        isRequired={false}
        isReadOnly={false}
        value={YearsDriving}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving: value,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.YearsDriving ?? value;
          }
          if (errors.YearsDriving?.hasError) {
            runValidationTasks("YearsDriving", value);
          }
          setYearsDriving(value);
        }}
        onBlur={() => runValidationTasks("YearsDriving", YearsDriving)}
        errorMessage={errors.YearsDriving?.errorMessage}
        hasError={errors.YearsDriving?.hasError}
        {...getOverrideProps(overrides, "YearsDriving")}
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
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys: value,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
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
        label="Contract finish"
        isRequired={false}
        isReadOnly={false}
        value={ContractFinish}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish: value,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.ContractFinish ?? value;
          }
          if (errors.ContractFinish?.hasError) {
            runValidationTasks("ContractFinish", value);
          }
          setContractFinish(value);
        }}
        onBlur={() => runValidationTasks("ContractFinish", ContractFinish)}
        errorMessage={errors.ContractFinish?.errorMessage}
        hasError={errors.ContractFinish?.hasError}
        {...getOverrideProps(overrides, "ContractFinish")}
      ></TextField>
      <TextField
        label="Internal reviews"
        isRequired={false}
        isReadOnly={false}
        value={InternalReviews}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews: value,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.InternalReviews ?? value;
          }
          if (errors.InternalReviews?.hasError) {
            runValidationTasks("InternalReviews", value);
          }
          setInternalReviews(value);
        }}
        onBlur={() => runValidationTasks("InternalReviews", InternalReviews)}
        errorMessage={errors.InternalReviews?.errorMessage}
        hasError={errors.InternalReviews?.hasError}
        {...getOverrideProps(overrides, "InternalReviews")}
      ></TextField>
      <TextField
        label="Contract type"
        isRequired={false}
        isReadOnly={false}
        value={ContractType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType: value,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.ContractType ?? value;
          }
          if (errors.ContractType?.hasError) {
            runValidationTasks("ContractType", value);
          }
          setContractType(value);
        }}
        onBlur={() => runValidationTasks("ContractType", ContractType)}
        errorMessage={errors.ContractType?.errorMessage}
        hasError={errors.ContractType?.hasError}
        {...getOverrideProps(overrides, "ContractType")}
      ></TextField>
      <TextField
        label="Area"
        isRequired={false}
        isReadOnly={false}
        value={Area}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area: value,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.Area ?? value;
          }
          if (errors.Area?.hasError) {
            runValidationTasks("Area", value);
          }
          setArea(value);
        }}
        onBlur={() => runValidationTasks("Area", Area)}
        errorMessage={errors.Area?.errorMessage}
        hasError={errors.Area?.hasError}
        {...getOverrideProps(overrides, "Area")}
      ></TextField>
      <TextField
        label="National insurance"
        isRequired={false}
        isReadOnly={false}
        value={NationalInsurance}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance: value,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.NationalInsurance ?? value;
          }
          if (errors.NationalInsurance?.hasError) {
            runValidationTasks("NationalInsurance", value);
          }
          setNationalInsurance(value);
        }}
        onBlur={() =>
          runValidationTasks("NationalInsurance", NationalInsurance)
        }
        errorMessage={errors.NationalInsurance?.errorMessage}
        hasError={errors.NationalInsurance?.hasError}
        {...getOverrideProps(overrides, "NationalInsurance")}
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
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone: value,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
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
        label="Licence number"
        isRequired={false}
        isReadOnly={false}
        value={LicenceNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber: value,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.LicenceNumber ?? value;
          }
          if (errors.LicenceNumber?.hasError) {
            runValidationTasks("LicenceNumber", value);
          }
          setLicenceNumber(value);
        }}
        onBlur={() => runValidationTasks("LicenceNumber", LicenceNumber)}
        errorMessage={errors.LicenceNumber?.errorMessage}
        hasError={errors.LicenceNumber?.hasError}
        {...getOverrideProps(overrides, "LicenceNumber")}
      ></TextField>
      <SwitchField
        label="Passed interview"
        defaultChecked={false}
        isDisabled={false}
        isChecked={PassedInterview}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview: value,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.PassedInterview ?? value;
          }
          if (errors.PassedInterview?.hasError) {
            runValidationTasks("PassedInterview", value);
          }
          setPassedInterview(value);
        }}
        onBlur={() => runValidationTasks("PassedInterview", PassedInterview)}
        errorMessage={errors.PassedInterview?.errorMessage}
        hasError={errors.PassedInterview?.hasError}
        {...getOverrideProps(overrides, "PassedInterview")}
      ></SwitchField>
      <TextAreaField
        label="Driver reviews"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews: value,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.DriverReviews ?? value;
          }
          if (errors.DriverReviews?.hasError) {
            runValidationTasks("DriverReviews", value);
          }
          setDriverReviews(value);
        }}
        onBlur={() => runValidationTasks("DriverReviews", DriverReviews)}
        errorMessage={errors.DriverReviews?.errorMessage}
        hasError={errors.DriverReviews?.hasError}
        {...getOverrideProps(overrides, "DriverReviews")}
      ></TextAreaField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        value={DOB}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB: value,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.DOB ?? value;
          }
          if (errors.DOB?.hasError) {
            runValidationTasks("DOB", value);
          }
          setDOB(value);
        }}
        onBlur={() => runValidationTasks("DOB", DOB)}
        errorMessage={errors.DOB?.errorMessage}
        hasError={errors.DOB?.hasError}
        {...getOverrideProps(overrides, "DOB")}
      ></TextField>
      <SwitchField
        label="Interview accepted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={InterviewAccepted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted: value,
              HRnotes,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.InterviewAccepted ?? value;
          }
          if (errors.InterviewAccepted?.hasError) {
            runValidationTasks("InterviewAccepted", value);
          }
          setInterviewAccepted(value);
        }}
        onBlur={() =>
          runValidationTasks("InterviewAccepted", InterviewAccepted)
        }
        errorMessage={errors.InterviewAccepted?.errorMessage}
        hasError={errors.InterviewAccepted?.hasError}
        {...getOverrideProps(overrides, "InterviewAccepted")}
      ></SwitchField>
      <TextField
        label="H rnotes"
        isRequired={false}
        isReadOnly={false}
        value={HRnotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes: value,
              Current,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.HRnotes ?? value;
          }
          if (errors.HRnotes?.hasError) {
            runValidationTasks("HRnotes", value);
          }
          setHRnotes(value);
        }}
        onBlur={() => runValidationTasks("HRnotes", HRnotes)}
        errorMessage={errors.HRnotes?.errorMessage}
        hasError={errors.HRnotes?.hasError}
        {...getOverrideProps(overrides, "HRnotes")}
      ></TextField>
      <SwitchField
        label="Current"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Current}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current: value,
              County,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.Current ?? value;
          }
          if (errors.Current?.hasError) {
            runValidationTasks("Current", value);
          }
          setCurrent(value);
        }}
        onBlur={() => runValidationTasks("Current", Current)}
        errorMessage={errors.Current?.errorMessage}
        hasError={errors.Current?.hasError}
        {...getOverrideProps(overrides, "Current")}
      ></SwitchField>
      <TextField
        label="County"
        isRequired={false}
        isReadOnly={false}
        value={County}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County: value,
              Country,
            };
            const result = onChange(modelFields);
            value = result?.County ?? value;
          }
          if (errors.County?.hasError) {
            runValidationTasks("County", value);
          }
          setCounty(value);
        }}
        onBlur={() => runValidationTasks("County", County)}
        errorMessage={errors.County?.errorMessage}
        hasError={errors.County?.hasError}
        {...getOverrideProps(overrides, "County")}
      ></TextField>
      <TextField
        label="Country"
        isRequired={false}
        isReadOnly={false}
        value={Country}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              PostCode,
              SortCode,
              AccountNumber,
              CarReg,
              MOTDate,
              StartDate,
              BasicWage,
              StarRating,
              InsuranceDetails,
              InterviewNotes,
              Nationality,
              YearsDriving,
              Deliverys,
              ContractFinish,
              InternalReviews,
              ContractType,
              Area,
              NationalInsurance,
              Telephone,
              LicenceNumber,
              PassedInterview,
              DriverReviews,
              DOB,
              InterviewAccepted,
              HRnotes,
              Current,
              County,
              Country: value,
            };
            const result = onChange(modelFields);
            value = result?.Country ?? value;
          }
          if (errors.Country?.hasError) {
            runValidationTasks("Country", value);
          }
          setCountry(value);
        }}
        onBlur={() => runValidationTasks("Country", Country)}
        errorMessage={errors.Country?.errorMessage}
        hasError={errors.Country?.hasError}
        {...getOverrideProps(overrides, "Country")}
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
