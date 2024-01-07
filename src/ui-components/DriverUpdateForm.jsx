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
import { Driver } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function DriverUpdateForm(props) {
  const {
    id: idProp,
    driver: driverModelProp,
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
    OnWay: false,
    WayBack: false,
    Deliverys: "",
    BackAtBranch: false,
    Long: "",
    Lat: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [OnWay, setOnWay] = React.useState(initialValues.OnWay);
  const [WayBack, setWayBack] = React.useState(initialValues.WayBack);
  const [Deliverys, setDeliverys] = React.useState(initialValues.Deliverys);
  const [BackAtBranch, setBackAtBranch] = React.useState(
    initialValues.BackAtBranch
  );
  const [Long, setLong] = React.useState(initialValues.Long);
  const [Lat, setLat] = React.useState(initialValues.Lat);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = driverRecord
      ? { ...initialValues, ...driverRecord }
      : initialValues;
    setName(cleanValues.Name);
    setOnWay(cleanValues.OnWay);
    setWayBack(cleanValues.WayBack);
    setDeliverys(cleanValues.Deliverys);
    setBackAtBranch(cleanValues.BackAtBranch);
    setLong(cleanValues.Long);
    setLat(cleanValues.Lat);
    setErrors({});
  };
  const [driverRecord, setDriverRecord] = React.useState(driverModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Driver, idProp)
        : driverModelProp;
      setDriverRecord(record);
    };
    queryData();
  }, [idProp, driverModelProp]);
  React.useEffect(resetStateValues, [driverRecord]);
  const validations = {
    Name: [],
    OnWay: [],
    WayBack: [],
    Deliverys: [],
    BackAtBranch: [],
    Long: [],
    Lat: [],
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
          OnWay,
          WayBack,
          Deliverys,
          BackAtBranch,
          Long,
          Lat,
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
            Driver.copyOf(driverRecord, (updated) => {
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
      {...getOverrideProps(overrides, "DriverUpdateForm")}
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
              OnWay,
              WayBack,
              Deliverys,
              BackAtBranch,
              Long,
              Lat,
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
      <SwitchField
        label="On way"
        defaultChecked={false}
        isDisabled={false}
        isChecked={OnWay}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              OnWay: value,
              WayBack,
              Deliverys,
              BackAtBranch,
              Long,
              Lat,
            };
            const result = onChange(modelFields);
            value = result?.OnWay ?? value;
          }
          if (errors.OnWay?.hasError) {
            runValidationTasks("OnWay", value);
          }
          setOnWay(value);
        }}
        onBlur={() => runValidationTasks("OnWay", OnWay)}
        errorMessage={errors.OnWay?.errorMessage}
        hasError={errors.OnWay?.hasError}
        {...getOverrideProps(overrides, "OnWay")}
      ></SwitchField>
      <SwitchField
        label="Way back"
        defaultChecked={false}
        isDisabled={false}
        isChecked={WayBack}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              OnWay,
              WayBack: value,
              Deliverys,
              BackAtBranch,
              Long,
              Lat,
            };
            const result = onChange(modelFields);
            value = result?.WayBack ?? value;
          }
          if (errors.WayBack?.hasError) {
            runValidationTasks("WayBack", value);
          }
          setWayBack(value);
        }}
        onBlur={() => runValidationTasks("WayBack", WayBack)}
        errorMessage={errors.WayBack?.errorMessage}
        hasError={errors.WayBack?.hasError}
        {...getOverrideProps(overrides, "WayBack")}
      ></SwitchField>
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
              OnWay,
              WayBack,
              Deliverys: value,
              BackAtBranch,
              Long,
              Lat,
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
      <SwitchField
        label="Back at branch"
        defaultChecked={false}
        isDisabled={false}
        isChecked={BackAtBranch}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              OnWay,
              WayBack,
              Deliverys,
              BackAtBranch: value,
              Long,
              Lat,
            };
            const result = onChange(modelFields);
            value = result?.BackAtBranch ?? value;
          }
          if (errors.BackAtBranch?.hasError) {
            runValidationTasks("BackAtBranch", value);
          }
          setBackAtBranch(value);
        }}
        onBlur={() => runValidationTasks("BackAtBranch", BackAtBranch)}
        errorMessage={errors.BackAtBranch?.errorMessage}
        hasError={errors.BackAtBranch?.hasError}
        {...getOverrideProps(overrides, "BackAtBranch")}
      ></SwitchField>
      <TextField
        label="Long"
        isRequired={false}
        isReadOnly={false}
        value={Long}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              OnWay,
              WayBack,
              Deliverys,
              BackAtBranch,
              Long: value,
              Lat,
            };
            const result = onChange(modelFields);
            value = result?.Long ?? value;
          }
          if (errors.Long?.hasError) {
            runValidationTasks("Long", value);
          }
          setLong(value);
        }}
        onBlur={() => runValidationTasks("Long", Long)}
        errorMessage={errors.Long?.errorMessage}
        hasError={errors.Long?.hasError}
        {...getOverrideProps(overrides, "Long")}
      ></TextField>
      <TextField
        label="Lat"
        isRequired={false}
        isReadOnly={false}
        value={Lat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              OnWay,
              WayBack,
              Deliverys,
              BackAtBranch,
              Long,
              Lat: value,
            };
            const result = onChange(modelFields);
            value = result?.Lat ?? value;
          }
          if (errors.Lat?.hasError) {
            runValidationTasks("Lat", value);
          }
          setLat(value);
        }}
        onBlur={() => runValidationTasks("Lat", Lat)}
        errorMessage={errors.Lat?.errorMessage}
        hasError={errors.Lat?.hasError}
        {...getOverrideProps(overrides, "Lat")}
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
          isDisabled={!(idProp || driverModelProp)}
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
              !(idProp || driverModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
