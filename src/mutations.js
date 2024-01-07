/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMenuItems = /* GraphQL */ `
  mutation CreateMenuItems(
    $input: CreateMenuItemsInput!
    $condition: ModelMenuItemsConditionInput
  ) {
    createMenuItems(input: $input, condition: $condition) {
      id
      Name
      PriceDelivery
      StockLevel
      Ingredients
      PreVAT
      ProfitMargin
      PriceCollection
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMenuItems = /* GraphQL */ `
  mutation UpdateMenuItems(
    $input: UpdateMenuItemsInput!
    $condition: ModelMenuItemsConditionInput
  ) {
    updateMenuItems(input: $input, condition: $condition) {
      id
      Name
      PriceDelivery
      StockLevel
      Ingredients
      PreVAT
      ProfitMargin
      PriceCollection
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMenuItems = /* GraphQL */ `
  mutation DeleteMenuItems(
    $input: DeleteMenuItemsInput!
    $condition: ModelMenuItemsConditionInput
  ) {
    deleteMenuItems(input: $input, condition: $condition) {
      id
      Name
      PriceDelivery
      StockLevel
      Ingredients
      PreVAT
      ProfitMargin
      PriceCollection
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDeliveries = /* GraphQL */ `
  mutation CreateDeliveries(
    $input: CreateDeliveriesInput!
    $condition: ModelDeliveriesConditionInput
  ) {
    createDeliveries(input: $input, condition: $condition) {
      id
      Name
      Address
      Postcode
      Order
      Total
      DeliveryCharge
      TimeCreated
      Date
      TimeDelivered
      Delivered
      Distance
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDeliveries = /* GraphQL */ `
  mutation UpdateDeliveries(
    $input: UpdateDeliveriesInput!
    $condition: ModelDeliveriesConditionInput
  ) {
    updateDeliveries(input: $input, condition: $condition) {
      id
      Name
      Address
      Postcode
      Order
      Total
      DeliveryCharge
      TimeCreated
      Date
      TimeDelivered
      Delivered
      Distance
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDeliveries = /* GraphQL */ `
  mutation DeleteDeliveries(
    $input: DeleteDeliveriesInput!
    $condition: ModelDeliveriesConditionInput
  ) {
    deleteDeliveries(input: $input, condition: $condition) {
      id
      Name
      Address
      Postcode
      Order
      Total
      DeliveryCharge
      TimeCreated
      Date
      TimeDelivered
      Delivered
      Distance
      createdAt
      updatedAt
      __typename
    }
  }
`;
