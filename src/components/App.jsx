import FormContacts from './FormContacts';
import ContactList from './ContactList';
import FilterContacts from './FilterContacts';

import { GlobalBox } from './App.styled';

export const App = () => {
  return (
    <GlobalBox>
      <h1>Phoneboock</h1>
      <FormContacts />
      <FilterContacts textTitel="Find contacts by name" />
      <ContactList />
      {/* listContacts={filterResult} */}
    </GlobalBox>
  );
};

export default App;
