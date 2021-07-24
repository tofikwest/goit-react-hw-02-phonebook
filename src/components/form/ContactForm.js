import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  telInputId = uuidv4();

  onHandleSubmit = (event) => {
    event.preventDefault();
    if (this.props.sameNameDenied(this.state.name)) {
      return this.props.onSubmit(this.state);
    }
    this.reset();
  };

  onHandleContactForm = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () =>
    this.setState({
      name: "",
      number: "",
    });

  render() {
    return (
      <>
        <form onSubmit={this.onHandleSubmit}>
          <label htmlFor={this.nameInputId}>
            Full Name
            <input
              value={this.state.name}
              onChange={this.onHandleContactForm}
              type="text"
              name="name"
              id={this.nameInputId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
          <label htmlFor={this.telInputId}>
            Mobile number
            <input
              value={this.state.number}
              onChange={this.onHandleContactForm}
              type="tel"
              name="number"
              id={this.telInputId}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>

          <button>Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
