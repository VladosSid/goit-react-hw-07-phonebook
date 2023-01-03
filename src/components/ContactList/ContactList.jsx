import { useSelector, useDispatch } from 'react-redux';

import { getContacts, getFilter } from '../../redux/selectors/selectors';
import { removeContact } from '../../redux/operations/operations';

import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  console.log(contacts);
  return (
    <ContactsList>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => dispatch(removeContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ContactsList>
  );
};
export default ContactList;
