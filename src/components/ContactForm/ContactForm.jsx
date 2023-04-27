import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Button,
  InputDescr,
  PhonebookForm,
  PhonebookInput,
  ErrMessage,
} from './ContactForm.styled';
const initialValues = {
  name: '',
  number: '',
};
const shema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required().positive().integer(),
});

export const ContactForm = ({ handleSubmitForm }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={shema}
      onSubmit={handleSubmitForm}
    >
      <PhonebookForm autoComplete="off">
        <label htmlFor="name">
          <InputDescr>Name</InputDescr>
          <PhonebookInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Rosie Simpson"
          />
          <ErrorMessage
            name="name"
            render={message => <ErrMessage>{message}</ErrMessage>}
          />
        </label>
        <label htmlFor="number">
          <InputDescr>Number</InputDescr>
          <PhonebookInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="777 777 77 77"
          />
          <ErrorMessage
            name="name"
            render={message => <ErrMessage>{message}</ErrMessage>}
          />
        </label>

        <Button type="submit">Add contact</Button>
      </PhonebookForm>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
