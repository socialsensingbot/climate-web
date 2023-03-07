import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUserPreferences = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPreferences, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly prefs?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserPreferences = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPreferences, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly prefs?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserPreferences = LazyLoading extends LazyLoadingDisabled ? EagerUserPreferences : LazyUserPreferences

export declare const UserPreferences: (new (init: ModelInit<UserPreferences>) => UserPreferences) & {
  copyOf(source: UserPreferences, mutator: (draft: MutableModel<UserPreferences>) => MutableModel<UserPreferences> | void): UserPreferences;
}

type EagerUserDashboard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDashboard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly dashboard: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserDashboard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserDashboard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly owner?: string | null;
  readonly dashboard: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserDashboard = LazyLoading extends LazyLoadingDisabled ? EagerUserDashboard : LazyUserDashboard

export declare const UserDashboard: (new (init: ModelInit<UserDashboard>) => UserDashboard) & {
  copyOf(source: UserDashboard, mutator: (draft: MutableModel<UserDashboard>) => MutableModel<UserDashboard> | void): UserDashboard;
}

type EagerGroupDashboard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupDashboard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group: string;
  readonly dashboard: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupDashboard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupDashboard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group: string;
  readonly dashboard: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupDashboard = LazyLoading extends LazyLoadingDisabled ? EagerGroupDashboard : LazyGroupDashboard

export declare const GroupDashboard: (new (init: ModelInit<GroupDashboard>) => GroupDashboard) & {
  copyOf(source: GroupDashboard, mutator: (draft: MutableModel<GroupDashboard>) => MutableModel<GroupDashboard> | void): GroupDashboard;
}

type EagerSavedGraph = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SavedGraph, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly state: string;
  readonly group?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySavedGraph = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SavedGraph, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly title: string;
  readonly state: string;
  readonly group?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SavedGraph = LazyLoading extends LazyLoadingDisabled ? EagerSavedGraph : LazySavedGraph

export declare const SavedGraph: (new (init: ModelInit<SavedGraph>) => SavedGraph) & {
  copyOf(source: SavedGraph, mutator: (draft: MutableModel<SavedGraph>) => MutableModel<SavedGraph> | void): SavedGraph;
}

type EagerTextAutocomplete = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TextAutocomplete, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly text: string;
  readonly group?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTextAutocomplete = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TextAutocomplete, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly type: string;
  readonly text: string;
  readonly group?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TextAutocomplete = LazyLoading extends LazyLoadingDisabled ? EagerTextAutocomplete : LazyTextAutocomplete

export declare const TextAutocomplete: (new (init: ModelInit<TextAutocomplete>) => TextAutocomplete) & {
  copyOf(source: TextAutocomplete, mutator: (draft: MutableModel<TextAutocomplete>) => MutableModel<TextAutocomplete> | void): TextAutocomplete;
}

type EagerUserSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSession, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly fingerprint?: string | null;
  readonly client?: string | null;
  readonly open: boolean;
  readonly group: string;
  readonly owner?: string | null;
  readonly ttl?: number | null;
  readonly createdAt?: string | null;
  readonly sessionId?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserSession = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSession, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly fingerprint?: string | null;
  readonly client?: string | null;
  readonly open: boolean;
  readonly group: string;
  readonly owner?: string | null;
  readonly ttl?: number | null;
  readonly createdAt?: string | null;
  readonly sessionId?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserSession = LazyLoading extends LazyLoadingDisabled ? EagerUserSession : LazyUserSession

export declare const UserSession: (new (init: ModelInit<UserSession>) => UserSession) & {
  copyOf(source: UserSession, mutator: (draft: MutableModel<UserSession>) => MutableModel<UserSession> | void): UserSession;
}

type EagerGroupPreferences = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupPreferences, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group: string;
  readonly prefs?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGroupPreferences = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GroupPreferences, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly group: string;
  readonly prefs?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GroupPreferences = LazyLoading extends LazyLoadingDisabled ? EagerGroupPreferences : LazyGroupPreferences

export declare const GroupPreferences: (new (init: ModelInit<GroupPreferences>) => GroupPreferences) & {
  copyOf(source: GroupPreferences, mutator: (draft: MutableModel<GroupPreferences>) => MutableModel<GroupPreferences> | void): GroupPreferences;
}