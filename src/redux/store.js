import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './sliceContacts/sliceContacts';
import { filterReducer } from './sliceFilter/sliceFilter';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
