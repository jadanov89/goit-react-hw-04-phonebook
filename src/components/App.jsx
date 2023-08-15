import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';

const App = () => {
  const initializeContacts = () => {
    const storageContacts = localStorage.getItem('contacts');
    const parsedStorageContacts = JSON.parse(storageContacts);
    return parsedStorageContacts ? parsedStorageContacts : [];
  };

  const [contacts, setContacts] = useState(initializeContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = contact => {
    setContacts(prevContacts => [{ id: nanoid(), ...contact }, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} currentContacts={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onFilterChange={filterContacts} />
      <List contacts={visibleContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
