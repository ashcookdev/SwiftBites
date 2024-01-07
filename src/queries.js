/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMenuItems = /* GraphQL */ `
  query GetMenuItems($id: ID!) {
    getMenuItems(id: $id) {
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
export const listMenuItems = /* GraphQL */ `
  query ListMenuItems(
    $filter: ModelMenuItemsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenuItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDeliveries = /* GraphQL */ `
  query GetDeliveries($id: ID!) {
    getDeliveries(id: $id) {
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
export const listDeliveries = /* GraphQL */ `
  query ListDeliveries(
    $filter: ModelDeliveriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
