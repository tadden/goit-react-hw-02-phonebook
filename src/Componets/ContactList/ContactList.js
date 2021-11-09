import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactList extends Component {
   
    render() {
        const {contacts, deleteContact} = this.props;
        return (
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                        <button
                            type='button'
                            onClick={() => deleteContact(id)}>Delete
                        </button>
                    </li>
                )
                )}
            </ul>
        );
    };
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    ).isRequired,
    deleteContact: PropTypes.func.isRequired,
  };

export default ContactList;