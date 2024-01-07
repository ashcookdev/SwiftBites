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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getDeliveries } from "../queries";
import { updateDeliveries } from "../mutations";
const client = generateClient();
export default function DeliveriesUpdateForm(props) {
  const {
    id: idProp,
    deliveries: deliveriesModelProp,
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
    Order: "",
    Total: "",
    DeliveryCharge: "",
    TimeCreated: "",
    Date: "",
    TimeDelivered: "",
    Delivered: false,
    Distance: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [Postcode, setPostcode] = React.useState(initialValues.Postcode);
  const [Order, setOrder] = React.useState(initialValues.Order);
  const [Total, setTotal] = React.useState(initialValues.Total);
  const [DeliveryCharge, setDeliveryCharge] = React.useState(
    initialValues.DeliveryCharge
  );
  const [TimeCreated, setTimeCreated] = React.useState(
    initialValues.TimeCreated
  );
  const [Date, setDate] = React.useState(initialValues.Date);
  const [TimeDelivered, setTimeDelivered] = React.useState(
    initialValues.TimeDelivered
  );
  const [Delivered, setDelivered] = React.useState(initialValues.Delivered);
  const [Distance, setDistance] = React.useState(initialValues.Distance);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = deliveriesRecord
      ? { ...initialValues, ...deliveriesRecord }
      : initialValues;
    setName(cleanValues.Name);
    setAddress(cleanValues.Address);
    setPostcode(cleanValues.Postcode);
    setOrder(
      typeof cleanValues.Order === "string" || cleanValues.Order === null
        ? cleanValues.Order
        : JSON.stringify(cleanValues.Order)
    );
    setTotal(cleanValues.Total);
    setDeliveryCharge(cleanValues.DeliveryCharge);
    setTimeCreated(cleanValues.TimeCreated);
    setDate(cleanValues.Date);
    setTimeDelivered(cleanValues.TimeDelivered);
    setDelivered(cleanValues.Delivered);
    setDistance(cleanValues.Distance);
    setErrors({});
  };
  const [deliveriesRecord, setDeliveriesRecord] =
    React.useState(deliveriesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getDeliveries.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getDeliveries
        : deliveriesModelProp;
      setDeliveriesRecord(record);
    };
    queryData();
  }, [idProp, deliveriesModelProp]);
  React.useEffect(resetStateValues, [deliveriesRecord]);
  const validations = {
    Name: [],
    Address: [],
    Postcode: [],
    Order: [{ type: "JSON" }],
    Total: [],
    DeliveryCharge: [],
    TimeCreated: [],
    Date: [],
    TimeDelivered: [],
    Delivered: [],
    Distance: [],
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
          Name: Name ?? null,
          Address: Address ?? null,
          Postcode: Postcode ?? null,
          Order: Order ?? null,
          Total: Total ?? null,
          DeliveryCharge: DeliveryCharge ?? null,
          TimeCreated: TimeCreated ?? null,
          Date: Date ?? null,
          TimeDelivered: TimeDelivered ?? null,
          Delivered: Delivered ?? null,
          Distance: Distance ?? null,
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
          await client.graphql({
            query: updateDeliveries.replaceAll("__typename", ""),
            variables: {
              input: {
                id: deliveriesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "DeliveriesUpdateForm")}
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
              Order,
              Total,
              DeliveryCharge,
              TimeCreated,
              Date,
              TimeDelivered,
              Delivered,
              Distance,
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
              Order,
              Total,
              DeliveryCharge,
              TimeCreated,
              Date,
              TimeDelivered,
              Delivered,
              Distance,
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
              Order,
              Total,
              DeliveryCharge,
              TimeCreated,
              Date,
              TimeDelivered,
              Delivered,
              Distance,
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
        label="Order"
        isRequired={false}
        isReadOnly={false}
        value={Order}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Order: value,
              Total,
              DeliveryCharge,
              TimeCreated,
              Date,
              TimeDelivered,
              Delivered,
              Distance,
            };
            const result = onChange(modelFields);
            value = result?.Order ?? value;
          }
          if (errors.Order?.hasError) {
            runValidationTasks("Order", value);
          }
          setOrder(value);
        }}
        onBlur={() => runValidationTasks("Order", Order)}
        errorMessage={errors.Order?.errorMessage}
        hasError={errors.Order?.hasError}
        {...getOverrideProps(overrides, "Order")}
      ></TextAreaField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        value={Total}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Order,
              Total: value,
              DeliveryCharge,
              TimeCreated,
              Date,
              TimeDelivered,
              Delivered,
              Distance,
            };
            const result = onChange(modelFields);
            value = result?.Total ?? value;
          }
          if (errors.Total?.hasError) {
            runValidationTasks("Total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("Total", Total)}
        errorMessage={errors.Total?.errorMessage}
        hasError={errors.Total?.hasError}
        {...getOverrideProps(overrides, "Total")}
      ></TextField>
      <TextField
        label="Delivery charge"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={DeliveryCharge}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Order,
              Total,
              DeliveryCharge: value,
              TimeCreated,
              Date,
              TimeDelivered,
              Delivered,
              Distance,
            };
            const result = onChange(modelFields);
            value = result?.DeliveryCharge ?? value;
          }
          if (errors.DeliveryCharge?.hasError) {
            runValidationTasks("DeliveryCharge", value);
          }
          setDeliveryCharge(value);
        }}
        onBlur={() => runValidationTasks("DeliveryCharge", DeliveryCharge)}
        errorMessage={errors.DeliveryCharge?.errorMessage}
        hasError={errors.DeliveryCharge?.hasError}
        {...getOverrideProps(overrides, "DeliveryCharge")}
      ></TextField>
      <TextField
        label="Time created"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={TimeCreated}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Order,
              Total,
              DeliveryCharge,
              TimeCreated: value,
              Date,
              TimeDelivered,
              Delivered,
              Distance,
            };
            const result = onChange(modelFields);
            value = result?.TimeCreated ?? value;
          }
          if (errors.TimeCreated?.hasError) {
            runValidationTasks("TimeCreated", value);
          }
          setTimeCreated(value);
        }}
        onBlur={() => runValidationTasks("TimeCreated", TimeCreated)}
        errorMessage={errors.TimeCreated?.errorMessage}
        hasError={errors.TimeCreated?.hasError}
        {...getOverrideProps(overrides, "TimeCreated")}
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
              Name,
              Address,
              Postcode,
              Order,
              Total,
              DeliveryCharge,
              TimeCreated,
              Date: value,
              TimeDelivered,
              Delivered,
              Distance,
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
        label="Time delivered"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={TimeDelivered}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Order,
              Total,
              DeliveryCharge,
              TimeCreated,
              Date,
              TimeDelivered: value,
              Delivered,
              Distance,
            };
            const result = onChange(modelFields);
            value = result?.TimeDelivered ?? value;
          }
          if (errors.TimeDelivered?.hasError) {
            runValidationTasks("TimeDelivered", value);
          }
          setTimeDelivered(value);
        }}
        onBlur={() => runValidationTasks("TimeDelivered", TimeDelivered)}
        errorMessage={errors.TimeDelivered?.errorMessage}
        hasError={errors.TimeDelivered?.hasError}
        {...getOverrideProps(overrides, "TimeDelivered")}
      ></TextField>
      <SwitchField
        label="Delivered"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Delivered}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Order,
              Total,
              DeliveryCharge,
              TimeCreated,
              Date,
              TimeDelivered,
              Delivered: value,
              Distance,
            };
            const result = onChange(modelFields);
            value = result?.Delivered ?? value;
          }
          if (errors.Delivered?.hasError) {
            runValidationTasks("Delivered", value);
          }
          setDelivered(value);
        }}
        onBlur={() => runValidationTasks("Delivered", Delivered)}
        errorMessage={errors.Delivered?.errorMessage}
        hasError={errors.Delivered?.hasError}
        {...getOverrideProps(overrides, "Delivered")}
      ></SwitchField>
      <TextField
        label="Distance"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Distance}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              Address,
              Postcode,
              Order,
              Total,
              DeliveryCharge,
              TimeCreated,
              Date,
              TimeDelivered,
              Delivered,
              Distance: value,
            };
            const result = onChange(modelFields);
            value = result?.Distance ?? value;
          }
          if (errors.Distance?.hasError) {
            runValidationTasks("Distance", value);
          }
          setDistance(value);
        }}
        onBlur={() => runValidationTasks("Distance", Distance)}
        errorMessage={errors.Distance?.errorMessage}
        hasError={errors.Distance?.hasError}
        {...getOverrideProps(overrides, "Distance")}
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
          isDisabled={!(idProp || deliveriesModelProp)}
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
              !(idProp || deliveriesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
