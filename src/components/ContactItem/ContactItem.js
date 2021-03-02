import React from 'react';
import { Link } from 'react-router-dom';
import 'components/UserShowItem/UserShowItem.css';

function ContactItem(props) {
  const { first_name, last_name, id, company, phone, email, notes, application_date, application_follow_up, interview_date, interview_follow_up } = props.show;

  return (
    <div className='Contact_item'>

      <div className='contact_name'>
        <Link to={`/show/${id}`}>
          {first_name} {last_name}
        </Link>
      </div>
      <div className='contact_company'>
        {company}
      </div>
      <div className='contact_phone'>
        {phone || '- - -'}
      </div>
      <div className='contact_email'>
        {email || '- - -'}
      </div>
    </div>
  );
}

export default ContactItem;