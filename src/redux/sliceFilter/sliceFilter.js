import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = { filter: '' };

const sliceFilter = createSlice({
  name: 'filters',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filterContacts } = sliceFilter.actions;
export const filterReducer = sliceFilter.reducer;
