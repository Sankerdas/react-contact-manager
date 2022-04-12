
import React from 'react';
import AddContact from './AddContact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';

function App() {
  const contacts = [
    {id: '1', name: "sankerdas", email: 's@gmai.com' },
    {id: '2', name: "john", email: 'j@gmai.com' },
    {id: '3', name: "rahul", email: 'r@gmai.com' },
  ]
  return (
    <div className="ui container">
        <Header/>
        <AddContact/>
        <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
