import React, { Component } from "react";

class Contacts extends Component {
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
          <li key={id}>
            {name}: {number}
          </li>
        ))}
      </ul>
    );
  }
}

export default Contacts;

// .filter((item) => {
//   return item.indexOf(this.state.filter) > -1;
// }
