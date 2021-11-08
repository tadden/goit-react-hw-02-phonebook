import './App.css';
import { Component } from 'react';
import Container from 'Componets/Container';
import ContactForm from 'Componets/ContactForm';

class App extends Component{
  state = {
    contacts: [],
    name: ''
  }
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Container>
    )
  };
}

export default App;
