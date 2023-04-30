import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { ListOfContacts } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListOfContacts>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        );
      })}
    </ListOfContacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
