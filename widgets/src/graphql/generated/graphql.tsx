import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Answers = {
  fieldId: Scalars['String'];
  value: Scalars['String'];
};

export type CustomerModel = {
  __typename?: 'CustomerModel';
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastname?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Extra = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type ExtraModel = {
  __typename?: 'ExtraModel';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type FieldModel = {
  __typename?: 'FieldModel';
  description?: Maybe<Scalars['String']>;
  extra: Array<ExtraModel>;
  hasProcessors: Scalars['Boolean'];
  id: Scalars['ID'];
  isRequired: Scalars['Boolean'];
  label: Scalars['String'];
  placeholder: Scalars['String'];
  type: Scalars['String'];
};

export type LocationModel = {
  __typename?: 'LocationModel';
  address: Scalars['String'];
  country: Scalars['String'];
  id: Scalars['ID'];
  latitude: Scalars['String'];
  longitude: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  announceTicket: TicketModel;
  leaveTicket: TicketModel;
  takeTicket: TicketModel;
};


export type MutationAnnounceTicketArgs = {
  id: Scalars['String'];
};


export type MutationLeaveTicketArgs = {
  id: Scalars['String'];
};


export type MutationTakeTicketArgs = {
  input: TicketInput;
};

export type Query = {
  __typename?: 'Query';
  findLocations: Array<LocationModel>;
  getLocationServices: Array<ServiceModel>;
  getServiceFields: Array<FieldModel>;
  getTicket: TicketModel;
};


export type QueryFindLocationsArgs = {
  country?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  longitude?: InputMaybe<Scalars['String']>;
  offset?: InputMaybe<Scalars['Int']>;
  searchQuery?: InputMaybe<Scalars['ID']>;
};


export type QueryGetLocationServicesArgs = {
  locationId: Scalars['ID'];
};


export type QueryGetServiceFieldsArgs = {
  serviceId: Scalars['ID'];
};


export type QueryGetTicketArgs = {
  id: Scalars['ID'];
};

export type ServiceModel = {
  __typename?: 'ServiceModel';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  locationId: Scalars['ID'];
  name: Scalars['String'];
  ticketsWaiting: Scalars['Int'];
};

export type TicketInput = {
  answers?: InputMaybe<Array<Answers>>;
  extra?: InputMaybe<Array<Extra>>;
  locationId: Scalars['ID'];
  serviceId: Scalars['ID'];
};

export type TicketModel = {
  __typename?: 'TicketModel';
  beforeYours: Array<Scalars['String']>;
  calledToDesk?: Maybe<Scalars['String']>;
  customer: CustomerModel;
  customerId: Scalars['ID'];
  displayCode: Scalars['String'];
  id: Scalars['ID'];
  location: LocationModel;
  locationId: Scalars['ID'];
  service: ServiceModel;
  serviceId: Scalars['ID'];
  status: Scalars['String'];
};

export type AnnounceTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
}>;


export type AnnounceTicketMutation = { __typename?: 'Mutation', announceTicket: { __typename?: 'TicketModel', id: string, status: string, displayCode: string, customerId: string, beforeYours: Array<string>, calledToDesk?: string | null } };

export type LeaveTicketMutationVariables = Exact<{
  ticketId: Scalars['String'];
}>;


export type LeaveTicketMutation = { __typename?: 'Mutation', leaveTicket: { __typename?: 'TicketModel', id: string, status: string, displayCode: string, customerId: string, beforeYours: Array<string>, calledToDesk?: string | null } };

export type TakeTicketMutationVariables = Exact<{
  input: TicketInput;
}>;


export type TakeTicketMutation = { __typename?: 'Mutation', takeTicket: { __typename?: 'TicketModel', id: string, status: string, displayCode: string, customerId: string, beforeYours: Array<string>, calledToDesk?: string | null } };

export type GetLocationServicesQueryVariables = Exact<{
  locationId: Scalars['ID'];
}>;


export type GetLocationServicesQuery = { __typename?: 'Query', getLocationServices: Array<{ __typename?: 'ServiceModel', id: string, name: string, description?: string | null, locationId: string, ticketsWaiting: number }> };

export type LocationsQueryVariables = Exact<{
  searchQuery?: InputMaybe<Scalars['ID']>;
  country?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['String']>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type LocationsQuery = { __typename?: 'Query', findLocations: Array<{ __typename?: 'LocationModel', id: string, name: string, address: string, country: string, longitude: string, latitude: string }> };

export type GetServiceFieldsQueryVariables = Exact<{
  serviceId: Scalars['ID'];
}>;


export type GetServiceFieldsQuery = { __typename?: 'Query', getServiceFields: Array<{ __typename?: 'FieldModel', id: string, label: string, description?: string | null, type: string, isRequired: boolean, hasProcessors: boolean, extra: Array<{ __typename?: 'ExtraModel', key: string, value: string }> }> };

export type GetTicketQueryVariables = Exact<{
  getTicketId: Scalars['ID'];
}>;


export type GetTicketQuery = { __typename?: 'Query', getTicket: { __typename?: 'TicketModel', id: string, status: string, displayCode: string, serviceId: string, beforeYours: Array<string>, calledToDesk?: string | null, customerId: string, service: { __typename?: 'ServiceModel', id: string, name: string, description?: string | null }, location: { __typename?: 'LocationModel', name: string, address: string, longitude: string, latitude: string } } };


export const AnnounceTicketDocument = gql`
    mutation AnnounceTicket($ticketId: String!) {
  announceTicket(id: $ticketId) {
    id
    status
    displayCode
    customerId
    beforeYours
    calledToDesk
  }
}
    `;
export type AnnounceTicketMutationFn = Apollo.MutationFunction<AnnounceTicketMutation, AnnounceTicketMutationVariables>;

/**
 * __useAnnounceTicketMutation__
 *
 * To run a mutation, you first call `useAnnounceTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAnnounceTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [announceTicketMutation, { data, loading, error }] = useAnnounceTicketMutation({
 *   variables: {
 *      ticketId: // value for 'ticketId'
 *   },
 * });
 */
export function useAnnounceTicketMutation(baseOptions?: Apollo.MutationHookOptions<AnnounceTicketMutation, AnnounceTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AnnounceTicketMutation, AnnounceTicketMutationVariables>(AnnounceTicketDocument, options);
      }
export type AnnounceTicketMutationHookResult = ReturnType<typeof useAnnounceTicketMutation>;
export type AnnounceTicketMutationResult = Apollo.MutationResult<AnnounceTicketMutation>;
export type AnnounceTicketMutationOptions = Apollo.BaseMutationOptions<AnnounceTicketMutation, AnnounceTicketMutationVariables>;
export const LeaveTicketDocument = gql`
    mutation LeaveTicket($ticketId: String!) {
  leaveTicket(id: $ticketId) {
    id
    status
    displayCode
    customerId
    beforeYours
    calledToDesk
  }
}
    `;
export type LeaveTicketMutationFn = Apollo.MutationFunction<LeaveTicketMutation, LeaveTicketMutationVariables>;

/**
 * __useLeaveTicketMutation__
 *
 * To run a mutation, you first call `useLeaveTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveTicketMutation, { data, loading, error }] = useLeaveTicketMutation({
 *   variables: {
 *      ticketId: // value for 'ticketId'
 *   },
 * });
 */
export function useLeaveTicketMutation(baseOptions?: Apollo.MutationHookOptions<LeaveTicketMutation, LeaveTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveTicketMutation, LeaveTicketMutationVariables>(LeaveTicketDocument, options);
      }
export type LeaveTicketMutationHookResult = ReturnType<typeof useLeaveTicketMutation>;
export type LeaveTicketMutationResult = Apollo.MutationResult<LeaveTicketMutation>;
export type LeaveTicketMutationOptions = Apollo.BaseMutationOptions<LeaveTicketMutation, LeaveTicketMutationVariables>;
export const TakeTicketDocument = gql`
    mutation TakeTicket($input: TicketInput!) {
  takeTicket(input: $input) {
    id
    status
    displayCode
    customerId
    beforeYours
    calledToDesk
  }
}
    `;
export type TakeTicketMutationFn = Apollo.MutationFunction<TakeTicketMutation, TakeTicketMutationVariables>;

/**
 * __useTakeTicketMutation__
 *
 * To run a mutation, you first call `useTakeTicketMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTakeTicketMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [takeTicketMutation, { data, loading, error }] = useTakeTicketMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTakeTicketMutation(baseOptions?: Apollo.MutationHookOptions<TakeTicketMutation, TakeTicketMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<TakeTicketMutation, TakeTicketMutationVariables>(TakeTicketDocument, options);
      }
export type TakeTicketMutationHookResult = ReturnType<typeof useTakeTicketMutation>;
export type TakeTicketMutationResult = Apollo.MutationResult<TakeTicketMutation>;
export type TakeTicketMutationOptions = Apollo.BaseMutationOptions<TakeTicketMutation, TakeTicketMutationVariables>;
export const GetLocationServicesDocument = gql`
    query GetLocationServices($locationId: ID!) {
  getLocationServices(locationId: $locationId) {
    id
    name
    description
    locationId
    ticketsWaiting
  }
}
    `;

/**
 * __useGetLocationServicesQuery__
 *
 * To run a query within a React component, call `useGetLocationServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLocationServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLocationServicesQuery({
 *   variables: {
 *      locationId: // value for 'locationId'
 *   },
 * });
 */
export function useGetLocationServicesQuery(baseOptions: Apollo.QueryHookOptions<GetLocationServicesQuery, GetLocationServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLocationServicesQuery, GetLocationServicesQueryVariables>(GetLocationServicesDocument, options);
      }
export function useGetLocationServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLocationServicesQuery, GetLocationServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLocationServicesQuery, GetLocationServicesQueryVariables>(GetLocationServicesDocument, options);
        }
export type GetLocationServicesQueryHookResult = ReturnType<typeof useGetLocationServicesQuery>;
export type GetLocationServicesLazyQueryHookResult = ReturnType<typeof useGetLocationServicesLazyQuery>;
export type GetLocationServicesQueryResult = Apollo.QueryResult<GetLocationServicesQuery, GetLocationServicesQueryVariables>;
export const LocationsDocument = gql`
    query Locations($searchQuery: ID, $country: String, $latitude: String, $longitude: String, $limit: Int, $offset: Int) {
  findLocations(
    searchQuery: $searchQuery
    country: $country
    latitude: $latitude
    longitude: $longitude
    limit: $limit
    offset: $offset
  ) {
    id
    name
    address
    country
    longitude
    latitude
  }
}
    `;

/**
 * __useLocationsQuery__
 *
 * To run a query within a React component, call `useLocationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLocationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLocationsQuery({
 *   variables: {
 *      searchQuery: // value for 'searchQuery'
 *      country: // value for 'country'
 *      latitude: // value for 'latitude'
 *      longitude: // value for 'longitude'
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useLocationsQuery(baseOptions?: Apollo.QueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
      }
export function useLocationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LocationsQuery, LocationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LocationsQuery, LocationsQueryVariables>(LocationsDocument, options);
        }
export type LocationsQueryHookResult = ReturnType<typeof useLocationsQuery>;
export type LocationsLazyQueryHookResult = ReturnType<typeof useLocationsLazyQuery>;
export type LocationsQueryResult = Apollo.QueryResult<LocationsQuery, LocationsQueryVariables>;
export const GetServiceFieldsDocument = gql`
    query GetServiceFields($serviceId: ID!) {
  getServiceFields(serviceId: $serviceId) {
    id
    label
    description
    type
    isRequired
    hasProcessors
    extra {
      key
      value
    }
  }
}
    `;

/**
 * __useGetServiceFieldsQuery__
 *
 * To run a query within a React component, call `useGetServiceFieldsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetServiceFieldsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetServiceFieldsQuery({
 *   variables: {
 *      serviceId: // value for 'serviceId'
 *   },
 * });
 */
export function useGetServiceFieldsQuery(baseOptions: Apollo.QueryHookOptions<GetServiceFieldsQuery, GetServiceFieldsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetServiceFieldsQuery, GetServiceFieldsQueryVariables>(GetServiceFieldsDocument, options);
      }
export function useGetServiceFieldsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetServiceFieldsQuery, GetServiceFieldsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetServiceFieldsQuery, GetServiceFieldsQueryVariables>(GetServiceFieldsDocument, options);
        }
