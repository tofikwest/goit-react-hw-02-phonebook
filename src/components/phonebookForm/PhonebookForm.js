import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class PhonebookForm extends Component {
  state = {
    name: "",
    number: "",
  };

  nameInputId = uuidv4();
  telInputId = uuidv4();
  filterId = uuidv4();

  onHandleContactForm = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
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
          <input
            value={this.props.filter}
            onChange={this.props.onHandleFilter}
            type="text"
            name="filter"
            id={this.filterId}
          ></input>
          <button>Add contact</button>
        </form>
      </>
    );
  }
}

export default PhonebookForm;
