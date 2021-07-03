import React, { Component } from 'react'
import './App.css';

import Section from './section/'
import ContactForm from './contactForm/'
import Contacts from './contacts'

const contacts = [['Glen'], ['Tony'], ['Mike']]

class App extends Component {
  state = {
    contacts: []
  }

  onFormSubmit = (data) => {
    console.log(data);

  }

  render() {
    return (<>

      <Section title='Phonebook'>
        <ContactForm onSubmit={this.onFormSubmit} />
      </Section>
      <Section title='Contacts' />
      <Contacts contacts={contacts} />
      <Section />

    </>
    )
  }
}

export default App