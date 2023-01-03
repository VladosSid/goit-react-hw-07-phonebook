import { createSlice } from '@reduxjs/toolkit';

import {
  requestContacts,
  addStoreContacts,
  removeContact,
} from 'redux/operations/operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: {
    [requestContacts.pending]: handlePending,
    [requestContacts.rejected]: handleRejected,

    [addStoreContacts.pending]: handlePending,
    [addStoreContacts.rejected]: handleRejected,

    [removeContact.pending]: handlePending,
    [removeContact.rejected]: handleRejected,

    [requestContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },

    [addStoreContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },

    [removeContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const contactReducer = sliceContacts.reducer;
