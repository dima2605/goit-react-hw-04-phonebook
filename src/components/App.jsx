import shortid from 'shortid';

import { useLocalStorage } from 'hooks/useLocalStorage';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper, Title, ContactTitle } from './App.styled';
import { useState } from 'react';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);

  const [filter, setFilter] = useState('');

  const handleSubmitForm = (values, { resetForm }) => {
    const contact = {
      id: shortid.generate(),
      ...values,
    };

    const duplicate = duplicateName(contact);
    if (duplicate) {
      return alert(`${contact.name} is already in contacts.`);
    }
    setContacts(prevState => [...prevState, contact]);
    resetForm();
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const duplicateName = ({ name }) => {
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };

  const removeContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm handleSubmitForm={handleSubmitForm} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList array={visibleContacts} deleteContact={removeContact} />
    </Wrapper>
  );
}
