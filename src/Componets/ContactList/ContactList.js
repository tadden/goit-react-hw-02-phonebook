import { Component } from 'react';

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

export default ContactList;