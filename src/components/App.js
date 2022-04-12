
import React, { useState, useEffect } from 'react'; 
// useState is a react hook used to manipulate the state
// useEffect is a react hook used to render the ui based on changes

import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {
  const [contacts, setContacts] = useState([]); // define contacts as state & use setContacts to manupulate the state
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts, { id: Date.now(), ...contact}]);
  }
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=> {
    const localContacts = JSON.parse( localStorage.getItem("contacts", JSON.stringify(contacts) ));
    setContacts(localContacts)

  }, []);

  useEffect(()=> {
    localStorage.setItem("contacts", JSON.stringify(contacts) )
  }, [contacts])

  return (
    <div className="ui container">
        <Header/>
        <AddContact addContactHandler={addContactHandler} />
        <ContactList 
          contacts={contacts} 
          getContactId={removeContactHandler} // get the id to be deleted
        />
    </div>
  );
}

export default App;
