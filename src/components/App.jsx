import { useState } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title } from './Title/Title.styled';


const initialContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

export const  App  = () => {
  const [contacts, setContacts] = useState(initialContacts);
  // const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already exist in contacts`);
      return;
    }
    {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts((prevContacts) => [...prevContacts, newContact]);
      // setContacts((prevContacts)=>{
      //    [...prevContacts,newContact]});
    }
  };

  // ({ contacts }) => ({
  //   contacts: [...contacts, contact],
  // })
  const changeFilter = e => {
    setFilter({ filter: e.currentTarget.value });
  };

 const  getFilteredContacts = () => {
    // const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  
    // const filteredContacts = this.getFilteredContacts();

    // const { filter } = this.state;
    return (
      <Layout>
        <ContactForm onAdd={addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={changeFilter} />
        <ContactList
          contacts={getFilteredContacts()}
          onDeleteContact={deleteContact}
        />
        <GlobalStyle />
      </Layout>
    );
  
}

 // state = {
    // contacts: [
    //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    // ],

  //   filter: '',
  // };

  // const componentDidMount = () => {
  //   const contacts = localStorage.getItem('contacts');

  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts !== null) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  //   // this.setState({contacts:[]})
  // }

  // const componentDidUpdate = (_, prevState) =>  {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
// const initialState = [];
//  const [contacts, setContacts] = useState(initialState);
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');