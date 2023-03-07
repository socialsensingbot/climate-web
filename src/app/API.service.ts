/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateUserPreferences: OnCreateUserPreferencesSubscription;
  onUpdateUserPreferences: OnUpdateUserPreferencesSubscription;
  onDeleteUserPreferences: OnDeleteUserPreferencesSubscription;
  onCreateUserDashboard: OnCreateUserDashboardSubscription;
  onUpdateUserDashboard: OnUpdateUserDashboardSubscription;
  onDeleteUserDashboard: OnDeleteUserDashboardSubscription;
  onCreateGroupDashboard: OnCreateGroupDashboardSubscription;
  onUpdateGroupDashboard: OnUpdateGroupDashboardSubscription;
  onDeleteGroupDashboard: OnDeleteGroupDashboardSubscription;
  onCreateSavedGraph: OnCreateSavedGraphSubscription;
  onUpdateSavedGraph: OnUpdateSavedGraphSubscription;
  onDeleteSavedGraph: OnDeleteSavedGraphSubscription;
  onCreateTextAutocomplete: OnCreateTextAutocompleteSubscription;
  onUpdateTextAutocomplete: OnUpdateTextAutocompleteSubscription;
  onDeleteTextAutocomplete: OnDeleteTextAutocompleteSubscription;
  onCreateUserSession: OnCreateUserSessionSubscription;
  onUpdateUserSession: OnUpdateUserSessionSubscription;
  onDeleteUserSession: OnDeleteUserSessionSubscription;
  onCreateGroupPreferences: OnCreateGroupPreferencesSubscription;
  onUpdateGroupPreferences: OnUpdateGroupPreferencesSubscription;
  onDeleteGroupPreferences: OnDeleteGroupPreferencesSubscription;
  onCreateGroupTweetIgnore: OnCreateGroupTweetIgnoreSubscription;
  onUpdateGroupTweetIgnore: OnUpdateGroupTweetIgnoreSubscription;
  onDeleteGroupTweetIgnore: OnDeleteGroupTweetIgnoreSubscription;
  onCreateGroupTweetAnnotations: OnCreateGroupTweetAnnotationsSubscription;
  onUpdateGroupTweetAnnotations: OnUpdateGroupTweetAnnotationsSubscription;
  onDeleteGroupTweetAnnotations: OnDeleteGroupTweetAnnotationsSubscription;
  onCreateGroupTwitterUserIgnore: OnCreateGroupTwitterUserIgnoreSubscription;
  onUpdateGroupTwitterUserIgnore: OnUpdateGroupTwitterUserIgnoreSubscription;
  onDeleteGroupTwitterUserIgnore: OnDeleteGroupTwitterUserIgnoreSubscription;
};

export type CreateUserPreferencesInput = {
  id?: string | null;
  owner?: string | null;
  prefs?: string | null;
  _version?: number | null;
};

