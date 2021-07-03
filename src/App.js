import React, { Component } from 'react'
import './App.css';

import Section from './section/'
import ContactForm from './contactForm/'
import Contacts from './contacts'


class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  render() {
    return (<>

      <Section title='Phonebook'>
        <ContactForm />
      </Section>
      <Section title='Contacts' />
      <Contacts />
      <Section />

    </>
    )
  }
}

export default App