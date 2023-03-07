// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UserPreferences, UserDashboard, GroupDashboard, SavedGraph, TextAutocomplete, UserSession, GroupPreferences } = initSchema(schema);

export {
  UserPreferences,
  UserDashboard,
  GroupDashboard,
  SavedGraph,
  TextAutocomplete,
  UserSession,
  GroupPreferences
};