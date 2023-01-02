import { createSlice, nanoid } from '@reduxjs/toolkit';

import { requestContacts } from 'redux/operations/operations';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: initialState,

  extraReducers: {
    [requestContacts.pending](state, action) {
      state.isLoading = true;
    },
    [requestContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [requestContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.contacts.push(action.payload);
  //     },
  //     prepare(name, number) {
  //       return { payload: { id: nanoid(), name, number } };
  //     },
  //   },

  //   deleteContact(state, action) {
  //     const index = state.contacts.findIndex(
  //       contact => contact.id === action.payload
  //     );
  //     state.contacts.splice(index, 1);
  //   },

  //   fetchingInProgress(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, action) {
  //     state.isLoading = false;
  //     state.error = null;
  //     state.items = action.payload;
  //   },
  //   fetchingError(state, action) {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   },
  // },
});

export const {
  addContact,
  deleteContact,
  fetchingError,
  fetchingSuccess,
  fetchingInProgress,
} = sliceContacts.actions;
export const contactReducer = sliceContacts.reducer;