export type ModelUserPreferencesConditionInput = {
  owner?: ModelStringInput | null;
  prefs?: ModelStringInput | null;
  and?: Array<ModelUserPreferencesConditionInput | null> | null;
  or?: Array<ModelUserPreferencesConditionInput | null> | null;
  not?: ModelUserPreferencesConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UserPreferences = {
  __typename: "UserPreferences";
  id: string;
  owner?: string | null;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateUserPreferencesInput = {
  id: string;
  owner?: string | null;
  prefs?: string | null;
  _version?: number | null;
};

export type DeleteUserPreferencesInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserDashboardInput = {
  id?: string | null;
  owner?: string | null;
  dashboard: string;
  _version?: number | null;
};

export type ModelUserDashboardConditionInput = {
  owner?: ModelStringInput | null;
  dashboard?: ModelStringInput | null;
  and?: Array<ModelUserDashboardConditionInput | null> | null;
  or?: Array<ModelUserDashboardConditionInput | null> | null;
  not?: ModelUserDashboardConditionInput | null;
};

export type UserDashboard = {
  __typename: "UserDashboard";
  id: string;
  owner?: string | null;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateUserDashboardInput = {
  id: string;
  owner?: string | null;
  dashboard?: string | null;
  _version?: number | null;
};

export type DeleteUserDashboardInput = {
  id: string;
  _version?: number | null;
};

export type CreateGroupDashboardInput = {
  id?: string | null;
  group: string;
  dashboard: string;
  _version?: number | null;
};

export type ModelGroupDashboardConditionInput = {
  group?: ModelStringInput | null;
  dashboard?: ModelStringInput | null;
  and?: Array<ModelGroupDashboardConditionInput | null> | null;
  or?: Array<ModelGroupDashboardConditionInput | null> | null;
  not?: ModelGroupDashboardConditionInput | null;
};

export type GroupDashboard = {
  __typename: "GroupDashboard";
  id: string;
  group: string;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupDashboardInput = {
  id: string;
  group?: string | null;
  dashboard?: string | null;
  _version?: number | null;
};

export type DeleteGroupDashboardInput = {
  id: string;
  _version?: number | null;
};

export type CreateSavedGraphInput = {
  id?: string | null;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  _version?: number | null;
};

export type ModelSavedGraphConditionInput = {
  type?: ModelStringInput | null;
  title?: ModelStringInput | null;
  state?: ModelStringInput | null;
  group?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelSavedGraphConditionInput | null> | null;
  or?: Array<ModelSavedGraphConditionInput | null> | null;
  not?: ModelSavedGraphConditionInput | null;
};

export type SavedGraph = {
  __typename: "SavedGraph";
  id: string;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateSavedGraphInput = {
  id: string;
  type?: string | null;
  title?: string | null;
  state?: string | null;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  _version?: number | null;
};

export type DeleteSavedGraphInput = {
  id: string;
  _version?: number | null;
};

export type CreateTextAutocompleteInput = {
  id?: string | null;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  _version?: number | null;
};

export type ModelTextAutocompleteConditionInput = {
  type?: ModelStringInput | null;
  text?: ModelStringInput | null;
  group?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelTextAutocompleteConditionInput | null> | null;
  or?: Array<ModelTextAutocompleteConditionInput | null> | null;
  not?: ModelTextAutocompleteConditionInput | null;
};

export type TextAutocomplete = {
  __typename: "TextAutocomplete";
  id: string;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTextAutocompleteInput = {
  id: string;
  type?: string | null;
  text?: string | null;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  _version?: number | null;
};

export type DeleteTextAutocompleteInput = {
  id: string;
  _version?: number | null;
};

export type CreateUserSessionInput = {
  id?: string | null;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  _version?: number | null;
};

export type ModelUserSessionConditionInput = {
  fingerprint?: ModelStringInput | null;
  client?: ModelStringInput | null;
  open?: ModelBooleanInput | null;
  group?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  ttl?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  sessionId?: ModelStringInput | null;
  and?: Array<ModelUserSessionConditionInput | null> | null;
  or?: Array<ModelUserSessionConditionInput | null> | null;
  not?: ModelUserSessionConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UserSession = {
  __typename: "UserSession";
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateUserSessionInput = {
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open?: boolean | null;
  group?: string | null;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  _version?: number | null;
};

export type DeleteUserSessionInput = {
  id: string;
  _version?: number | null;
};

export type CreateGroupPreferencesInput = {
  id?: string | null;
  group: string;
  prefs?: string | null;
  _version?: number | null;
};

export type ModelGroupPreferencesConditionInput = {
  group?: ModelStringInput | null;
  prefs?: ModelStringInput | null;
  and?: Array<ModelGroupPreferencesConditionInput | null> | null;
  or?: Array<ModelGroupPreferencesConditionInput | null> | null;
  not?: ModelGroupPreferencesConditionInput | null;
};

export type GroupPreferences = {
  __typename: "GroupPreferences";
  id: string;
  group: string;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupPreferencesInput = {
  id: string;
  group?: string | null;
  prefs?: string | null;
  _version?: number | null;
};

export type DeleteGroupPreferencesInput = {
  id: string;
  _version?: number | null;
};

export type CreateGroupTweetIgnoreInput = {
  id?: string | null;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  _version?: number | null;
};

export type ModelGroupTweetIgnoreConditionInput = {
  url?: ModelStringInput | null;
  ignoredBy?: ModelStringInput | null;
  tweetId?: ModelStringInput | null;
  ownerGroups?: ModelStringInput | null;
  scope?: ModelStringInput | null;
  and?: Array<ModelGroupTweetIgnoreConditionInput | null> | null;
  or?: Array<ModelGroupTweetIgnoreConditionInput | null> | null;
  not?: ModelGroupTweetIgnoreConditionInput | null;
};

export type GroupTweetIgnore = {
  __typename: "GroupTweetIgnore";
  id: string;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupTweetIgnoreInput = {
  id: string;
  url?: string | null;
  ignoredBy?: string | null;
  tweetId?: string | null;
  ownerGroups?: Array<string | null> | null;
  scope?: string | null;
  _version?: number | null;
};

export type DeleteGroupTweetIgnoreInput = {
  id: string;
  _version?: number | null;
};

export type CreateGroupTweetAnnotationsInput = {
  id?: string | null;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  _version?: number | null;
};

export type ModelGroupTweetAnnotationsConditionInput = {
  url?: ModelStringInput | null;
  annotatedBy?: ModelStringInput | null;
  tweetId?: ModelStringInput | null;
  ownerGroups?: ModelStringInput | null;
  annotations?: ModelStringInput | null;
  and?: Array<ModelGroupTweetAnnotationsConditionInput | null> | null;
  or?: Array<ModelGroupTweetAnnotationsConditionInput | null> | null;
  not?: ModelGroupTweetAnnotationsConditionInput | null;
};

export type GroupTweetAnnotations = {
  __typename: "GroupTweetAnnotations";
  id: string;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupTweetAnnotationsInput = {
  id: string;
  url?: string | null;
  annotatedBy?: string | null;
  tweetId?: string | null;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  _version?: number | null;
};

export type DeleteGroupTweetAnnotationsInput = {
  id: string;
  _version?: number | null;
};

export type CreateGroupTwitterUserIgnoreInput = {
  id?: string | null;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  _version?: number | null;
};

export type ModelGroupTwitterUserIgnoreConditionInput = {
  twitterScreenName?: ModelStringInput | null;
  ignoredBy?: ModelStringInput | null;
  ownerGroups?: ModelStringInput | null;
  scope?: ModelStringInput | null;
  and?: Array<ModelGroupTwitterUserIgnoreConditionInput | null> | null;
  or?: Array<ModelGroupTwitterUserIgnoreConditionInput | null> | null;
  not?: ModelGroupTwitterUserIgnoreConditionInput | null;
};

export type GroupTwitterUserIgnore = {
  __typename: "GroupTwitterUserIgnore";
  id: string;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupTwitterUserIgnoreInput = {
  id: string;
  twitterScreenName?: string | null;
  ignoredBy?: string | null;
  ownerGroups?: Array<string | null> | null;
  scope?: string | null;
  _version?: number | null;
};

export type DeleteGroupTwitterUserIgnoreInput = {
  id: string;
  _version?: number | null;
};

export type ModelUserPreferencesFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  prefs?: ModelStringInput | null;
  and?: Array<ModelUserPreferencesFilterInput | null> | null;
  or?: Array<ModelUserPreferencesFilterInput | null> | null;
  not?: ModelUserPreferencesFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelUserPreferencesConnection = {
  __typename: "ModelUserPreferencesConnection";
  items: Array<UserPreferences | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserDashboardFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  dashboard?: ModelStringInput | null;
  and?: Array<ModelUserDashboardFilterInput | null> | null;
  or?: Array<ModelUserDashboardFilterInput | null> | null;
  not?: ModelUserDashboardFilterInput | null;
};

export type ModelUserDashboardConnection = {
  __typename: "ModelUserDashboardConnection";
  items: Array<UserDashboard | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelGroupDashboardFilterInput = {
  id?: ModelIDInput | null;
  group?: ModelStringInput | null;
  dashboard?: ModelStringInput | null;
  and?: Array<ModelGroupDashboardFilterInput | null> | null;
  or?: Array<ModelGroupDashboardFilterInput | null> | null;
  not?: ModelGroupDashboardFilterInput | null;
};

export type ModelGroupDashboardConnection = {
  __typename: "ModelGroupDashboardConnection";
  items: Array<GroupDashboard | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSavedGraphFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  title?: ModelStringInput | null;
  state?: ModelStringInput | null;
  group?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelSavedGraphFilterInput | null> | null;
  or?: Array<ModelSavedGraphFilterInput | null> | null;
  not?: ModelSavedGraphFilterInput | null;
};

export type ModelSavedGraphConnection = {
  __typename: "ModelSavedGraphConnection";
  items: Array<SavedGraph | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelTextAutocompleteFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelStringInput | null;
  text?: ModelStringInput | null;
  group?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelTextAutocompleteFilterInput | null> | null;
  or?: Array<ModelTextAutocompleteFilterInput | null> | null;
  not?: ModelTextAutocompleteFilterInput | null;
};

export type ModelTextAutocompleteConnection = {
  __typename: "ModelTextAutocompleteConnection";
  items: Array<TextAutocomplete | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelUserSessionFilterInput = {
  id?: ModelIDInput | null;
  fingerprint?: ModelStringInput | null;
  client?: ModelStringInput | null;
  open?: ModelBooleanInput | null;
  group?: ModelStringInput | null;
  owner?: ModelStringInput | null;
  ttl?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  sessionId?: ModelStringInput | null;
  and?: Array<ModelUserSessionFilterInput | null> | null;
  or?: Array<ModelUserSessionFilterInput | null> | null;
  not?: ModelUserSessionFilterInput | null;
};

export type ModelUserSessionConnection = {
  __typename: "ModelUserSessionConnection";
  items: Array<UserSession | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelGroupPreferencesFilterInput = {
  id?: ModelIDInput | null;
  group?: ModelStringInput | null;
  prefs?: ModelStringInput | null;
  and?: Array<ModelGroupPreferencesFilterInput | null> | null;
  or?: Array<ModelGroupPreferencesFilterInput | null> | null;
  not?: ModelGroupPreferencesFilterInput | null;
};

export type ModelGroupPreferencesConnection = {
  __typename: "ModelGroupPreferencesConnection";
  items: Array<GroupPreferences | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelGroupTweetIgnoreFilterInput = {
  id?: ModelIDInput | null;
  url?: ModelStringInput | null;
  ignoredBy?: ModelStringInput | null;
  tweetId?: ModelStringInput | null;
  ownerGroups?: ModelStringInput | null;
  scope?: ModelStringInput | null;
  and?: Array<ModelGroupTweetIgnoreFilterInput | null> | null;
  or?: Array<ModelGroupTweetIgnoreFilterInput | null> | null;
  not?: ModelGroupTweetIgnoreFilterInput | null;
};

export type ModelGroupTweetIgnoreConnection = {
  __typename: "ModelGroupTweetIgnoreConnection";
  items: Array<GroupTweetIgnore | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelGroupTweetAnnotationsFilterInput = {
  id?: ModelIDInput | null;
  url?: ModelStringInput | null;
  annotatedBy?: ModelStringInput | null;
  tweetId?: ModelStringInput | null;
  ownerGroups?: ModelStringInput | null;
  annotations?: ModelStringInput | null;
  and?: Array<ModelGroupTweetAnnotationsFilterInput | null> | null;
  or?: Array<ModelGroupTweetAnnotationsFilterInput | null> | null;
  not?: ModelGroupTweetAnnotationsFilterInput | null;
};

export type ModelGroupTweetAnnotationsConnection = {
  __typename: "ModelGroupTweetAnnotationsConnection";
  items: Array<GroupTweetAnnotations | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelGroupTwitterUserIgnoreFilterInput = {
  id?: ModelIDInput | null;
  twitterScreenName?: ModelStringInput | null;
  ignoredBy?: ModelStringInput | null;
  ownerGroups?: ModelStringInput | null;
  scope?: ModelStringInput | null;
  and?: Array<ModelGroupTwitterUserIgnoreFilterInput | null> | null;
  or?: Array<ModelGroupTwitterUserIgnoreFilterInput | null> | null;
  not?: ModelGroupTwitterUserIgnoreFilterInput | null;
};

export type ModelGroupTwitterUserIgnoreConnection = {
  __typename: "ModelGroupTwitterUserIgnoreConnection";
  items: Array<GroupTwitterUserIgnore | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type ModelSubscriptionUserPreferencesFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  prefs?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserPreferencesFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserPreferencesFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionUserDashboardFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  dashboard?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserDashboardFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserDashboardFilterInput | null> | null;
};

export type ModelSubscriptionGroupDashboardFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  group?: ModelSubscriptionStringInput | null;
  dashboard?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGroupDashboardFilterInput | null> | null;
  or?: Array<ModelSubscriptionGroupDashboardFilterInput | null> | null;
};

export type ModelSubscriptionSavedGraphFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  type?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  state?: ModelSubscriptionStringInput | null;
  group?: ModelSubscriptionStringInput | null;
  owner?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionSavedGraphFilterInput | null> | null;
  or?: Array<ModelSubscriptionSavedGraphFilterInput | null> | null;
};

export type ModelSubscriptionTextAutocompleteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  type?: ModelSubscriptionStringInput | null;
  text?: ModelSubscriptionStringInput | null;
  group?: ModelSubscriptionStringInput | null;
  owner?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionTextAutocompleteFilterInput | null> | null;
  or?: Array<ModelSubscriptionTextAutocompleteFilterInput | null> | null;
};

export type ModelSubscriptionUserSessionFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  fingerprint?: ModelSubscriptionStringInput | null;
  client?: ModelSubscriptionStringInput | null;
  open?: ModelSubscriptionBooleanInput | null;
  group?: ModelSubscriptionStringInput | null;
  owner?: ModelSubscriptionStringInput | null;
  ttl?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  sessionId?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUserSessionFilterInput | null> | null;
  or?: Array<ModelSubscriptionUserSessionFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionGroupPreferencesFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  group?: ModelSubscriptionStringInput | null;
  prefs?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGroupPreferencesFilterInput | null> | null;
  or?: Array<ModelSubscriptionGroupPreferencesFilterInput | null> | null;
};

export type ModelSubscriptionGroupTweetIgnoreFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  url?: ModelSubscriptionStringInput | null;
  ignoredBy?: ModelSubscriptionStringInput | null;
  tweetId?: ModelSubscriptionStringInput | null;
  ownerGroups?: ModelSubscriptionStringInput | null;
  scope?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGroupTweetIgnoreFilterInput | null> | null;
  or?: Array<ModelSubscriptionGroupTweetIgnoreFilterInput | null> | null;
};

export type ModelSubscriptionGroupTweetAnnotationsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  url?: ModelSubscriptionStringInput | null;
  annotatedBy?: ModelSubscriptionStringInput | null;
  tweetId?: ModelSubscriptionStringInput | null;
  ownerGroups?: ModelSubscriptionStringInput | null;
  annotations?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGroupTweetAnnotationsFilterInput | null> | null;
  or?: Array<ModelSubscriptionGroupTweetAnnotationsFilterInput | null> | null;
};

export type ModelSubscriptionGroupTwitterUserIgnoreFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  twitterScreenName?: ModelSubscriptionStringInput | null;
  ignoredBy?: ModelSubscriptionStringInput | null;
  ownerGroups?: ModelSubscriptionStringInput | null;
  scope?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGroupTwitterUserIgnoreFilterInput | null> | null;
  or?: Array<ModelSubscriptionGroupTwitterUserIgnoreFilterInput | null> | null;
};

export type CreateUserPreferencesMutation = {
  __typename: "UserPreferences";
  id: string;
  owner?: string | null;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateUserPreferencesMutation = {
  __typename: "UserPreferences";
  id: string;
  owner?: string | null;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteUserPreferencesMutation = {
  __typename: "UserPreferences";
  id: string;
  owner?: string | null;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateUserDashboardMutation = {
  __typename: "UserDashboard";
  id: string;
  owner?: string | null;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateUserDashboardMutation = {
  __typename: "UserDashboard";
  id: string;
  owner?: string | null;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteUserDashboardMutation = {
  __typename: "UserDashboard";
  id: string;
  owner?: string | null;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateGroupDashboardMutation = {
  __typename: "GroupDashboard";
  id: string;
  group: string;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupDashboardMutation = {
  __typename: "GroupDashboard";
  id: string;
  group: string;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteGroupDashboardMutation = {
  __typename: "GroupDashboard";
  id: string;
  group: string;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateSavedGraphMutation = {
  __typename: "SavedGraph";
  id: string;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateSavedGraphMutation = {
  __typename: "SavedGraph";
  id: string;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteSavedGraphMutation = {
  __typename: "SavedGraph";
  id: string;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateTextAutocompleteMutation = {
  __typename: "TextAutocomplete";
  id: string;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateTextAutocompleteMutation = {
  __typename: "TextAutocomplete";
  id: string;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteTextAutocompleteMutation = {
  __typename: "TextAutocomplete";
  id: string;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateUserSessionMutation = {
  __typename: "UserSession";
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateUserSessionMutation = {
  __typename: "UserSession";
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteUserSessionMutation = {
  __typename: "UserSession";
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateGroupPreferencesMutation = {
  __typename: "GroupPreferences";
  id: string;
  group: string;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupPreferencesMutation = {
  __typename: "GroupPreferences";
  id: string;
  group: string;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteGroupPreferencesMutation = {
  __typename: "GroupPreferences";
  id: string;
  group: string;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateGroupTweetIgnoreMutation = {
  __typename: "GroupTweetIgnore";
  id: string;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupTweetIgnoreMutation = {
  __typename: "GroupTweetIgnore";
  id: string;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteGroupTweetIgnoreMutation = {
  __typename: "GroupTweetIgnore";
  id: string;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateGroupTweetAnnotationsMutation = {
  __typename: "GroupTweetAnnotations";
  id: string;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupTweetAnnotationsMutation = {
  __typename: "GroupTweetAnnotations";
  id: string;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteGroupTweetAnnotationsMutation = {
  __typename: "GroupTweetAnnotations";
  id: string;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type CreateGroupTwitterUserIgnoreMutation = {
  __typename: "GroupTwitterUserIgnore";
  id: string;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type UpdateGroupTwitterUserIgnoreMutation = {
  __typename: "GroupTwitterUserIgnore";
  id: string;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type DeleteGroupTwitterUserIgnoreMutation = {
  __typename: "GroupTwitterUserIgnore";
  id: string;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type GetUserPreferencesQuery = {
  __typename: "UserPreferences";
  id: string;
  owner?: string | null;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListUserPreferencesQuery = {
  __typename: "ModelUserPreferencesConnection";
  items: Array<{
    __typename: "UserPreferences";
    id: string;
    owner?: string | null;
    prefs?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncUserPreferencesQuery = {
  __typename: "ModelUserPreferencesConnection";
  items: Array<{
    __typename: "UserPreferences";
    id: string;
    owner?: string | null;
    prefs?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetUserDashboardQuery = {
  __typename: "UserDashboard";
  id: string;
  owner?: string | null;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListUserDashboardsQuery = {
  __typename: "ModelUserDashboardConnection";
  items: Array<{
    __typename: "UserDashboard";
    id: string;
    owner?: string | null;
    dashboard: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncUserDashboardsQuery = {
  __typename: "ModelUserDashboardConnection";
  items: Array<{
    __typename: "UserDashboard";
    id: string;
    owner?: string | null;
    dashboard: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetGroupDashboardQuery = {
  __typename: "GroupDashboard";
  id: string;
  group: string;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListGroupDashboardsQuery = {
  __typename: "ModelGroupDashboardConnection";
  items: Array<{
    __typename: "GroupDashboard";
    id: string;
    group: string;
    dashboard: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncGroupDashboardsQuery = {
  __typename: "ModelGroupDashboardConnection";
  items: Array<{
    __typename: "GroupDashboard";
    id: string;
    group: string;
    dashboard: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetSavedGraphQuery = {
  __typename: "SavedGraph";
  id: string;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListSavedGraphsQuery = {
  __typename: "ModelSavedGraphConnection";
  items: Array<{
    __typename: "SavedGraph";
    id: string;
    type: string;
    title: string;
    state: string;
    group?: string | null;
    owner?: string | null;
    createdAt?: string | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncSavedGraphsQuery = {
  __typename: "ModelSavedGraphConnection";
  items: Array<{
    __typename: "SavedGraph";
    id: string;
    type: string;
    title: string;
    state: string;
    group?: string | null;
    owner?: string | null;
    createdAt?: string | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetTextAutocompleteQuery = {
  __typename: "TextAutocomplete";
  id: string;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListTextAutocompletesQuery = {
  __typename: "ModelTextAutocompleteConnection";
  items: Array<{
    __typename: "TextAutocomplete";
    id: string;
    type: string;
    text: string;
    group?: string | null;
    owner?: string | null;
    createdAt?: string | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncTextAutocompletesQuery = {
  __typename: "ModelTextAutocompleteConnection";
  items: Array<{
    __typename: "TextAutocomplete";
    id: string;
    type: string;
    text: string;
    group?: string | null;
    owner?: string | null;
    createdAt?: string | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetUserSessionQuery = {
  __typename: "UserSession";
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListUserSessionsQuery = {
  __typename: "ModelUserSessionConnection";
  items: Array<{
    __typename: "UserSession";
    id: string;
    fingerprint?: string | null;
    client?: string | null;
    open: boolean;
    group: string;
    owner?: string | null;
    ttl?: number | null;
    createdAt?: string | null;
    sessionId?: string | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncUserSessionsQuery = {
  __typename: "ModelUserSessionConnection";
  items: Array<{
    __typename: "UserSession";
    id: string;
    fingerprint?: string | null;
    client?: string | null;
    open: boolean;
    group: string;
    owner?: string | null;
    ttl?: number | null;
    createdAt?: string | null;
    sessionId?: string | null;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetGroupPreferencesQuery = {
  __typename: "GroupPreferences";
  id: string;
  group: string;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListGroupPreferencesQuery = {
  __typename: "ModelGroupPreferencesConnection";
  items: Array<{
    __typename: "GroupPreferences";
    id: string;
    group: string;
    prefs?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncGroupPreferencesQuery = {
  __typename: "ModelGroupPreferencesConnection";
  items: Array<{
    __typename: "GroupPreferences";
    id: string;
    group: string;
    prefs?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetGroupTweetIgnoreQuery = {
  __typename: "GroupTweetIgnore";
  id: string;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListGroupTweetIgnoresQuery = {
  __typename: "ModelGroupTweetIgnoreConnection";
  items: Array<{
    __typename: "GroupTweetIgnore";
    id: string;
    url: string;
    ignoredBy: string;
    tweetId: string;
    ownerGroups?: Array<string | null> | null;
    scope: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncGroupTweetIgnoresQuery = {
  __typename: "ModelGroupTweetIgnoreConnection";
  items: Array<{
    __typename: "GroupTweetIgnore";
    id: string;
    url: string;
    ignoredBy: string;
    tweetId: string;
    ownerGroups?: Array<string | null> | null;
    scope: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetGroupTweetAnnotationsQuery = {
  __typename: "GroupTweetAnnotations";
  id: string;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListGroupTweetAnnotationsQuery = {
  __typename: "ModelGroupTweetAnnotationsConnection";
  items: Array<{
    __typename: "GroupTweetAnnotations";
    id: string;
    url: string;
    annotatedBy: string;
    tweetId: string;
    ownerGroups?: Array<string | null> | null;
    annotations?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncGroupTweetAnnotationsQuery = {
  __typename: "ModelGroupTweetAnnotationsConnection";
  items: Array<{
    __typename: "GroupTweetAnnotations";
    id: string;
    url: string;
    annotatedBy: string;
    tweetId: string;
    ownerGroups?: Array<string | null> | null;
    annotations?: string | null;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type GetGroupTwitterUserIgnoreQuery = {
  __typename: "GroupTwitterUserIgnore";
  id: string;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type ListGroupTwitterUserIgnoresQuery = {
  __typename: "ModelGroupTwitterUserIgnoreConnection";
  items: Array<{
    __typename: "GroupTwitterUserIgnore";
    id: string;
    twitterScreenName: string;
    ignoredBy: string;
    ownerGroups?: Array<string | null> | null;
    scope: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type SyncGroupTwitterUserIgnoresQuery = {
  __typename: "ModelGroupTwitterUserIgnoreConnection";
  items: Array<{
    __typename: "GroupTwitterUserIgnore";
    id: string;
    twitterScreenName: string;
    ignoredBy: string;
    ownerGroups?: Array<string | null> | null;
    scope: string;
    createdAt: string;
    updatedAt: string;
    _version: number;
    _deleted?: boolean | null;
    _lastChangedAt: number;
  } | null>;
  nextToken?: string | null;
  startedAt?: number | null;
};

export type OnCreateUserPreferencesSubscription = {
  __typename: "UserPreferences";
  id: string;
  owner?: string | null;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateUserPreferencesSubscription = {
  __typename: "UserPreferences";
  id: string;
  owner?: string | null;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteUserPreferencesSubscription = {
  __typename: "UserPreferences";
  id: string;
  owner?: string | null;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateUserDashboardSubscription = {
  __typename: "UserDashboard";
  id: string;
  owner?: string | null;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateUserDashboardSubscription = {
  __typename: "UserDashboard";
  id: string;
  owner?: string | null;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteUserDashboardSubscription = {
  __typename: "UserDashboard";
  id: string;
  owner?: string | null;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateGroupDashboardSubscription = {
  __typename: "GroupDashboard";
  id: string;
  group: string;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateGroupDashboardSubscription = {
  __typename: "GroupDashboard";
  id: string;
  group: string;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteGroupDashboardSubscription = {
  __typename: "GroupDashboard";
  id: string;
  group: string;
  dashboard: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateSavedGraphSubscription = {
  __typename: "SavedGraph";
  id: string;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateSavedGraphSubscription = {
  __typename: "SavedGraph";
  id: string;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteSavedGraphSubscription = {
  __typename: "SavedGraph";
  id: string;
  type: string;
  title: string;
  state: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateTextAutocompleteSubscription = {
  __typename: "TextAutocomplete";
  id: string;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateTextAutocompleteSubscription = {
  __typename: "TextAutocomplete";
  id: string;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteTextAutocompleteSubscription = {
  __typename: "TextAutocomplete";
  id: string;
  type: string;
  text: string;
  group?: string | null;
  owner?: string | null;
  createdAt?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateUserSessionSubscription = {
  __typename: "UserSession";
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateUserSessionSubscription = {
  __typename: "UserSession";
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteUserSessionSubscription = {
  __typename: "UserSession";
  id: string;
  fingerprint?: string | null;
  client?: string | null;
  open: boolean;
  group: string;
  owner?: string | null;
  ttl?: number | null;
  createdAt?: string | null;
  sessionId?: string | null;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateGroupPreferencesSubscription = {
  __typename: "GroupPreferences";
  id: string;
  group: string;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateGroupPreferencesSubscription = {
  __typename: "GroupPreferences";
  id: string;
  group: string;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteGroupPreferencesSubscription = {
  __typename: "GroupPreferences";
  id: string;
  group: string;
  prefs?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateGroupTweetIgnoreSubscription = {
  __typename: "GroupTweetIgnore";
  id: string;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateGroupTweetIgnoreSubscription = {
  __typename: "GroupTweetIgnore";
  id: string;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteGroupTweetIgnoreSubscription = {
  __typename: "GroupTweetIgnore";
  id: string;
  url: string;
  ignoredBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateGroupTweetAnnotationsSubscription = {
  __typename: "GroupTweetAnnotations";
  id: string;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateGroupTweetAnnotationsSubscription = {
  __typename: "GroupTweetAnnotations";
  id: string;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteGroupTweetAnnotationsSubscription = {
  __typename: "GroupTweetAnnotations";
  id: string;
  url: string;
  annotatedBy: string;
  tweetId: string;
  ownerGroups?: Array<string | null> | null;
  annotations?: string | null;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnCreateGroupTwitterUserIgnoreSubscription = {
  __typename: "GroupTwitterUserIgnore";
  id: string;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnUpdateGroupTwitterUserIgnoreSubscription = {
  __typename: "GroupTwitterUserIgnore";
  id: string;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

export type OnDeleteGroupTwitterUserIgnoreSubscription = {
  __typename: "GroupTwitterUserIgnore";
  id: string;
  twitterScreenName: string;
  ignoredBy: string;
  ownerGroups?: Array<string | null> | null;
  scope: string;
  createdAt: string;
  updatedAt: string;
  _version: number;
  _deleted?: boolean | null;
  _lastChangedAt: number;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUserPreferences(
    input: CreateUserPreferencesInput,
    condition?: ModelUserPreferencesConditionInput
  ): Promise<CreateUserPreferencesMutation> {
    const statement = `mutation CreateUserPreferences($input: CreateUserPreferencesInput!, $condition: ModelUserPreferencesConditionInput) {
        createUserPreferences(input: $input, condition: $condition) {
          __typename
          id
          owner
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserPreferencesMutation>response.data.createUserPreferences;
  }
  async UpdateUserPreferences(
    input: UpdateUserPreferencesInput,
    condition?: ModelUserPreferencesConditionInput
  ): Promise<UpdateUserPreferencesMutation> {
    const statement = `mutation UpdateUserPreferences($input: UpdateUserPreferencesInput!, $condition: ModelUserPreferencesConditionInput) {
        updateUserPreferences(input: $input, condition: $condition) {
          __typename
          id
          owner
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserPreferencesMutation>response.data.updateUserPreferences;
  }
  async DeleteUserPreferences(
    input: DeleteUserPreferencesInput,
    condition?: ModelUserPreferencesConditionInput
  ): Promise<DeleteUserPreferencesMutation> {
    const statement = `mutation DeleteUserPreferences($input: DeleteUserPreferencesInput!, $condition: ModelUserPreferencesConditionInput) {
        deleteUserPreferences(input: $input, condition: $condition) {
          __typename
          id
          owner
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserPreferencesMutation>response.data.deleteUserPreferences;
  }
  async CreateUserDashboard(
    input: CreateUserDashboardInput,
    condition?: ModelUserDashboardConditionInput
  ): Promise<CreateUserDashboardMutation> {
    const statement = `mutation CreateUserDashboard($input: CreateUserDashboardInput!, $condition: ModelUserDashboardConditionInput) {
        createUserDashboard(input: $input, condition: $condition) {
          __typename
          id
          owner
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserDashboardMutation>response.data.createUserDashboard;
  }
  async UpdateUserDashboard(
    input: UpdateUserDashboardInput,
    condition?: ModelUserDashboardConditionInput
  ): Promise<UpdateUserDashboardMutation> {
    const statement = `mutation UpdateUserDashboard($input: UpdateUserDashboardInput!, $condition: ModelUserDashboardConditionInput) {
        updateUserDashboard(input: $input, condition: $condition) {
          __typename
          id
          owner
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserDashboardMutation>response.data.updateUserDashboard;
  }
  async DeleteUserDashboard(
    input: DeleteUserDashboardInput,
    condition?: ModelUserDashboardConditionInput
  ): Promise<DeleteUserDashboardMutation> {
    const statement = `mutation DeleteUserDashboard($input: DeleteUserDashboardInput!, $condition: ModelUserDashboardConditionInput) {
        deleteUserDashboard(input: $input, condition: $condition) {
          __typename
          id
          owner
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserDashboardMutation>response.data.deleteUserDashboard;
  }
  async CreateGroupDashboard(
    input: CreateGroupDashboardInput,
    condition?: ModelGroupDashboardConditionInput
  ): Promise<CreateGroupDashboardMutation> {
    const statement = `mutation CreateGroupDashboard($input: CreateGroupDashboardInput!, $condition: ModelGroupDashboardConditionInput) {
        createGroupDashboard(input: $input, condition: $condition) {
          __typename
          id
          group
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGroupDashboardMutation>response.data.createGroupDashboard;
  }
  async UpdateGroupDashboard(
    input: UpdateGroupDashboardInput,
    condition?: ModelGroupDashboardConditionInput
  ): Promise<UpdateGroupDashboardMutation> {
    const statement = `mutation UpdateGroupDashboard($input: UpdateGroupDashboardInput!, $condition: ModelGroupDashboardConditionInput) {
        updateGroupDashboard(input: $input, condition: $condition) {
          __typename
          id
          group
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGroupDashboardMutation>response.data.updateGroupDashboard;
  }
  async DeleteGroupDashboard(
    input: DeleteGroupDashboardInput,
    condition?: ModelGroupDashboardConditionInput
  ): Promise<DeleteGroupDashboardMutation> {
    const statement = `mutation DeleteGroupDashboard($input: DeleteGroupDashboardInput!, $condition: ModelGroupDashboardConditionInput) {
        deleteGroupDashboard(input: $input, condition: $condition) {
          __typename
          id
          group
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGroupDashboardMutation>response.data.deleteGroupDashboard;
  }
  async CreateSavedGraph(
    input: CreateSavedGraphInput,
    condition?: ModelSavedGraphConditionInput
  ): Promise<CreateSavedGraphMutation> {
    const statement = `mutation CreateSavedGraph($input: CreateSavedGraphInput!, $condition: ModelSavedGraphConditionInput) {
        createSavedGraph(input: $input, condition: $condition) {
          __typename
          id
          type
          title
          state
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSavedGraphMutation>response.data.createSavedGraph;
  }
  async UpdateSavedGraph(
    input: UpdateSavedGraphInput,
    condition?: ModelSavedGraphConditionInput
  ): Promise<UpdateSavedGraphMutation> {
    const statement = `mutation UpdateSavedGraph($input: UpdateSavedGraphInput!, $condition: ModelSavedGraphConditionInput) {
        updateSavedGraph(input: $input, condition: $condition) {
          __typename
          id
          type
          title
          state
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSavedGraphMutation>response.data.updateSavedGraph;
  }
  async DeleteSavedGraph(
    input: DeleteSavedGraphInput,
    condition?: ModelSavedGraphConditionInput
  ): Promise<DeleteSavedGraphMutation> {
    const statement = `mutation DeleteSavedGraph($input: DeleteSavedGraphInput!, $condition: ModelSavedGraphConditionInput) {
        deleteSavedGraph(input: $input, condition: $condition) {
          __typename
          id
          type
          title
          state
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteSavedGraphMutation>response.data.deleteSavedGraph;
  }
  async CreateTextAutocomplete(
    input: CreateTextAutocompleteInput,
    condition?: ModelTextAutocompleteConditionInput
  ): Promise<CreateTextAutocompleteMutation> {
    const statement = `mutation CreateTextAutocomplete($input: CreateTextAutocompleteInput!, $condition: ModelTextAutocompleteConditionInput) {
        createTextAutocomplete(input: $input, condition: $condition) {
          __typename
          id
          type
          text
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTextAutocompleteMutation>response.data.createTextAutocomplete;
  }
  async UpdateTextAutocomplete(
    input: UpdateTextAutocompleteInput,
    condition?: ModelTextAutocompleteConditionInput
  ): Promise<UpdateTextAutocompleteMutation> {
    const statement = `mutation UpdateTextAutocomplete($input: UpdateTextAutocompleteInput!, $condition: ModelTextAutocompleteConditionInput) {
        updateTextAutocomplete(input: $input, condition: $condition) {
          __typename
          id
          type
          text
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTextAutocompleteMutation>response.data.updateTextAutocomplete;
  }
  async DeleteTextAutocomplete(
    input: DeleteTextAutocompleteInput,
    condition?: ModelTextAutocompleteConditionInput
  ): Promise<DeleteTextAutocompleteMutation> {
    const statement = `mutation DeleteTextAutocomplete($input: DeleteTextAutocompleteInput!, $condition: ModelTextAutocompleteConditionInput) {
        deleteTextAutocomplete(input: $input, condition: $condition) {
          __typename
          id
          type
          text
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTextAutocompleteMutation>response.data.deleteTextAutocomplete;
  }
  async CreateUserSession(
    input: CreateUserSessionInput,
    condition?: ModelUserSessionConditionInput
  ): Promise<CreateUserSessionMutation> {
    const statement = `mutation CreateUserSession($input: CreateUserSessionInput!, $condition: ModelUserSessionConditionInput) {
        createUserSession(input: $input, condition: $condition) {
          __typename
          id
          fingerprint
          client
          open
          group
          owner
          ttl
          createdAt
          sessionId
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserSessionMutation>response.data.createUserSession;
  }
  async UpdateUserSession(
    input: UpdateUserSessionInput,
    condition?: ModelUserSessionConditionInput
  ): Promise<UpdateUserSessionMutation> {
    const statement = `mutation UpdateUserSession($input: UpdateUserSessionInput!, $condition: ModelUserSessionConditionInput) {
        updateUserSession(input: $input, condition: $condition) {
          __typename
          id
          fingerprint
          client
          open
          group
          owner
          ttl
          createdAt
          sessionId
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserSessionMutation>response.data.updateUserSession;
  }
  async DeleteUserSession(
    input: DeleteUserSessionInput,
    condition?: ModelUserSessionConditionInput
  ): Promise<DeleteUserSessionMutation> {
    const statement = `mutation DeleteUserSession($input: DeleteUserSessionInput!, $condition: ModelUserSessionConditionInput) {
        deleteUserSession(input: $input, condition: $condition) {
          __typename
          id
          fingerprint
          client
          open
          group
          owner
          ttl
          createdAt
          sessionId
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserSessionMutation>response.data.deleteUserSession;
  }
  async CreateGroupPreferences(
    input: CreateGroupPreferencesInput,
    condition?: ModelGroupPreferencesConditionInput
  ): Promise<CreateGroupPreferencesMutation> {
    const statement = `mutation CreateGroupPreferences($input: CreateGroupPreferencesInput!, $condition: ModelGroupPreferencesConditionInput) {
        createGroupPreferences(input: $input, condition: $condition) {
          __typename
          id
          group
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGroupPreferencesMutation>response.data.createGroupPreferences;
  }
  async UpdateGroupPreferences(
    input: UpdateGroupPreferencesInput,
    condition?: ModelGroupPreferencesConditionInput
  ): Promise<UpdateGroupPreferencesMutation> {
    const statement = `mutation UpdateGroupPreferences($input: UpdateGroupPreferencesInput!, $condition: ModelGroupPreferencesConditionInput) {
        updateGroupPreferences(input: $input, condition: $condition) {
          __typename
          id
          group
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGroupPreferencesMutation>response.data.updateGroupPreferences;
  }
  async DeleteGroupPreferences(
    input: DeleteGroupPreferencesInput,
    condition?: ModelGroupPreferencesConditionInput
  ): Promise<DeleteGroupPreferencesMutation> {
    const statement = `mutation DeleteGroupPreferences($input: DeleteGroupPreferencesInput!, $condition: ModelGroupPreferencesConditionInput) {
        deleteGroupPreferences(input: $input, condition: $condition) {
          __typename
          id
          group
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGroupPreferencesMutation>response.data.deleteGroupPreferences;
  }
  async CreateGroupTweetIgnore(
    input: CreateGroupTweetIgnoreInput,
    condition?: ModelGroupTweetIgnoreConditionInput
  ): Promise<CreateGroupTweetIgnoreMutation> {
    const statement = `mutation CreateGroupTweetIgnore($input: CreateGroupTweetIgnoreInput!, $condition: ModelGroupTweetIgnoreConditionInput) {
        createGroupTweetIgnore(input: $input, condition: $condition) {
          __typename
          id
          url
          ignoredBy
          tweetId
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGroupTweetIgnoreMutation>response.data.createGroupTweetIgnore;
  }
  async UpdateGroupTweetIgnore(
    input: UpdateGroupTweetIgnoreInput,
    condition?: ModelGroupTweetIgnoreConditionInput
  ): Promise<UpdateGroupTweetIgnoreMutation> {
    const statement = `mutation UpdateGroupTweetIgnore($input: UpdateGroupTweetIgnoreInput!, $condition: ModelGroupTweetIgnoreConditionInput) {
        updateGroupTweetIgnore(input: $input, condition: $condition) {
          __typename
          id
          url
          ignoredBy
          tweetId
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGroupTweetIgnoreMutation>response.data.updateGroupTweetIgnore;
  }
  async DeleteGroupTweetIgnore(
    input: DeleteGroupTweetIgnoreInput,
    condition?: ModelGroupTweetIgnoreConditionInput
  ): Promise<DeleteGroupTweetIgnoreMutation> {
    const statement = `mutation DeleteGroupTweetIgnore($input: DeleteGroupTweetIgnoreInput!, $condition: ModelGroupTweetIgnoreConditionInput) {
        deleteGroupTweetIgnore(input: $input, condition: $condition) {
          __typename
          id
          url
          ignoredBy
          tweetId
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGroupTweetIgnoreMutation>response.data.deleteGroupTweetIgnore;
  }
  async CreateGroupTweetAnnotations(
    input: CreateGroupTweetAnnotationsInput,
    condition?: ModelGroupTweetAnnotationsConditionInput
  ): Promise<CreateGroupTweetAnnotationsMutation> {
    const statement = `mutation CreateGroupTweetAnnotations($input: CreateGroupTweetAnnotationsInput!, $condition: ModelGroupTweetAnnotationsConditionInput) {
        createGroupTweetAnnotations(input: $input, condition: $condition) {
          __typename
          id
          url
          annotatedBy
          tweetId
          ownerGroups
          annotations
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGroupTweetAnnotationsMutation>(
      response.data.createGroupTweetAnnotations
    );
  }
  async UpdateGroupTweetAnnotations(
    input: UpdateGroupTweetAnnotationsInput,
    condition?: ModelGroupTweetAnnotationsConditionInput
  ): Promise<UpdateGroupTweetAnnotationsMutation> {
    const statement = `mutation UpdateGroupTweetAnnotations($input: UpdateGroupTweetAnnotationsInput!, $condition: ModelGroupTweetAnnotationsConditionInput) {
        updateGroupTweetAnnotations(input: $input, condition: $condition) {
          __typename
          id
          url
          annotatedBy
          tweetId
          ownerGroups
          annotations
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGroupTweetAnnotationsMutation>(
      response.data.updateGroupTweetAnnotations
    );
  }
  async DeleteGroupTweetAnnotations(
    input: DeleteGroupTweetAnnotationsInput,
    condition?: ModelGroupTweetAnnotationsConditionInput
  ): Promise<DeleteGroupTweetAnnotationsMutation> {
    const statement = `mutation DeleteGroupTweetAnnotations($input: DeleteGroupTweetAnnotationsInput!, $condition: ModelGroupTweetAnnotationsConditionInput) {
        deleteGroupTweetAnnotations(input: $input, condition: $condition) {
          __typename
          id
          url
          annotatedBy
          tweetId
          ownerGroups
          annotations
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGroupTweetAnnotationsMutation>(
      response.data.deleteGroupTweetAnnotations
    );
  }
  async CreateGroupTwitterUserIgnore(
    input: CreateGroupTwitterUserIgnoreInput,
    condition?: ModelGroupTwitterUserIgnoreConditionInput
  ): Promise<CreateGroupTwitterUserIgnoreMutation> {
    const statement = `mutation CreateGroupTwitterUserIgnore($input: CreateGroupTwitterUserIgnoreInput!, $condition: ModelGroupTwitterUserIgnoreConditionInput) {
        createGroupTwitterUserIgnore(input: $input, condition: $condition) {
          __typename
          id
          twitterScreenName
          ignoredBy
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGroupTwitterUserIgnoreMutation>(
      response.data.createGroupTwitterUserIgnore
    );
  }
  async UpdateGroupTwitterUserIgnore(
    input: UpdateGroupTwitterUserIgnoreInput,
    condition?: ModelGroupTwitterUserIgnoreConditionInput
  ): Promise<UpdateGroupTwitterUserIgnoreMutation> {
    const statement = `mutation UpdateGroupTwitterUserIgnore($input: UpdateGroupTwitterUserIgnoreInput!, $condition: ModelGroupTwitterUserIgnoreConditionInput) {
        updateGroupTwitterUserIgnore(input: $input, condition: $condition) {
          __typename
          id
          twitterScreenName
          ignoredBy
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGroupTwitterUserIgnoreMutation>(
      response.data.updateGroupTwitterUserIgnore
    );
  }
  async DeleteGroupTwitterUserIgnore(
    input: DeleteGroupTwitterUserIgnoreInput,
    condition?: ModelGroupTwitterUserIgnoreConditionInput
  ): Promise<DeleteGroupTwitterUserIgnoreMutation> {
    const statement = `mutation DeleteGroupTwitterUserIgnore($input: DeleteGroupTwitterUserIgnoreInput!, $condition: ModelGroupTwitterUserIgnoreConditionInput) {
        deleteGroupTwitterUserIgnore(input: $input, condition: $condition) {
          __typename
          id
          twitterScreenName
          ignoredBy
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGroupTwitterUserIgnoreMutation>(
      response.data.deleteGroupTwitterUserIgnore
    );
  }
  async GetUserPreferences(id: string): Promise<GetUserPreferencesQuery> {
    const statement = `query GetUserPreferences($id: ID!) {
        getUserPreferences(id: $id) {
          __typename
          id
          owner
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserPreferencesQuery>response.data.getUserPreferences;
  }
  async ListUserPreferences(
    filter?: ModelUserPreferencesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserPreferencesQuery> {
    const statement = `query ListUserPreferences($filter: ModelUserPreferencesFilterInput, $limit: Int, $nextToken: String) {
        listUserPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owner
            prefs
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserPreferencesQuery>response.data.listUserPreferences;
  }
  async SyncUserPreferences(
    filter?: ModelUserPreferencesFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUserPreferencesQuery> {
    const statement = `query SyncUserPreferences($filter: ModelUserPreferencesFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUserPreferences(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            owner
            prefs
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUserPreferencesQuery>response.data.syncUserPreferences;
  }
  async GetUserDashboard(id: string): Promise<GetUserDashboardQuery> {
    const statement = `query GetUserDashboard($id: ID!) {
        getUserDashboard(id: $id) {
          __typename
          id
          owner
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserDashboardQuery>response.data.getUserDashboard;
  }
  async ListUserDashboards(
    filter?: ModelUserDashboardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserDashboardsQuery> {
    const statement = `query ListUserDashboards($filter: ModelUserDashboardFilterInput, $limit: Int, $nextToken: String) {
        listUserDashboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            owner
            dashboard
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserDashboardsQuery>response.data.listUserDashboards;
  }
  async SyncUserDashboards(
    filter?: ModelUserDashboardFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUserDashboardsQuery> {
    const statement = `query SyncUserDashboards($filter: ModelUserDashboardFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUserDashboards(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            owner
            dashboard
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUserDashboardsQuery>response.data.syncUserDashboards;
  }
  async GetGroupDashboard(id: string): Promise<GetGroupDashboardQuery> {
    const statement = `query GetGroupDashboard($id: ID!) {
        getGroupDashboard(id: $id) {
          __typename
          id
          group
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGroupDashboardQuery>response.data.getGroupDashboard;
  }
  async ListGroupDashboards(
    filter?: ModelGroupDashboardFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGroupDashboardsQuery> {
    const statement = `query ListGroupDashboards($filter: ModelGroupDashboardFilterInput, $limit: Int, $nextToken: String) {
        listGroupDashboards(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            group
            dashboard
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGroupDashboardsQuery>response.data.listGroupDashboards;
  }
  async SyncGroupDashboards(
    filter?: ModelGroupDashboardFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncGroupDashboardsQuery> {
    const statement = `query SyncGroupDashboards($filter: ModelGroupDashboardFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncGroupDashboards(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            group
            dashboard
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncGroupDashboardsQuery>response.data.syncGroupDashboards;
  }
  async GetSavedGraph(id: string): Promise<GetSavedGraphQuery> {
    const statement = `query GetSavedGraph($id: ID!) {
        getSavedGraph(id: $id) {
          __typename
          id
          type
          title
          state
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetSavedGraphQuery>response.data.getSavedGraph;
  }
  async ListSavedGraphs(
    filter?: ModelSavedGraphFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListSavedGraphsQuery> {
    const statement = `query ListSavedGraphs($filter: ModelSavedGraphFilterInput, $limit: Int, $nextToken: String) {
        listSavedGraphs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            title
            state
            group
            owner
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListSavedGraphsQuery>response.data.listSavedGraphs;
  }
  async SyncSavedGraphs(
    filter?: ModelSavedGraphFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncSavedGraphsQuery> {
    const statement = `query SyncSavedGraphs($filter: ModelSavedGraphFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncSavedGraphs(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            type
            title
            state
            group
            owner
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncSavedGraphsQuery>response.data.syncSavedGraphs;
  }
  async GetTextAutocomplete(id: string): Promise<GetTextAutocompleteQuery> {
    const statement = `query GetTextAutocomplete($id: ID!) {
        getTextAutocomplete(id: $id) {
          __typename
          id
          type
          text
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTextAutocompleteQuery>response.data.getTextAutocomplete;
  }
  async ListTextAutocompletes(
    filter?: ModelTextAutocompleteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTextAutocompletesQuery> {
    const statement = `query ListTextAutocompletes($filter: ModelTextAutocompleteFilterInput, $limit: Int, $nextToken: String) {
        listTextAutocompletes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            text
            group
            owner
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTextAutocompletesQuery>response.data.listTextAutocompletes;
  }
  async SyncTextAutocompletes(
    filter?: ModelTextAutocompleteFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncTextAutocompletesQuery> {
    const statement = `query SyncTextAutocompletes($filter: ModelTextAutocompleteFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncTextAutocompletes(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            type
            text
            group
            owner
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncTextAutocompletesQuery>response.data.syncTextAutocompletes;
  }
  async GetUserSession(id: string): Promise<GetUserSessionQuery> {
    const statement = `query GetUserSession($id: ID!) {
        getUserSession(id: $id) {
          __typename
          id
          fingerprint
          client
          open
          group
          owner
          ttl
          createdAt
          sessionId
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserSessionQuery>response.data.getUserSession;
  }
  async ListUserSessions(
    filter?: ModelUserSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUserSessionsQuery> {
    const statement = `query ListUserSessions($filter: ModelUserSessionFilterInput, $limit: Int, $nextToken: String) {
        listUserSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            fingerprint
            client
            open
            group
            owner
            ttl
            createdAt
            sessionId
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUserSessionsQuery>response.data.listUserSessions;
  }
  async SyncUserSessions(
    filter?: ModelUserSessionFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncUserSessionsQuery> {
    const statement = `query SyncUserSessions($filter: ModelUserSessionFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncUserSessions(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            fingerprint
            client
            open
            group
            owner
            ttl
            createdAt
            sessionId
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncUserSessionsQuery>response.data.syncUserSessions;
  }
  async GetGroupPreferences(id: string): Promise<GetGroupPreferencesQuery> {
    const statement = `query GetGroupPreferences($id: ID!) {
        getGroupPreferences(id: $id) {
          __typename
          id
          group
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGroupPreferencesQuery>response.data.getGroupPreferences;
  }
  async ListGroupPreferences(
    filter?: ModelGroupPreferencesFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGroupPreferencesQuery> {
    const statement = `query ListGroupPreferences($filter: ModelGroupPreferencesFilterInput, $limit: Int, $nextToken: String) {
        listGroupPreferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            group
            prefs
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGroupPreferencesQuery>response.data.listGroupPreferences;
  }
  async SyncGroupPreferences(
    filter?: ModelGroupPreferencesFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncGroupPreferencesQuery> {
    const statement = `query SyncGroupPreferences($filter: ModelGroupPreferencesFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncGroupPreferences(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            group
            prefs
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncGroupPreferencesQuery>response.data.syncGroupPreferences;
  }
  async GetGroupTweetIgnore(id: string): Promise<GetGroupTweetIgnoreQuery> {
    const statement = `query GetGroupTweetIgnore($id: ID!) {
        getGroupTweetIgnore(id: $id) {
          __typename
          id
          url
          ignoredBy
          tweetId
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGroupTweetIgnoreQuery>response.data.getGroupTweetIgnore;
  }
  async ListGroupTweetIgnores(
    filter?: ModelGroupTweetIgnoreFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGroupTweetIgnoresQuery> {
    const statement = `query ListGroupTweetIgnores($filter: ModelGroupTweetIgnoreFilterInput, $limit: Int, $nextToken: String) {
        listGroupTweetIgnores(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            url
            ignoredBy
            tweetId
            ownerGroups
            scope
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGroupTweetIgnoresQuery>response.data.listGroupTweetIgnores;
  }
  async SyncGroupTweetIgnores(
    filter?: ModelGroupTweetIgnoreFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncGroupTweetIgnoresQuery> {
    const statement = `query SyncGroupTweetIgnores($filter: ModelGroupTweetIgnoreFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncGroupTweetIgnores(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            url
            ignoredBy
            tweetId
            ownerGroups
            scope
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncGroupTweetIgnoresQuery>response.data.syncGroupTweetIgnores;
  }
  async GetGroupTweetAnnotations(
    id: string
  ): Promise<GetGroupTweetAnnotationsQuery> {
    const statement = `query GetGroupTweetAnnotations($id: ID!) {
        getGroupTweetAnnotations(id: $id) {
          __typename
          id
          url
          annotatedBy
          tweetId
          ownerGroups
          annotations
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGroupTweetAnnotationsQuery>(
      response.data.getGroupTweetAnnotations
    );
  }
  async ListGroupTweetAnnotations(
    filter?: ModelGroupTweetAnnotationsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGroupTweetAnnotationsQuery> {
    const statement = `query ListGroupTweetAnnotations($filter: ModelGroupTweetAnnotationsFilterInput, $limit: Int, $nextToken: String) {
        listGroupTweetAnnotations(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            url
            annotatedBy
            tweetId
            ownerGroups
            annotations
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGroupTweetAnnotationsQuery>(
      response.data.listGroupTweetAnnotations
    );
  }
  async SyncGroupTweetAnnotations(
    filter?: ModelGroupTweetAnnotationsFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncGroupTweetAnnotationsQuery> {
    const statement = `query SyncGroupTweetAnnotations($filter: ModelGroupTweetAnnotationsFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncGroupTweetAnnotations(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            url
            annotatedBy
            tweetId
            ownerGroups
            annotations
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncGroupTweetAnnotationsQuery>(
      response.data.syncGroupTweetAnnotations
    );
  }
  async GetGroupTwitterUserIgnore(
    id: string
  ): Promise<GetGroupTwitterUserIgnoreQuery> {
    const statement = `query GetGroupTwitterUserIgnore($id: ID!) {
        getGroupTwitterUserIgnore(id: $id) {
          __typename
          id
          twitterScreenName
          ignoredBy
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGroupTwitterUserIgnoreQuery>(
      response.data.getGroupTwitterUserIgnore
    );
  }
  async ListGroupTwitterUserIgnores(
    filter?: ModelGroupTwitterUserIgnoreFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListGroupTwitterUserIgnoresQuery> {
    const statement = `query ListGroupTwitterUserIgnores($filter: ModelGroupTwitterUserIgnoreFilterInput, $limit: Int, $nextToken: String) {
        listGroupTwitterUserIgnores(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
        ) {
          __typename
          items {
            __typename
            id
            twitterScreenName
            ignoredBy
            ownerGroups
            scope
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListGroupTwitterUserIgnoresQuery>(
      response.data.listGroupTwitterUserIgnores
    );
  }
  async SyncGroupTwitterUserIgnores(
    filter?: ModelGroupTwitterUserIgnoreFilterInput,
    limit?: number,
    nextToken?: string,
    lastSync?: number
  ): Promise<SyncGroupTwitterUserIgnoresQuery> {
    const statement = `query SyncGroupTwitterUserIgnores($filter: ModelGroupTwitterUserIgnoreFilterInput, $limit: Int, $nextToken: String, $lastSync: AWSTimestamp) {
        syncGroupTwitterUserIgnores(
          filter: $filter
          limit: $limit
          nextToken: $nextToken
          lastSync: $lastSync
        ) {
          __typename
          items {
            __typename
            id
            twitterScreenName
            ignoredBy
            ownerGroups
            scope
            createdAt
            updatedAt
            _version
            _deleted
            _lastChangedAt
          }
          nextToken
          startedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (lastSync) {
      gqlAPIServiceArguments.lastSync = lastSync;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <SyncGroupTwitterUserIgnoresQuery>(
      response.data.syncGroupTwitterUserIgnores
    );
  }
  OnCreateUserPreferencesListener(
    filter?: ModelSubscriptionUserPreferencesFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateUserPreferences">
    >
  > {
    const statement = `subscription OnCreateUserPreferences($filter: ModelSubscriptionUserPreferencesFilterInput, $owner: String) {
        onCreateUserPreferences(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateUserPreferences">
      >
    >;
  }

  OnUpdateUserPreferencesListener(
    filter?: ModelSubscriptionUserPreferencesFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateUserPreferences">
    >
  > {
    const statement = `subscription OnUpdateUserPreferences($filter: ModelSubscriptionUserPreferencesFilterInput, $owner: String) {
        onUpdateUserPreferences(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateUserPreferences">
      >
    >;
  }

  OnDeleteUserPreferencesListener(
    filter?: ModelSubscriptionUserPreferencesFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteUserPreferences">
    >
  > {
    const statement = `subscription OnDeleteUserPreferences($filter: ModelSubscriptionUserPreferencesFilterInput, $owner: String) {
        onDeleteUserPreferences(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteUserPreferences">
      >
    >;
  }

  OnCreateUserDashboardListener(
    filter?: ModelSubscriptionUserDashboardFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserDashboard">>
  > {
    const statement = `subscription OnCreateUserDashboard($filter: ModelSubscriptionUserDashboardFilterInput, $owner: String) {
        onCreateUserDashboard(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateUserDashboard">
      >
    >;
  }

  OnUpdateUserDashboardListener(
    filter?: ModelSubscriptionUserDashboardFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserDashboard">>
  > {
    const statement = `subscription OnUpdateUserDashboard($filter: ModelSubscriptionUserDashboardFilterInput, $owner: String) {
        onUpdateUserDashboard(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateUserDashboard">
      >
    >;
  }

  OnDeleteUserDashboardListener(
    filter?: ModelSubscriptionUserDashboardFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserDashboard">>
  > {
    const statement = `subscription OnDeleteUserDashboard($filter: ModelSubscriptionUserDashboardFilterInput, $owner: String) {
        onDeleteUserDashboard(filter: $filter, owner: $owner) {
          __typename
          id
          owner
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteUserDashboard">
      >
    >;
  }

  OnCreateGroupDashboardListener(
    filter?: ModelSubscriptionGroupDashboardFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateGroupDashboard">
    >
  > {
    const statement = `subscription OnCreateGroupDashboard($filter: ModelSubscriptionGroupDashboardFilterInput) {
        onCreateGroupDashboard(filter: $filter) {
          __typename
          id
          group
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateGroupDashboard">
      >
    >;
  }

  OnUpdateGroupDashboardListener(
    filter?: ModelSubscriptionGroupDashboardFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateGroupDashboard">
    >
  > {
    const statement = `subscription OnUpdateGroupDashboard($filter: ModelSubscriptionGroupDashboardFilterInput) {
        onUpdateGroupDashboard(filter: $filter) {
          __typename
          id
          group
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateGroupDashboard">
      >
    >;
  }

  OnDeleteGroupDashboardListener(
    filter?: ModelSubscriptionGroupDashboardFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteGroupDashboard">
    >
  > {
    const statement = `subscription OnDeleteGroupDashboard($filter: ModelSubscriptionGroupDashboardFilterInput) {
        onDeleteGroupDashboard(filter: $filter) {
          __typename
          id
          group
          dashboard
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteGroupDashboard">
      >
    >;
  }

  OnCreateSavedGraphListener(
    filter?: ModelSubscriptionSavedGraphFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSavedGraph">>
  > {
    const statement = `subscription OnCreateSavedGraph($filter: ModelSubscriptionSavedGraphFilterInput) {
        onCreateSavedGraph(filter: $filter) {
          __typename
          id
          type
          title
          state
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateSavedGraph">>
    >;
  }

  OnUpdateSavedGraphListener(
    filter?: ModelSubscriptionSavedGraphFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSavedGraph">>
  > {
    const statement = `subscription OnUpdateSavedGraph($filter: ModelSubscriptionSavedGraphFilterInput) {
        onUpdateSavedGraph(filter: $filter) {
          __typename
          id
          type
          title
          state
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateSavedGraph">>
    >;
  }

  OnDeleteSavedGraphListener(
    filter?: ModelSubscriptionSavedGraphFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSavedGraph">>
  > {
    const statement = `subscription OnDeleteSavedGraph($filter: ModelSubscriptionSavedGraphFilterInput) {
        onDeleteSavedGraph(filter: $filter) {
          __typename
          id
          type
          title
          state
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteSavedGraph">>
    >;
  }

  OnCreateTextAutocompleteListener(
    filter?: ModelSubscriptionTextAutocompleteFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateTextAutocomplete">
    >
  > {
    const statement = `subscription OnCreateTextAutocomplete($filter: ModelSubscriptionTextAutocompleteFilterInput) {
        onCreateTextAutocomplete(filter: $filter) {
          __typename
          id
          type
          text
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateTextAutocomplete">
      >
    >;
  }

  OnUpdateTextAutocompleteListener(
    filter?: ModelSubscriptionTextAutocompleteFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateTextAutocomplete">
    >
  > {
    const statement = `subscription OnUpdateTextAutocomplete($filter: ModelSubscriptionTextAutocompleteFilterInput) {
        onUpdateTextAutocomplete(filter: $filter) {
          __typename
          id
          type
          text
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateTextAutocomplete">
      >
    >;
  }

  OnDeleteTextAutocompleteListener(
    filter?: ModelSubscriptionTextAutocompleteFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteTextAutocomplete">
    >
  > {
    const statement = `subscription OnDeleteTextAutocomplete($filter: ModelSubscriptionTextAutocompleteFilterInput) {
        onDeleteTextAutocomplete(filter: $filter) {
          __typename
          id
          type
          text
          group
          owner
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteTextAutocomplete">
      >
    >;
  }

  OnCreateUserSessionListener(
    filter?: ModelSubscriptionUserSessionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserSession">>
  > {
    const statement = `subscription OnCreateUserSession($filter: ModelSubscriptionUserSessionFilterInput) {
        onCreateUserSession(filter: $filter) {
          __typename
          id
          fingerprint
          client
          open
          group
          owner
          ttl
          createdAt
          sessionId
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUserSession">>
    >;
  }

  OnUpdateUserSessionListener(
    filter?: ModelSubscriptionUserSessionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserSession">>
  > {
    const statement = `subscription OnUpdateUserSession($filter: ModelSubscriptionUserSessionFilterInput) {
        onUpdateUserSession(filter: $filter) {
          __typename
          id
          fingerprint
          client
          open
          group
          owner
          ttl
          createdAt
          sessionId
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUserSession">>
    >;
  }

  OnDeleteUserSessionListener(
    filter?: ModelSubscriptionUserSessionFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserSession">>
  > {
    const statement = `subscription OnDeleteUserSession($filter: ModelSubscriptionUserSessionFilterInput) {
        onDeleteUserSession(filter: $filter) {
          __typename
          id
          fingerprint
          client
          open
          group
          owner
          ttl
          createdAt
          sessionId
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUserSession">>
    >;
  }

  OnCreateGroupPreferencesListener(
    filter?: ModelSubscriptionGroupPreferencesFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateGroupPreferences">
    >
  > {
    const statement = `subscription OnCreateGroupPreferences($filter: ModelSubscriptionGroupPreferencesFilterInput) {
        onCreateGroupPreferences(filter: $filter) {
          __typename
          id
          group
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateGroupPreferences">
      >
    >;
  }

  OnUpdateGroupPreferencesListener(
    filter?: ModelSubscriptionGroupPreferencesFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateGroupPreferences">
    >
  > {
    const statement = `subscription OnUpdateGroupPreferences($filter: ModelSubscriptionGroupPreferencesFilterInput) {
        onUpdateGroupPreferences(filter: $filter) {
          __typename
          id
          group
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateGroupPreferences">
      >
    >;
  }

  OnDeleteGroupPreferencesListener(
    filter?: ModelSubscriptionGroupPreferencesFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteGroupPreferences">
    >
  > {
    const statement = `subscription OnDeleteGroupPreferences($filter: ModelSubscriptionGroupPreferencesFilterInput) {
        onDeleteGroupPreferences(filter: $filter) {
          __typename
          id
          group
          prefs
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteGroupPreferences">
      >
    >;
  }

  OnCreateGroupTweetIgnoreListener(
    filter?: ModelSubscriptionGroupTweetIgnoreFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateGroupTweetIgnore">
    >
  > {
    const statement = `subscription OnCreateGroupTweetIgnore($filter: ModelSubscriptionGroupTweetIgnoreFilterInput) {
        onCreateGroupTweetIgnore(filter: $filter) {
          __typename
          id
          url
          ignoredBy
          tweetId
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateGroupTweetIgnore">
      >
    >;
  }

  OnUpdateGroupTweetIgnoreListener(
    filter?: ModelSubscriptionGroupTweetIgnoreFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateGroupTweetIgnore">
    >
  > {
    const statement = `subscription OnUpdateGroupTweetIgnore($filter: ModelSubscriptionGroupTweetIgnoreFilterInput) {
        onUpdateGroupTweetIgnore(filter: $filter) {
          __typename
          id
          url
          ignoredBy
          tweetId
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateGroupTweetIgnore">
      >
    >;
  }

  OnDeleteGroupTweetIgnoreListener(
    filter?: ModelSubscriptionGroupTweetIgnoreFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteGroupTweetIgnore">
    >
  > {
    const statement = `subscription OnDeleteGroupTweetIgnore($filter: ModelSubscriptionGroupTweetIgnoreFilterInput) {
        onDeleteGroupTweetIgnore(filter: $filter) {
          __typename
          id
          url
          ignoredBy
          tweetId
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteGroupTweetIgnore">
      >
    >;
  }

  OnCreateGroupTweetAnnotationsListener(
    filter?: ModelSubscriptionGroupTweetAnnotationsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateGroupTweetAnnotations">
    >
  > {
    const statement = `subscription OnCreateGroupTweetAnnotations($filter: ModelSubscriptionGroupTweetAnnotationsFilterInput) {
        onCreateGroupTweetAnnotations(filter: $filter) {
          __typename
          id
          url
          annotatedBy
          tweetId
          ownerGroups
          annotations
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateGroupTweetAnnotations">
      >
    >;
  }

  OnUpdateGroupTweetAnnotationsListener(
    filter?: ModelSubscriptionGroupTweetAnnotationsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateGroupTweetAnnotations">
    >
  > {
    const statement = `subscription OnUpdateGroupTweetAnnotations($filter: ModelSubscriptionGroupTweetAnnotationsFilterInput) {
        onUpdateGroupTweetAnnotations(filter: $filter) {
          __typename
          id
          url
          annotatedBy
          tweetId
          ownerGroups
          annotations
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateGroupTweetAnnotations">
      >
    >;
  }

  OnDeleteGroupTweetAnnotationsListener(
    filter?: ModelSubscriptionGroupTweetAnnotationsFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteGroupTweetAnnotations">
    >
  > {
    const statement = `subscription OnDeleteGroupTweetAnnotations($filter: ModelSubscriptionGroupTweetAnnotationsFilterInput) {
        onDeleteGroupTweetAnnotations(filter: $filter) {
          __typename
          id
          url
          annotatedBy
          tweetId
          ownerGroups
          annotations
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteGroupTweetAnnotations">
      >
    >;
  }

  OnCreateGroupTwitterUserIgnoreListener(
    filter?: ModelSubscriptionGroupTwitterUserIgnoreFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateGroupTwitterUserIgnore">
    >
  > {
    const statement = `subscription OnCreateGroupTwitterUserIgnore($filter: ModelSubscriptionGroupTwitterUserIgnoreFilterInput) {
        onCreateGroupTwitterUserIgnore(filter: $filter) {
          __typename
          id
          twitterScreenName
          ignoredBy
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateGroupTwitterUserIgnore">
      >
    >;
  }

  OnUpdateGroupTwitterUserIgnoreListener(
    filter?: ModelSubscriptionGroupTwitterUserIgnoreFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateGroupTwitterUserIgnore">
    >
  > {
    const statement = `subscription OnUpdateGroupTwitterUserIgnore($filter: ModelSubscriptionGroupTwitterUserIgnoreFilterInput) {
        onUpdateGroupTwitterUserIgnore(filter: $filter) {
          __typename
          id
          twitterScreenName
          ignoredBy
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateGroupTwitterUserIgnore">
      >
    >;
  }

  OnDeleteGroupTwitterUserIgnoreListener(
    filter?: ModelSubscriptionGroupTwitterUserIgnoreFilterInput
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteGroupTwitterUserIgnore">
    >
  > {
    const statement = `subscription OnDeleteGroupTwitterUserIgnore($filter: ModelSubscriptionGroupTwitterUserIgnoreFilterInput) {
        onDeleteGroupTwitterUserIgnore(filter: $filter) {
          __typename
          id
          twitterScreenName
          ignoredBy
          ownerGroups
          scope
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteGroupTwitterUserIgnore">
      >
    >;
  }
}
