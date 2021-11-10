import './App.css';
import { Component } from 'react';
import Container from 'Componets/Container';
import ContactForm from 'Componets/ContactForm';
import ContactList from 'Componets/ContactList';
import Filter from 'Componets/Filter';
import shortId from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
    ],
    filter: ''
  };

  addContact = ({ name, number }) => {

    const { contacts } = this.state;

    const newContact = {
      id: shortId.generate(),
      name: name,
      number: number,
    };
    if (
      contacts.find(contact => contact.name.toLowerCase() === newContact.name.toLowerCase()) ||
      contacts.find(contact => contact.number === newContact.number)
    ) {
      alert(`${newContact.name} contact is already exists!`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };


  deleteContact = (contactId) => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== contactId)
    }));
  };
    
    
  changeFilter = e => {
    this.setState({filter: e.currentTarget.value})
  }

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const visibleContacts = this.filterContacts();
    const { filter } = this.state;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <Filter value={filter} onChange={ this.changeFilter}/>
        <h2>Contacts</h2>
        <ContactList contacts={visibleContacts} deleteContact={this.deleteContact} />
      </Container>
    )
  };
}


export default App;
