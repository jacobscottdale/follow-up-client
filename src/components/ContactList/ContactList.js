import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ContactItem from 'components/ContactItem/ContactItem';
import 'components/UserShowList/UserShowList.css';
import UserContext from 'UserContext';

class ContactList extends Component {
  static contextType = UserContext;

  render() {
    const contacts = this.context.userContacts.map(contact => {
      if (contact.archive_date) {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} updateState={this.props.updateState} />
          </li>);
      }
    });

    return (
      <div className='Contact_list' >
          <h2>Contacts</h2>
          <ul>
            {contacts[0] ? contacts : (<Link to={'/add-contact'}>Add a contact</Link>)}
          </ul>
      </div>
    );
  }

}

export default ContactList;