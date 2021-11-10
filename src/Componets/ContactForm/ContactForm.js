import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handelChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    };
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
    this.setState({ name: '', number: '' });
  };

   


    render() {
        const { name, number } = this.state;

        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label className={s.label}>
                    Name
                    <input
                        className={s.input}
                        type="text"
                        name="name"
                        value={name}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={this.handelChange}
                    />
                </label>
                <label>
                    Number
                    <input
                        className={s.input}
                        type="tel"
                        name="number"
                        value={number}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.handelChange}
                    />
                </label>
                
                <button
                    className={s.button}
                    type="submit">Add contact</button>
            </form>
        );
    };
};


ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;