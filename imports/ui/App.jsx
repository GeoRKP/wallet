import React from 'react';
import {ContactForm} from "./ContactsForm";
import {ContactList} from "./ContactsList";

export const App = () => (
  <div>
    <h1>Meteor Wallet - Galaxy</h1>
    <ContactForm />
    <ContactList />
  </div>
);