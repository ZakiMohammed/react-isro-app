import { ActionCreatorWithPayload, ActionCreatorWithoutPayload } from '@reduxjs/toolkit';

export interface SearchModel {
  placeholder: string;
  value: string | null;
  search: ActionCreatorWithPayload<string, string>;
  clearSearch: ActionCreatorWithoutPayload<string>;
}
