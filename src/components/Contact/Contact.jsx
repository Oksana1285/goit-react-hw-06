import { BsPerson } from 'react-icons/bs';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { MdPhoneInTalk } from 'react-icons/md';

import css from './Contact.module.css';

const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <div className={css.contactContainer}>
      <div className={css.contactText}>
        <h2 className={css.contactName}>
          <BsPerson size="22" />
          {name}
        </h2>
        <p className={css.contactNumber}>
          <MdPhoneInTalk />
          <a href={`tel: ` + number}>{number}</a>
        </p>
      </div>
      <button
        className={css.buttonDelete}
        onClick={handleDelete}
        type="button"
        aria-label="delete button"
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
