/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { HomePage } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function HomePageUpdateForm(props) {
  const {
    id: idProp,
    homePage: homePageModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    TopSectionTitle: "",
    TopSectionPic: "",
    TopSectionDescription: "",
  };
  const [TopSectionTitle, setTopSectionTitle] = React.useState(
    initialValues.TopSectionTitle
  );
  const [TopSectionPic, setTopSectionPic] = React.useState(
    initialValues.TopSectionPic
  );
  const [TopSectionDescription, setTopSectionDescription] = React.useState(
    initialValues.TopSectionDescription
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = homePageRecord
      ? { ...initialValues, ...homePageRecord }
      : initialValues;
    setTopSectionTitle(cleanValues.TopSectionTitle);
    setTopSectionPic(cleanValues.TopSectionPic);
    setTopSectionDescription(cleanValues.TopSectionDescription);
    setErrors({});
  };
  const [homePageRecord, setHomePageRecord] = React.useState(homePageModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(HomePage, idProp)
        : homePageModelProp;
      setHomePageRecord(record);
    };
    queryData();
  }, [idProp, homePageModelProp]);
  React.useEffect(resetStateValues, [homePageRecord]);
  const validations = {
    TopSectionTitle: [],
    TopSectionPic: [],
    TopSectionDescription: [],
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
          TopSectionTitle,
          TopSectionPic,
          TopSectionDescription,
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
            HomePage.copyOf(homePageRecord, (updated) => {
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
      {...getOverrideProps(overrides, "HomePageUpdateForm")}
      {...rest}
    >
      <TextField
        label="Top section title"
        isRequired={false}
        isReadOnly={false}
        value={TopSectionTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TopSectionTitle: value,
              TopSectionPic,
              TopSectionDescription,
            };
            const result = onChange(modelFields);
            value = result?.TopSectionTitle ?? value;
          }
          if (errors.TopSectionTitle?.hasError) {
            runValidationTasks("TopSectionTitle", value);
          }
          setTopSectionTitle(value);
        }}
        onBlur={() => runValidationTasks("TopSectionTitle", TopSectionTitle)}
        errorMessage={errors.TopSectionTitle?.errorMessage}
        hasError={errors.TopSectionTitle?.hasError}
        {...getOverrideProps(overrides, "TopSectionTitle")}
      ></TextField>
      <TextField
        label="Top section pic"
        isRequired={false}
        isReadOnly={false}
        value={TopSectionPic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TopSectionTitle,
              TopSectionPic: value,
              TopSectionDescription,
            };
            const result = onChange(modelFields);
            value = result?.TopSectionPic ?? value;
          }
          if (errors.TopSectionPic?.hasError) {
            runValidationTasks("TopSectionPic", value);
          }
          setTopSectionPic(value);
        }}
        onBlur={() => runValidationTasks("TopSectionPic", TopSectionPic)}
        errorMessage={errors.TopSectionPic?.errorMessage}
        hasError={errors.TopSectionPic?.hasError}
        {...getOverrideProps(overrides, "TopSectionPic")}
      ></TextField>
      <TextField
        label="Top section description"
        isRequired={false}
        isReadOnly={false}
        value={TopSectionDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              TopSectionTitle,
              TopSectionPic,
              TopSectionDescription: value,
            };
            const result = onChange(modelFields);
            value = result?.TopSectionDescription ?? value;
          }
          if (errors.TopSectionDescription?.hasError) {
            runValidationTasks("TopSectionDescription", value);
          }
          setTopSectionDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("TopSectionDescription", TopSectionDescription)
        }
        errorMessage={errors.TopSectionDescription?.errorMessage}
        hasError={errors.TopSectionDescription?.hasError}
        {...getOverrideProps(overrides, "TopSectionDescription")}
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
          isDisabled={!(idProp || homePageModelProp)}
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
              !(idProp || homePageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
