import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const deleteContactHandler = (id) => {
        props.getContactId(id) // passing delete id though props
    }
    const renderContactList = props.contacts.map((contact) => {
        return(
            <ContactCard 
                key={contact.id}
                contact={contact}
                clickHandler={deleteContactHandler} />
        )
    })
    return(
        <div className="ui celled list" >
            {renderContactList}
        </div>
    )
}

export default ContactList;