export type GetServiceFieldsQueryHookResult = ReturnType<typeof useGetServiceFieldsQuery>;
export type GetServiceFieldsLazyQueryHookResult = ReturnType<typeof useGetServiceFieldsLazyQuery>;
export type GetServiceFieldsQueryResult = Apollo.QueryResult<GetServiceFieldsQuery, GetServiceFieldsQueryVariables>;
export const GetTicketDocument = gql`
    query GetTicket($getTicketId: ID!) {
  getTicket(id: $getTicketId) {
    id
    status
    displayCode
    serviceId
    service {
      id
      name
      description
    }
    location {
      name
      address
      longitude
      latitude
    }
    beforeYours
    calledToDesk
    customerId
  }
}
    `;

/**
 * __useGetTicketQuery__
 *
 * To run a query within a React component, call `useGetTicketQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTicketQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTicketQuery({
 *   variables: {
 *      getTicketId: // value for 'getTicketId'
 *   },
 * });
 */
export function useGetTicketQuery(baseOptions: Apollo.QueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
      }
export function useGetTicketLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTicketQuery, GetTicketQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTicketQuery, GetTicketQueryVariables>(GetTicketDocument, options);
        }
export type GetTicketQueryHookResult = ReturnType<typeof useGetTicketQuery>;
export type GetTicketLazyQueryHookResult = ReturnType<typeof useGetTicketLazyQuery>;
export type GetTicketQueryResult = Apollo.QueryResult<GetTicketQuery, GetTicketQueryVariables>;