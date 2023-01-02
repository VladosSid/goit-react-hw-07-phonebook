import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Vlad', number: '30948263846' },
    { id: 'id-2', name: 'Igor', number: '30948262345' },
    { id: 'id-3', name: 'Vova', number: '30234857235' },
  ],
};

const sliceContacts = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
      },
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = sliceContacts.actions;
export const contactReducer = sliceContacts.reducer;
