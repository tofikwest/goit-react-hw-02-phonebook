import React, { Component } from "react";
import Styles from "./ContactsList.module.css";
class ContactsList extends Component {
  render() {
    const { filter, contacts } = this.props;

    const filteredContacts = filter
      ? contacts.filter((contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

    return (
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={Styles.renderLi} key={id}>
            {name}: {number}
            <button
              className={Styles.btnLi}
              type="button"
              onClick={() => this.props.onDeleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactsList;
