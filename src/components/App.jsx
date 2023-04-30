import { Component } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title.styled';

export class App extends Component {
  state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');

    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts });
    }
    // this.setState({contacts:[]})
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (this.state.contacts.find(contact => contact.number === number)) {
      alert(`${number} is already exist in contacts`);
      return;
    }
    {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    const { filter } = this.state;
    return (
      <Layout>
        <ContactForm onAdd={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  }
}
