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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createMenuItems } from "../mutations";
const client = generateClient();
export default function MenuItemsCreateForm(props) {
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
    PriceDelivery: "",
    StockLevel: "",
    Ingredients: "",
    PreVAT: "",
    ProfitMargin: "",
    PriceCollection: "",
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [PriceDelivery, setPriceDelivery] = React.useState(
    initialValues.PriceDelivery
  );
  const [StockLevel, setStockLevel] = React.useState(initialValues.StockLevel);
  const [Ingredients, setIngredients] = React.useState(
    initialValues.Ingredients
  );
  const [PreVAT, setPreVAT] = React.useState(initialValues.PreVAT);
  const [ProfitMargin, setProfitMargin] = React.useState(
    initialValues.ProfitMargin
  );
  const [PriceCollection, setPriceCollection] = React.useState(
    initialValues.PriceCollection
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setPriceDelivery(initialValues.PriceDelivery);
    setStockLevel(initialValues.StockLevel);
    setIngredients(initialValues.Ingredients);
    setPreVAT(initialValues.PreVAT);
    setProfitMargin(initialValues.ProfitMargin);
    setPriceCollection(initialValues.PriceCollection);
    setErrors({});
  };
  const validations = {
    Name: [],
    PriceDelivery: [],
    StockLevel: [],
    Ingredients: [{ type: "JSON" }],
    PreVAT: [],
    ProfitMargin: [],
    PriceCollection: [],
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
          PriceDelivery,
          StockLevel,
          Ingredients,
          PreVAT,
          ProfitMargin,
          PriceCollection,
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
            query: createMenuItems.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "MenuItemsCreateForm")}
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
              PriceDelivery,
              StockLevel,
              Ingredients,
              PreVAT,
              ProfitMargin,
              PriceCollection,
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
        label="Price delivery"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={PriceDelivery}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              PriceDelivery: value,
              StockLevel,
              Ingredients,
              PreVAT,
              ProfitMargin,
              PriceCollection,
            };
            const result = onChange(modelFields);
            value = result?.PriceDelivery ?? value;
          }
          if (errors.PriceDelivery?.hasError) {
            runValidationTasks("PriceDelivery", value);
          }
          setPriceDelivery(value);
        }}
        onBlur={() => runValidationTasks("PriceDelivery", PriceDelivery)}
        errorMessage={errors.PriceDelivery?.errorMessage}
        hasError={errors.PriceDelivery?.hasError}
        {...getOverrideProps(overrides, "PriceDelivery")}
      ></TextField>
      <TextField
        label="Stock level"
        isRequired={false}
        isReadOnly={false}
        value={StockLevel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              PriceDelivery,
              StockLevel: value,
              Ingredients,
              PreVAT,
              ProfitMargin,
              PriceCollection,
            };
            const result = onChange(modelFields);
            value = result?.StockLevel ?? value;
          }
          if (errors.StockLevel?.hasError) {
            runValidationTasks("StockLevel", value);
          }
          setStockLevel(value);
        }}
        onBlur={() => runValidationTasks("StockLevel", StockLevel)}
        errorMessage={errors.StockLevel?.errorMessage}
        hasError={errors.StockLevel?.hasError}
        {...getOverrideProps(overrides, "StockLevel")}
      ></TextField>
      <TextAreaField
        label="Ingredients"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              PriceDelivery,
              StockLevel,
              Ingredients: value,
              PreVAT,
              ProfitMargin,
              PriceCollection,
            };
            const result = onChange(modelFields);
            value = result?.Ingredients ?? value;
          }
          if (errors.Ingredients?.hasError) {
            runValidationTasks("Ingredients", value);
          }
          setIngredients(value);
        }}
        onBlur={() => runValidationTasks("Ingredients", Ingredients)}
        errorMessage={errors.Ingredients?.errorMessage}
        hasError={errors.Ingredients?.hasError}
        {...getOverrideProps(overrides, "Ingredients")}
      ></TextAreaField>
      <TextField
        label="Pre vat"
        isRequired={false}
        isReadOnly={false}
        value={PreVAT}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              PriceDelivery,
              StockLevel,
              Ingredients,
              PreVAT: value,
              ProfitMargin,
              PriceCollection,
            };
            const result = onChange(modelFields);
            value = result?.PreVAT ?? value;
          }
          if (errors.PreVAT?.hasError) {
            runValidationTasks("PreVAT", value);
          }
          setPreVAT(value);
        }}
        onBlur={() => runValidationTasks("PreVAT", PreVAT)}
        errorMessage={errors.PreVAT?.errorMessage}
        hasError={errors.PreVAT?.hasError}
        {...getOverrideProps(overrides, "PreVAT")}
      ></TextField>
      <TextField
        label="Profit margin"
        isRequired={false}
        isReadOnly={false}
        value={ProfitMargin}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              PriceDelivery,
              StockLevel,
              Ingredients,
              PreVAT,
              ProfitMargin: value,
              PriceCollection,
            };
            const result = onChange(modelFields);
            value = result?.ProfitMargin ?? value;
          }
          if (errors.ProfitMargin?.hasError) {
            runValidationTasks("ProfitMargin", value);
          }
          setProfitMargin(value);
        }}
        onBlur={() => runValidationTasks("ProfitMargin", ProfitMargin)}
        errorMessage={errors.ProfitMargin?.errorMessage}
        hasError={errors.ProfitMargin?.hasError}
        {...getOverrideProps(overrides, "ProfitMargin")}
      ></TextField>
      <TextField
        label="Price collection"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={PriceCollection}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              Name,
              PriceDelivery,
              StockLevel,
              Ingredients,
              PreVAT,
              ProfitMargin,
              PriceCollection: value,
            };
            const result = onChange(modelFields);
            value = result?.PriceCollection ?? value;
          }
          if (errors.PriceCollection?.hasError) {
            runValidationTasks("PriceCollection", value);
          }
          setPriceCollection(value);
        }}
        onBlur={() => runValidationTasks("PriceCollection", PriceCollection)}
        errorMessage={errors.PriceCollection?.errorMessage}
        hasError={errors.PriceCollection?.hasError}
        {...getOverrideProps(overrides, "PriceCollection")}
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
