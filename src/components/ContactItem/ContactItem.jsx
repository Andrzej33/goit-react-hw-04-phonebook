import PropTypes from 'prop-types';

export const ContactItem = ({
  contact: { id, name, number },
  onDeleteContact,
}) => (
  <>
    <p>
      {name}: <span>{number}</span>
    </p>

    <button type="button" onClick={() => onDeleteContact(id)}>
      delete
    </button>
  </>
);

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
