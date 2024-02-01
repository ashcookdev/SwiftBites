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
import { TakeAway } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function TakeAwayUpdateForm(props) {
  const {
    id: idProp,
    takeAway: takeAwayModelProp,
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
    Postcode: "",
    Menu: "",
    Contract: "",
    Deliverys: "",
    CurrentDrivers: "",
    ContractStart: "",
    PaymentHistory: "",
    PaymentType: "",
    Telephone: "",
    Email: "",
    Reviews: "",
    StarRating: "",
    ContractFinish: "",
    Website: "",
    CurrentOutstanding: "",
    SortCode: "",
    AccountNumber: "",
    DriverID: "",
    Genre: "",
    SalesNotes: "",
    VisitTime: "",
    CurrentTech: "",
    VisitDate: "",
    Prospect: false,
    Sold: false,
    City: "",
    County: "",
    Area: "",
    Marketing: "",
    PromoBudget: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [Postcode, setPostcode] = React.useState(initialValues.Postcode);
  const [Menu, setMenu] = React.useState(initialValues.Menu);
  const [Contract, setContract] = React.useState(initialValues.Contract);
  const [Deliverys, setDeliverys] = React.useState(initialValues.Deliverys);
  const [CurrentDrivers, setCurrentDrivers] = React.useState(
    initialValues.CurrentDrivers
  );
  const [ContractStart, setContractStart] = React.useState(
    initialValues.ContractStart
  );
  const [PaymentHistory, setPaymentHistory] = React.useState(
    initialValues.PaymentHistory
  );
  const [PaymentType, setPaymentType] = React.useState(
    initialValues.PaymentType
  );
  const [Telephone, setTelephone] = React.useState(initialValues.Telephone);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Reviews, setReviews] = React.useState(initialValues.Reviews);
  const [StarRating, setStarRating] = React.useState(initialValues.StarRating);
  const [ContractFinish, setContractFinish] = React.useState(
    initialValues.ContractFinish
  );
  const [Website, setWebsite] = React.useState(initialValues.Website);
  const [CurrentOutstanding, setCurrentOutstanding] = React.useState(
    initialValues.CurrentOutstanding
  );
  const [SortCode, setSortCode] = React.useState(initialValues.SortCode);
  const [AccountNumber, setAccountNumber] = React.useState(
    initialValues.AccountNumber
  );
  const [DriverID, setDriverID] = React.useState(initialValues.DriverID);
  const [Genre, setGenre] = React.useState(initialValues.Genre);
  const [SalesNotes, setSalesNotes] = React.useState(initialValues.SalesNotes);
  const [VisitTime, setVisitTime] = React.useState(initialValues.VisitTime);
  const [CurrentTech, setCurrentTech] = React.useState(
    initialValues.CurrentTech
  );
  const [VisitDate, setVisitDate] = React.useState(initialValues.VisitDate);
  const [Prospect, setProspect] = React.useState(initialValues.Prospect);
  const [Sold, setSold] = React.useState(initialValues.Sold);
  const [City, setCity] = React.useState(initialValues.City);
  const [County, setCounty] = React.useState(initialValues.County);
  const [Area, setArea] = React.useState(initialValues.Area);
  const [Marketing, setMarketing] = React.useState(initialValues.Marketing);
  const [PromoBudget, setPromoBudget] = React.useState(
    initialValues.PromoBudget
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = takeAwayRecord
      ? { ...initialValues, ...takeAwayRecord }
      : initialValues;
    setName(cleanValues.Name);
    setAddress(cleanValues.Address);
    setPostcode(cleanValues.Postcode);
    setMenu(
      typeof cleanValues.Menu === "string" || cleanValues.Menu === null
        ? cleanValues.Menu
        : JSON.stringify(cleanValues.Menu)
    );
    setContract(cleanValues.Contract);
    setDeliverys(cleanValues.Deliverys);
    setCurrentDrivers(cleanValues.CurrentDrivers);
    setContractStart(cleanValues.ContractStart);
    setPaymentHistory(
      typeof cleanValues.PaymentHistory === "string" ||
        cleanValues.PaymentHistory === null
        ? cleanValues.PaymentHistory
        : JSON.stringify(cleanValues.PaymentHistory)
    );
    setPaymentType(cleanValues.PaymentType);
    setTelephone(cleanValues.Telephone);
    setEmail(cleanValues.Email);
    setReviews(cleanValues.Reviews);
    setStarRating(cleanValues.StarRating);
    setContractFinish(cleanValues.ContractFinish);
    setWebsite(cleanValues.Website);
    setCurrentOutstanding(cleanValues.CurrentOutstanding);
    setSortCode(cleanValues.SortCode);
    setAccountNumber(cleanValues.AccountNumber);
    setDriverID(cleanValues.DriverID);
    setGenre(cleanValues.Genre);
    setSalesNotes(cleanValues.SalesNotes);
    setVisitTime(cleanValues.VisitTime);
    setCurrentTech(cleanValues.CurrentTech);
    setVisitDate(cleanValues.VisitDate);
    setProspect(cleanValues.Prospect);
    setSold(cleanValues.Sold);
    setCity(cleanValues.City);
    setCounty(cleanValues.County);
    setArea(cleanValues.Area);
    setMarketing(cleanValues.Marketing);
    setPromoBudget(cleanValues.PromoBudget);
    setErrors({});
  };
  const [takeAwayRecord, setTakeAwayRecord] = React.useState(takeAwayModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(TakeAway, idProp)
        : takeAwayModelProp;
      setTakeAwayRecord(record);
    };
    queryData();
  }, [idProp, takeAwayModelProp]);
  React.useEffect(resetStateValues, [takeAwayRecord]);
  const validations = {
    Name: [],
    Address: [],
    Postcode: [],
    Menu: [{ type: "JSON" }],
    Contract: [],
    Deliverys: [],
    CurrentDrivers: [],
    ContractStart: [],
    PaymentHistory: [{ type: "JSON" }],
    PaymentType: [],
    Telephone: [],
    Email: [],
    Reviews: [],
    StarRating: [],
    ContractFinish: [],
    Website: [],
    CurrentOutstanding: [],
    SortCode: [],
    AccountNumber: [],
    DriverID: [],
    Genre: [],
    SalesNotes: [],
    VisitTime: [],
    CurrentTech: [],
    VisitDate: [],
    Prospect: [],
    Sold: [],
    City: [],
    County: [],
    Area: [],
    Marketing: [],
    PromoBudget: [],
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
          Postcode,
          Menu,
          Contract,
          Deliverys,
          CurrentDrivers,
          ContractStart,
          PaymentHistory,
          PaymentType,
          Telephone,
          Email,
          Reviews,
          StarRating,
          ContractFinish,
          Website,
          CurrentOutstanding,
          SortCode,
          AccountNumber,
          DriverID,
          Genre,
          SalesNotes,
          VisitTime,
          CurrentTech,
          VisitDate,
          Prospect,
          Sold,
          City,
          County,
          Area,
          Marketing,
          PromoBudget,
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
            TakeAway.copyOf(takeAwayRecord, (updated) => {
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
      {...getOverrideProps(overrides, "TakeAwayUpdateForm")}
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
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
        label="Postcode"
        isRequired={false}
        isReadOnly={false}
        value={Postcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode: value,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Postcode ?? value;
          }
          if (errors.Postcode?.hasError) {
            runValidationTasks("Postcode", value);
          }
          setPostcode(value);
        }}
        onBlur={() => runValidationTasks("Postcode", Postcode)}
        errorMessage={errors.Postcode?.errorMessage}
        hasError={errors.Postcode?.hasError}
        {...getOverrideProps(overrides, "Postcode")}
      ></TextField>
      <TextAreaField
        label="Menu"
        isRequired={false}
        isReadOnly={false}
        value={Menu}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu: value,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Menu ?? value;
          }
          if (errors.Menu?.hasError) {
            runValidationTasks("Menu", value);
          }
          setMenu(value);
        }}
        onBlur={() => runValidationTasks("Menu", Menu)}
        errorMessage={errors.Menu?.errorMessage}
        hasError={errors.Menu?.hasError}
        {...getOverrideProps(overrides, "Menu")}
      ></TextAreaField>
      <TextField
        label="Contract"
        isRequired={false}
        isReadOnly={false}
        value={Contract}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract: value,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Contract ?? value;
          }
          if (errors.Contract?.hasError) {
            runValidationTasks("Contract", value);
          }
          setContract(value);
        }}
        onBlur={() => runValidationTasks("Contract", Contract)}
        errorMessage={errors.Contract?.errorMessage}
        hasError={errors.Contract?.hasError}
        {...getOverrideProps(overrides, "Contract")}
      ></TextField>
      <TextField
        label="Deliverys"
        isRequired={false}
        isReadOnly={false}
        value={Deliverys}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys: value,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
        label="Current drivers"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CurrentDrivers}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers: value,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.CurrentDrivers ?? value;
          }
          if (errors.CurrentDrivers?.hasError) {
            runValidationTasks("CurrentDrivers", value);
          }
          setCurrentDrivers(value);
        }}
        onBlur={() => runValidationTasks("CurrentDrivers", CurrentDrivers)}
        errorMessage={errors.CurrentDrivers?.errorMessage}
        hasError={errors.CurrentDrivers?.hasError}
        {...getOverrideProps(overrides, "CurrentDrivers")}
      ></TextField>
      <TextField
        label="Contract start"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={ContractStart}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart: value,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.ContractStart ?? value;
          }
          if (errors.ContractStart?.hasError) {
            runValidationTasks("ContractStart", value);
          }
          setContractStart(value);
        }}
        onBlur={() => runValidationTasks("ContractStart", ContractStart)}
        errorMessage={errors.ContractStart?.errorMessage}
        hasError={errors.ContractStart?.hasError}
        {...getOverrideProps(overrides, "ContractStart")}
      ></TextField>
      <TextAreaField
        label="Payment history"
        isRequired={false}
        isReadOnly={false}
        value={PaymentHistory}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory: value,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.PaymentHistory ?? value;
          }
          if (errors.PaymentHistory?.hasError) {
            runValidationTasks("PaymentHistory", value);
          }
          setPaymentHistory(value);
        }}
        onBlur={() => runValidationTasks("PaymentHistory", PaymentHistory)}
        errorMessage={errors.PaymentHistory?.errorMessage}
        hasError={errors.PaymentHistory?.hasError}
        {...getOverrideProps(overrides, "PaymentHistory")}
      ></TextAreaField>
      <TextField
        label="Payment type"
        isRequired={false}
        isReadOnly={false}
        value={PaymentType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType: value,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.PaymentType ?? value;
          }
          if (errors.PaymentType?.hasError) {
            runValidationTasks("PaymentType", value);
          }
          setPaymentType(value);
        }}
        onBlur={() => runValidationTasks("PaymentType", PaymentType)}
        errorMessage={errors.PaymentType?.errorMessage}
        hasError={errors.PaymentType?.hasError}
        {...getOverrideProps(overrides, "PaymentType")}
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
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone: value,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email: value,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
      <TextField
        label="Reviews"
        isRequired={false}
        isReadOnly={false}
        value={Reviews}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews: value,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Reviews ?? value;
          }
          if (errors.Reviews?.hasError) {
            runValidationTasks("Reviews", value);
          }
          setReviews(value);
        }}
        onBlur={() => runValidationTasks("Reviews", Reviews)}
        errorMessage={errors.Reviews?.errorMessage}
        hasError={errors.Reviews?.hasError}
        {...getOverrideProps(overrides, "Reviews")}
      ></TextField>
      <TextField
        label="Star rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={StarRating}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating: value,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
      <TextField
        label="Contract finish"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={ContractFinish}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish: value,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
        label="Website"
        isRequired={false}
        isReadOnly={false}
        value={Website}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website: value,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Website ?? value;
          }
          if (errors.Website?.hasError) {
            runValidationTasks("Website", value);
          }
          setWebsite(value);
        }}
        onBlur={() => runValidationTasks("Website", Website)}
        errorMessage={errors.Website?.errorMessage}
        hasError={errors.Website?.hasError}
        {...getOverrideProps(overrides, "Website")}
      ></TextField>
      <TextField
        label="Current outstanding"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CurrentOutstanding}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding: value,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.CurrentOutstanding ?? value;
          }
          if (errors.CurrentOutstanding?.hasError) {
            runValidationTasks("CurrentOutstanding", value);
          }
          setCurrentOutstanding(value);
        }}
        onBlur={() =>
          runValidationTasks("CurrentOutstanding", CurrentOutstanding)
        }
        errorMessage={errors.CurrentOutstanding?.errorMessage}
        hasError={errors.CurrentOutstanding?.hasError}
        {...getOverrideProps(overrides, "CurrentOutstanding")}
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
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode: value,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber: value,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
        label="Driver id"
        isRequired={false}
        isReadOnly={false}
        value={DriverID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID: value,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
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
        label="Genre"
        isRequired={false}
        isReadOnly={false}
        value={Genre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre: value,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Genre ?? value;
          }
          if (errors.Genre?.hasError) {
            runValidationTasks("Genre", value);
          }
          setGenre(value);
        }}
        onBlur={() => runValidationTasks("Genre", Genre)}
        errorMessage={errors.Genre?.errorMessage}
        hasError={errors.Genre?.hasError}
        {...getOverrideProps(overrides, "Genre")}
      ></TextField>
      <TextField
        label="Sales notes"
        isRequired={false}
        isReadOnly={false}
        value={SalesNotes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes: value,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.SalesNotes ?? value;
          }
          if (errors.SalesNotes?.hasError) {
            runValidationTasks("SalesNotes", value);
          }
          setSalesNotes(value);
        }}
        onBlur={() => runValidationTasks("SalesNotes", SalesNotes)}
        errorMessage={errors.SalesNotes?.errorMessage}
        hasError={errors.SalesNotes?.hasError}
        {...getOverrideProps(overrides, "SalesNotes")}
      ></TextField>
      <TextField
        label="Visit time"
        isRequired={false}
        isReadOnly={false}
        value={VisitTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime: value,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.VisitTime ?? value;
          }
          if (errors.VisitTime?.hasError) {
            runValidationTasks("VisitTime", value);
          }
          setVisitTime(value);
        }}
        onBlur={() => runValidationTasks("VisitTime", VisitTime)}
        errorMessage={errors.VisitTime?.errorMessage}
        hasError={errors.VisitTime?.hasError}
        {...getOverrideProps(overrides, "VisitTime")}
      ></TextField>
      <TextField
        label="Current tech"
        isRequired={false}
        isReadOnly={false}
        value={CurrentTech}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech: value,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.CurrentTech ?? value;
          }
          if (errors.CurrentTech?.hasError) {
            runValidationTasks("CurrentTech", value);
          }
          setCurrentTech(value);
        }}
        onBlur={() => runValidationTasks("CurrentTech", CurrentTech)}
        errorMessage={errors.CurrentTech?.errorMessage}
        hasError={errors.CurrentTech?.hasError}
        {...getOverrideProps(overrides, "CurrentTech")}
      ></TextField>
      <TextField
        label="Visit date"
        isRequired={false}
        isReadOnly={false}
        value={VisitDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate: value,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.VisitDate ?? value;
          }
          if (errors.VisitDate?.hasError) {
            runValidationTasks("VisitDate", value);
          }
          setVisitDate(value);
        }}
        onBlur={() => runValidationTasks("VisitDate", VisitDate)}
        errorMessage={errors.VisitDate?.errorMessage}
        hasError={errors.VisitDate?.hasError}
        {...getOverrideProps(overrides, "VisitDate")}
      ></TextField>
      <SwitchField
        label="Prospect"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Prospect}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect: value,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Prospect ?? value;
          }
          if (errors.Prospect?.hasError) {
            runValidationTasks("Prospect", value);
          }
          setProspect(value);
        }}
        onBlur={() => runValidationTasks("Prospect", Prospect)}
        errorMessage={errors.Prospect?.errorMessage}
        hasError={errors.Prospect?.hasError}
        {...getOverrideProps(overrides, "Prospect")}
      ></SwitchField>
      <SwitchField
        label="Sold"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Sold}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold: value,
              City,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Sold ?? value;
          }
          if (errors.Sold?.hasError) {
            runValidationTasks("Sold", value);
          }
          setSold(value);
        }}
        onBlur={() => runValidationTasks("Sold", Sold)}
        errorMessage={errors.Sold?.errorMessage}
        hasError={errors.Sold?.hasError}
        {...getOverrideProps(overrides, "Sold")}
      ></SwitchField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={City}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City: value,
              County,
              Area,
              Marketing,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.City ?? value;
          }
          if (errors.City?.hasError) {
            runValidationTasks("City", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("City", City)}
        errorMessage={errors.City?.errorMessage}
        hasError={errors.City?.hasError}
        {...getOverrideProps(overrides, "City")}
      ></TextField>
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
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County: value,
              Area,
              Marketing,
              PromoBudget,
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
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area: value,
              Marketing,
              PromoBudget,
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
        label="Marketing"
        isRequired={false}
        isReadOnly={false}
        value={Marketing}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing: value,
              PromoBudget,
            };
            const result = onChange(modelFields);
            value = result?.Marketing ?? value;
          }
          if (errors.Marketing?.hasError) {
            runValidationTasks("Marketing", value);
          }
          setMarketing(value);
        }}
        onBlur={() => runValidationTasks("Marketing", Marketing)}
        errorMessage={errors.Marketing?.errorMessage}
        hasError={errors.Marketing?.hasError}
        {...getOverrideProps(overrides, "Marketing")}
      ></TextField>
      <TextField
        label="Promo budget"
        isRequired={false}
        isReadOnly={false}
        value={PromoBudget}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Menu,
              Contract,
              Deliverys,
              CurrentDrivers,
              ContractStart,
              PaymentHistory,
              PaymentType,
              Telephone,
              Email,
              Reviews,
              StarRating,
              ContractFinish,
              Website,
              CurrentOutstanding,
              SortCode,
              AccountNumber,
              DriverID,
              Genre,
              SalesNotes,
              VisitTime,
              CurrentTech,
              VisitDate,
              Prospect,
              Sold,
              City,
              County,
              Area,
              Marketing,
              PromoBudget: value,
            };
            const result = onChange(modelFields);
            value = result?.PromoBudget ?? value;
          }
          if (errors.PromoBudget?.hasError) {
            runValidationTasks("PromoBudget", value);
          }
          setPromoBudget(value);
        }}
        onBlur={() => runValidationTasks("PromoBudget", PromoBudget)}
        errorMessage={errors.PromoBudget?.errorMessage}
        hasError={errors.PromoBudget?.hasError}
        {...getOverrideProps(overrides, "PromoBudget")}
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
          isDisabled={!(idProp || takeAwayModelProp)}
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
              !(idProp || takeAwayModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
