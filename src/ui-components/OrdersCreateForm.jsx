/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Orders } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function OrdersCreateForm(props) {
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
    CreatedTime: "",
    CreatedDate: "",
    Collection: false,
    Name: "",
    Address: "",
    Postcode: "",
    Telephone: "",
    Email: "",
    Distance: "",
    SecurityID: "",
    Total: "",
    DrinkItems: [],
    HotItems: [],
    Cooked: false,
    JobAccepted: false,
    Arrived: false,
    Delivered: false,
    TimeDelivered: "",
    JobAcceptedTime: "",
    Notes: "",
    HotOrderPrep: "",
    TotalNoVAT: "",
    KitchenMenuId: [],
    ChefName: "",
    Driver: "",
    DeliveryCharge: "",
    JourneyTime: "",
    FullDeliveryTime: "",
    BackAtBranch: false,
    Complete: false,
    Lat: [],
    Long: [],
    CustLat: "",
    CustLong: "",
    Paid: false,
  };
  const [CreatedTime, setCreatedTime] = React.useState(
    initialValues.CreatedTime
  );
  const [CreatedDate, setCreatedDate] = React.useState(
    initialValues.CreatedDate
  );
  const [Collection, setCollection] = React.useState(initialValues.Collection);
  const [Name, setName] = React.useState(initialValues.Name);
  const [Address, setAddress] = React.useState(initialValues.Address);
  const [Postcode, setPostcode] = React.useState(initialValues.Postcode);
  const [Telephone, setTelephone] = React.useState(initialValues.Telephone);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Distance, setDistance] = React.useState(initialValues.Distance);
  const [SecurityID, setSecurityID] = React.useState(initialValues.SecurityID);
  const [Total, setTotal] = React.useState(initialValues.Total);
  const [DrinkItems, setDrinkItems] = React.useState(initialValues.DrinkItems);
  const [HotItems, setHotItems] = React.useState(initialValues.HotItems);
  const [Cooked, setCooked] = React.useState(initialValues.Cooked);
  const [JobAccepted, setJobAccepted] = React.useState(
    initialValues.JobAccepted
  );
  const [Arrived, setArrived] = React.useState(initialValues.Arrived);
  const [Delivered, setDelivered] = React.useState(initialValues.Delivered);
  const [TimeDelivered, setTimeDelivered] = React.useState(
    initialValues.TimeDelivered
  );
  const [JobAcceptedTime, setJobAcceptedTime] = React.useState(
    initialValues.JobAcceptedTime
  );
  const [Notes, setNotes] = React.useState(initialValues.Notes);
  const [HotOrderPrep, setHotOrderPrep] = React.useState(
    initialValues.HotOrderPrep
  );
  const [TotalNoVAT, setTotalNoVAT] = React.useState(initialValues.TotalNoVAT);
  const [KitchenMenuId, setKitchenMenuId] = React.useState(
    initialValues.KitchenMenuId
  );
  const [ChefName, setChefName] = React.useState(initialValues.ChefName);
  const [Driver, setDriver] = React.useState(initialValues.Driver);
  const [DeliveryCharge, setDeliveryCharge] = React.useState(
    initialValues.DeliveryCharge
  );
  const [JourneyTime, setJourneyTime] = React.useState(
    initialValues.JourneyTime
  );
  const [FullDeliveryTime, setFullDeliveryTime] = React.useState(
    initialValues.FullDeliveryTime
  );
  const [BackAtBranch, setBackAtBranch] = React.useState(
    initialValues.BackAtBranch
  );
  const [Complete, setComplete] = React.useState(initialValues.Complete);
  const [Lat, setLat] = React.useState(initialValues.Lat);
  const [Long, setLong] = React.useState(initialValues.Long);
  const [CustLat, setCustLat] = React.useState(initialValues.CustLat);
  const [CustLong, setCustLong] = React.useState(initialValues.CustLong);
  const [Paid, setPaid] = React.useState(initialValues.Paid);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCreatedTime(initialValues.CreatedTime);
    setCreatedDate(initialValues.CreatedDate);
    setCollection(initialValues.Collection);
    setName(initialValues.Name);
    setAddress(initialValues.Address);
    setPostcode(initialValues.Postcode);
    setTelephone(initialValues.Telephone);
    setEmail(initialValues.Email);
    setDistance(initialValues.Distance);
    setSecurityID(initialValues.SecurityID);
    setTotal(initialValues.Total);
    setDrinkItems(initialValues.DrinkItems);
    setCurrentDrinkItemsValue("");
    setHotItems(initialValues.HotItems);
    setCurrentHotItemsValue("");
    setCooked(initialValues.Cooked);
    setJobAccepted(initialValues.JobAccepted);
    setArrived(initialValues.Arrived);
    setDelivered(initialValues.Delivered);
    setTimeDelivered(initialValues.TimeDelivered);
    setJobAcceptedTime(initialValues.JobAcceptedTime);
    setNotes(initialValues.Notes);
    setHotOrderPrep(initialValues.HotOrderPrep);
    setTotalNoVAT(initialValues.TotalNoVAT);
    setKitchenMenuId(initialValues.KitchenMenuId);
    setCurrentKitchenMenuIdValue("");
    setChefName(initialValues.ChefName);
    setDriver(initialValues.Driver);
    setDeliveryCharge(initialValues.DeliveryCharge);
    setJourneyTime(initialValues.JourneyTime);
    setFullDeliveryTime(initialValues.FullDeliveryTime);
    setBackAtBranch(initialValues.BackAtBranch);
    setComplete(initialValues.Complete);
    setLat(initialValues.Lat);
    setCurrentLatValue("");
    setLong(initialValues.Long);
    setCurrentLongValue("");
    setCustLat(initialValues.CustLat);
    setCustLong(initialValues.CustLong);
    setPaid(initialValues.Paid);
    setErrors({});
  };
  const [currentDrinkItemsValue, setCurrentDrinkItemsValue] =
    React.useState("");
  const DrinkItemsRef = React.createRef();
  const [currentHotItemsValue, setCurrentHotItemsValue] = React.useState("");
  const HotItemsRef = React.createRef();
  const [currentKitchenMenuIdValue, setCurrentKitchenMenuIdValue] =
    React.useState("");
  const KitchenMenuIdRef = React.createRef();
  const [currentLatValue, setCurrentLatValue] = React.useState("");
  const LatRef = React.createRef();
  const [currentLongValue, setCurrentLongValue] = React.useState("");
  const LongRef = React.createRef();
  const validations = {
    CreatedTime: [],
    CreatedDate: [],
    Collection: [],
    Name: [],
    Address: [],
    Postcode: [],
    Telephone: [],
    Email: [],
    Distance: [],
    SecurityID: [],
    Total: [],
    DrinkItems: [],
    HotItems: [],
    Cooked: [],
    JobAccepted: [],
    Arrived: [],
    Delivered: [],
    TimeDelivered: [],
    JobAcceptedTime: [],
    Notes: [],
    HotOrderPrep: [],
    TotalNoVAT: [],
    KitchenMenuId: [],
    ChefName: [],
    Driver: [],
    DeliveryCharge: [],
    JourneyTime: [],
    FullDeliveryTime: [],
    BackAtBranch: [],
    Complete: [],
    Lat: [],
    Long: [],
    CustLat: [],
    CustLong: [],
    Paid: [],
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
          CreatedTime,
          CreatedDate,
          Collection,
          Name,
          Address,
          Postcode,
          Telephone,
          Email,
          Distance,
          SecurityID,
          Total,
          DrinkItems,
          HotItems,
          Cooked,
          JobAccepted,
          Arrived,
          Delivered,
          TimeDelivered,
          JobAcceptedTime,
          Notes,
          HotOrderPrep,
          TotalNoVAT,
          KitchenMenuId,
          ChefName,
          Driver,
          DeliveryCharge,
          JourneyTime,
          FullDeliveryTime,
          BackAtBranch,
          Complete,
          Lat,
          Long,
          CustLat,
          CustLong,
          Paid,
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
          await DataStore.save(new Orders(modelFields));
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
      {...getOverrideProps(overrides, "OrdersCreateForm")}
      {...rest}
    >
      <TextField
        label="Created time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={CreatedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime: value,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.CreatedTime ?? value;
          }
          if (errors.CreatedTime?.hasError) {
            runValidationTasks("CreatedTime", value);
          }
          setCreatedTime(value);
        }}
        onBlur={() => runValidationTasks("CreatedTime", CreatedTime)}
        errorMessage={errors.CreatedTime?.errorMessage}
        hasError={errors.CreatedTime?.hasError}
        {...getOverrideProps(overrides, "CreatedTime")}
      ></TextField>
      <TextField
        label="Created date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={CreatedDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate: value,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.CreatedDate ?? value;
          }
          if (errors.CreatedDate?.hasError) {
            runValidationTasks("CreatedDate", value);
          }
          setCreatedDate(value);
        }}
        onBlur={() => runValidationTasks("CreatedDate", CreatedDate)}
        errorMessage={errors.CreatedDate?.errorMessage}
        hasError={errors.CreatedDate?.hasError}
        {...getOverrideProps(overrides, "CreatedDate")}
      ></TextField>
      <SwitchField
        label="Collection"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Collection}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection: value,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.Collection ?? value;
          }
          if (errors.Collection?.hasError) {
            runValidationTasks("Collection", value);
          }
          setCollection(value);
        }}
        onBlur={() => runValidationTasks("Collection", Collection)}
        errorMessage={errors.Collection?.errorMessage}
        hasError={errors.Collection?.hasError}
        {...getOverrideProps(overrides, "Collection")}
      ></SwitchField>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name: value,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address: value,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode: value,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
      <TextField
        label="Telephone"
        isRequired={false}
        isReadOnly={false}
        value={Telephone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone: value,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email: value,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance: value,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
      <TextField
        label="Security id"
        isRequired={false}
        isReadOnly={false}
        value={SecurityID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID: value,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.SecurityID ?? value;
          }
          if (errors.SecurityID?.hasError) {
            runValidationTasks("SecurityID", value);
          }
          setSecurityID(value);
        }}
        onBlur={() => runValidationTasks("SecurityID", SecurityID)}
        errorMessage={errors.SecurityID?.errorMessage}
        hasError={errors.SecurityID?.hasError}
        {...getOverrideProps(overrides, "SecurityID")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={Total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total: value,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems: values,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            values = result?.DrinkItems ?? values;
          }
          setDrinkItems(values);
          setCurrentDrinkItemsValue("");
        }}
        currentFieldValue={currentDrinkItemsValue}
        label={"Drink items"}
        items={DrinkItems}
        hasError={errors?.DrinkItems?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("DrinkItems", currentDrinkItemsValue)
        }
        errorMessage={errors?.DrinkItems?.errorMessage}
        setFieldValue={setCurrentDrinkItemsValue}
        inputFieldRef={DrinkItemsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Drink items"
          isRequired={false}
          isReadOnly={false}
          value={currentDrinkItemsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.DrinkItems?.hasError) {
              runValidationTasks("DrinkItems", value);
            }
            setCurrentDrinkItemsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("DrinkItems", currentDrinkItemsValue)
          }
          errorMessage={errors.DrinkItems?.errorMessage}
          hasError={errors.DrinkItems?.hasError}
          ref={DrinkItemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "DrinkItems")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems: values,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            values = result?.HotItems ?? values;
          }
          setHotItems(values);
          setCurrentHotItemsValue("");
        }}
        currentFieldValue={currentHotItemsValue}
        label={"Hot items"}
        items={HotItems}
        hasError={errors?.HotItems?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("HotItems", currentHotItemsValue)
        }
        errorMessage={errors?.HotItems?.errorMessage}
        setFieldValue={setCurrentHotItemsValue}
        inputFieldRef={HotItemsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Hot items"
          isRequired={false}
          isReadOnly={false}
          value={currentHotItemsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.HotItems?.hasError) {
              runValidationTasks("HotItems", value);
            }
            setCurrentHotItemsValue(value);
          }}
          onBlur={() => runValidationTasks("HotItems", currentHotItemsValue)}
          errorMessage={errors.HotItems?.errorMessage}
          hasError={errors.HotItems?.hasError}
          ref={HotItemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "HotItems")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Cooked"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Cooked}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked: value,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.Cooked ?? value;
          }
          if (errors.Cooked?.hasError) {
            runValidationTasks("Cooked", value);
          }
          setCooked(value);
        }}
        onBlur={() => runValidationTasks("Cooked", Cooked)}
        errorMessage={errors.Cooked?.errorMessage}
        hasError={errors.Cooked?.hasError}
        {...getOverrideProps(overrides, "Cooked")}
      ></SwitchField>
      <SwitchField
        label="Job accepted"
        defaultChecked={false}
        isDisabled={false}
        isChecked={JobAccepted}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted: value,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.JobAccepted ?? value;
          }
          if (errors.JobAccepted?.hasError) {
            runValidationTasks("JobAccepted", value);
          }
          setJobAccepted(value);
        }}
        onBlur={() => runValidationTasks("JobAccepted", JobAccepted)}
        errorMessage={errors.JobAccepted?.errorMessage}
        hasError={errors.JobAccepted?.hasError}
        {...getOverrideProps(overrides, "JobAccepted")}
      ></SwitchField>
      <SwitchField
        label="Arrived"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Arrived}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived: value,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.Arrived ?? value;
          }
          if (errors.Arrived?.hasError) {
            runValidationTasks("Arrived", value);
          }
          setArrived(value);
        }}
        onBlur={() => runValidationTasks("Arrived", Arrived)}
        errorMessage={errors.Arrived?.errorMessage}
        hasError={errors.Arrived?.hasError}
        {...getOverrideProps(overrides, "Arrived")}
      ></SwitchField>
      <SwitchField
        label="Delivered"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Delivered}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered: value,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
        label="Time delivered"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={TimeDelivered}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered: value,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
      <TextField
        label="Job accepted time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={JobAcceptedTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime: value,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.JobAcceptedTime ?? value;
          }
          if (errors.JobAcceptedTime?.hasError) {
            runValidationTasks("JobAcceptedTime", value);
          }
          setJobAcceptedTime(value);
        }}
        onBlur={() => runValidationTasks("JobAcceptedTime", JobAcceptedTime)}
        errorMessage={errors.JobAcceptedTime?.errorMessage}
        hasError={errors.JobAcceptedTime?.hasError}
        {...getOverrideProps(overrides, "JobAcceptedTime")}
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
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes: value,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
        label="Hot order prep"
        isRequired={false}
        isReadOnly={false}
        value={HotOrderPrep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep: value,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.HotOrderPrep ?? value;
          }
          if (errors.HotOrderPrep?.hasError) {
            runValidationTasks("HotOrderPrep", value);
          }
          setHotOrderPrep(value);
        }}
        onBlur={() => runValidationTasks("HotOrderPrep", HotOrderPrep)}
        errorMessage={errors.HotOrderPrep?.errorMessage}
        hasError={errors.HotOrderPrep?.hasError}
        {...getOverrideProps(overrides, "HotOrderPrep")}
      ></TextField>
      <TextField
        label="Total no vat"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={TotalNoVAT}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT: value,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.TotalNoVAT ?? value;
          }
          if (errors.TotalNoVAT?.hasError) {
            runValidationTasks("TotalNoVAT", value);
          }
          setTotalNoVAT(value);
        }}
        onBlur={() => runValidationTasks("TotalNoVAT", TotalNoVAT)}
        errorMessage={errors.TotalNoVAT?.errorMessage}
        hasError={errors.TotalNoVAT?.hasError}
        {...getOverrideProps(overrides, "TotalNoVAT")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId: values,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            values = result?.KitchenMenuId ?? values;
          }
          setKitchenMenuId(values);
          setCurrentKitchenMenuIdValue("");
        }}
        currentFieldValue={currentKitchenMenuIdValue}
        label={"Kitchen menu id"}
        items={KitchenMenuId}
        hasError={errors?.KitchenMenuId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("KitchenMenuId", currentKitchenMenuIdValue)
        }
        errorMessage={errors?.KitchenMenuId?.errorMessage}
        setFieldValue={setCurrentKitchenMenuIdValue}
        inputFieldRef={KitchenMenuIdRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Kitchen menu id"
          isRequired={false}
          isReadOnly={false}
          value={currentKitchenMenuIdValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.KitchenMenuId?.hasError) {
              runValidationTasks("KitchenMenuId", value);
            }
            setCurrentKitchenMenuIdValue(value);
          }}
          onBlur={() =>
            runValidationTasks("KitchenMenuId", currentKitchenMenuIdValue)
          }
          errorMessage={errors.KitchenMenuId?.errorMessage}
          hasError={errors.KitchenMenuId?.hasError}
          ref={KitchenMenuIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "KitchenMenuId")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Chef name"
        isRequired={false}
        isReadOnly={false}
        value={ChefName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName: value,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.ChefName ?? value;
          }
          if (errors.ChefName?.hasError) {
            runValidationTasks("ChefName", value);
          }
          setChefName(value);
        }}
        onBlur={() => runValidationTasks("ChefName", ChefName)}
        errorMessage={errors.ChefName?.errorMessage}
        hasError={errors.ChefName?.hasError}
        {...getOverrideProps(overrides, "ChefName")}
      ></TextField>
      <TextField
        label="Driver"
        isRequired={false}
        isReadOnly={false}
        value={Driver}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver: value,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.Driver ?? value;
          }
          if (errors.Driver?.hasError) {
            runValidationTasks("Driver", value);
          }
          setDriver(value);
        }}
        onBlur={() => runValidationTasks("Driver", Driver)}
        errorMessage={errors.Driver?.errorMessage}
        hasError={errors.Driver?.hasError}
        {...getOverrideProps(overrides, "Driver")}
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
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge: value,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
        label="Journey time"
        isRequired={false}
        isReadOnly={false}
        value={JourneyTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime: value,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.JourneyTime ?? value;
          }
          if (errors.JourneyTime?.hasError) {
            runValidationTasks("JourneyTime", value);
          }
          setJourneyTime(value);
        }}
        onBlur={() => runValidationTasks("JourneyTime", JourneyTime)}
        errorMessage={errors.JourneyTime?.errorMessage}
        hasError={errors.JourneyTime?.hasError}
        {...getOverrideProps(overrides, "JourneyTime")}
      ></TextField>
      <TextField
        label="Full delivery time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={FullDeliveryTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime: value,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.FullDeliveryTime ?? value;
          }
          if (errors.FullDeliveryTime?.hasError) {
            runValidationTasks("FullDeliveryTime", value);
          }
          setFullDeliveryTime(value);
        }}
        onBlur={() => runValidationTasks("FullDeliveryTime", FullDeliveryTime)}
        errorMessage={errors.FullDeliveryTime?.errorMessage}
        hasError={errors.FullDeliveryTime?.hasError}
        {...getOverrideProps(overrides, "FullDeliveryTime")}
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
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch: value,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
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
      <SwitchField
        label="Complete"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Complete}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete: value,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.Complete ?? value;
          }
          if (errors.Complete?.hasError) {
            runValidationTasks("Complete", value);
          }
          setComplete(value);
        }}
        onBlur={() => runValidationTasks("Complete", Complete)}
        errorMessage={errors.Complete?.errorMessage}
        hasError={errors.Complete?.hasError}
        {...getOverrideProps(overrides, "Complete")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat: values,
              Long,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            values = result?.Lat ?? values;
          }
          setLat(values);
          setCurrentLatValue("");
        }}
        currentFieldValue={currentLatValue}
        label={"Lat"}
        items={Lat}
        hasError={errors?.Lat?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Lat", currentLatValue)
        }
        errorMessage={errors?.Lat?.errorMessage}
        setFieldValue={setCurrentLatValue}
        inputFieldRef={LatRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Lat"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentLatValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.Lat?.hasError) {
              runValidationTasks("Lat", value);
            }
            setCurrentLatValue(value);
          }}
          onBlur={() => runValidationTasks("Lat", currentLatValue)}
          errorMessage={errors.Lat?.errorMessage}
          hasError={errors.Lat?.hasError}
          ref={LatRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Lat")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long: values,
              CustLat,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            values = result?.Long ?? values;
          }
          setLong(values);
          setCurrentLongValue("");
        }}
        currentFieldValue={currentLongValue}
        label={"Long"}
        items={Long}
        hasError={errors?.Long?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Long", currentLongValue)
        }
        errorMessage={errors?.Long?.errorMessage}
        setFieldValue={setCurrentLongValue}
        inputFieldRef={LongRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Long"
          isRequired={false}
          isReadOnly={false}
          type="number"
          step="any"
          value={currentLongValue}
          onChange={(e) => {
            let value = isNaN(parseFloat(e.target.value))
              ? e.target.value
              : parseFloat(e.target.value);
            if (errors.Long?.hasError) {
              runValidationTasks("Long", value);
            }
            setCurrentLongValue(value);
          }}
          onBlur={() => runValidationTasks("Long", currentLongValue)}
          errorMessage={errors.Long?.errorMessage}
          hasError={errors.Long?.hasError}
          ref={LongRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Long")}
        ></TextField>
      </ArrayField>
      <TextField
        label="Cust lat"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CustLat}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat: value,
              CustLong,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.CustLat ?? value;
          }
          if (errors.CustLat?.hasError) {
            runValidationTasks("CustLat", value);
          }
          setCustLat(value);
        }}
        onBlur={() => runValidationTasks("CustLat", CustLat)}
        errorMessage={errors.CustLat?.errorMessage}
        hasError={errors.CustLat?.hasError}
        {...getOverrideProps(overrides, "CustLat")}
      ></TextField>
      <TextField
        label="Cust long"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={CustLong}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong: value,
              Paid,
            };
            const result = onChange(modelFields);
            value = result?.CustLong ?? value;
          }
          if (errors.CustLong?.hasError) {
            runValidationTasks("CustLong", value);
          }
          setCustLong(value);
        }}
        onBlur={() => runValidationTasks("CustLong", CustLong)}
        errorMessage={errors.CustLong?.errorMessage}
        hasError={errors.CustLong?.hasError}
        {...getOverrideProps(overrides, "CustLong")}
      ></TextField>
      <SwitchField
        label="Paid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={Paid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              CreatedTime,
              CreatedDate,
              Collection,
              Name,
              Address,
              Postcode,
              Telephone,
              Email,
              Distance,
              SecurityID,
              Total,
              DrinkItems,
              HotItems,
              Cooked,
              JobAccepted,
              Arrived,
              Delivered,
              TimeDelivered,
              JobAcceptedTime,
              Notes,
              HotOrderPrep,
              TotalNoVAT,
              KitchenMenuId,
              ChefName,
              Driver,
              DeliveryCharge,
              JourneyTime,
              FullDeliveryTime,
              BackAtBranch,
              Complete,
              Lat,
              Long,
              CustLat,
              CustLong,
              Paid: value,
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
      ></SwitchField>
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
