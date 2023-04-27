import PropTypes from 'prop-types';
import { ContactItem, ContactButton } from './ContactList.styled';
export const ContactList = ({ array, deleteContact }) => {
  return (
    <ul>
      {array.map(arr => (
        <ContactItem key={arr.id}>
          {arr.name} : {arr.number}
          <ContactButton type="button" onClick={() => deleteContact(arr.id)}>
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  array: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
