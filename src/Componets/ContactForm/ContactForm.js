import { Component } from 'react';
// import PropTypes from 'prop-types';
// import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        
    };


    render() {
        return (
            <form>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
            </form>
        );
    };
};

export default ContactForm;