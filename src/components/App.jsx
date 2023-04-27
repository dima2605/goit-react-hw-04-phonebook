import { Component } from 'react';
import shortid from 'shortid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Wrapper, Title, ContactTitle } from './App.styled';

const LS_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts.length !== contacts.length) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem(LS_KEY);
    const localParce = JSON.parse(contacts);
    if (localParce) {
      this.setState({ contacts: localParce });
    }
  }

  handleSubmitForm = (values, { resetForm }) => {
    const contact = {
      id: shortid.generate(),
      ...values,
    };

    const duplicate = this.duplicateName(contact);
    if (duplicate) {
      return alert(`${contact.name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    resetForm();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  duplicateName = ({ name }) => {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    return contacts.find(({ name }) => name.toLowerCase() === normalizedName);
  };
  deleteContact = Id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== Id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm handleSubmitForm={this.handleSubmitForm} />
        <ContactTitle>Contacts</ContactTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          array={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

export default App;
