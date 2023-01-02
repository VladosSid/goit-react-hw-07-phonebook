import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getIsLoading, getError } from '../redux/selectors/selectors';
import { requestContacts } from '../redux/operations/operations';

import FormContacts from './FormContacts';
import ContactList from './ContactList';
import FilterContacts from './FilterContacts';

import { GlobalBox } from './App.styled';

export const App = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestContacts());
  }, []); // eslint-disable-line

  return (
    <GlobalBox>
      <h1>Phoneboock</h1>
      <FormContacts />
      <FilterContacts textTitel="Find contacts by name" />
      {!isLoading && !error && <ContactList />}
    </GlobalBox>
  );
};

export default App;
