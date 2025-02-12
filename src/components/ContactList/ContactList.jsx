import { useSelector } from 'react-redux';

import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

import { selectedContact } from '../../redux/contactsSlice';
import { selectedFilter } from '../../redux/filtersSlice';

const getContactsFiltered = (contacts, valueFilterOff) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(valueFilterOff.toLowerCase())
  );

const ContactList = () => {
  const contacts = useSelector(selectedContact);
  const valueFilterOff = useSelector(selectedFilter);
  const filteredContacts = getContactsFiltered(contacts, valueFilterOff);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, number, name }) => (
        <Contact key={id} id={id} number={number} name={name} />
      ))}
    </ul>
  );
};

export default ContactList;
