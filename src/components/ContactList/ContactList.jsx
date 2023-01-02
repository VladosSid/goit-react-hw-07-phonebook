import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/sliceContacts/sliceContacts';

import { ContactsList } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(store => store.filter.filter);
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <ContactsList>
      {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ContactsList>
  );
};
export default ContactList;
