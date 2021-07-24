import React, { Component } from "react";
import Contacts from "./components/contacts/Contacts";
import PhonebookForm from "./components/phonebookForm/PhonebookForm";
import Section from "./components/section/Section";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  onFormSubmitHandler = (data) => {
    this.setState({ contacts: [...this.state.contacts, data] });
    console.log(this.state.contacts);
  };

  onHandleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <Section title={"Phonebook"}>
          <PhonebookForm
            onHandlerFilter={this.onHandlerFilter}
            onSubmit={this.onFormSubmitHandler}
            onHandleFilter={this.onHandleFilter}
          />
        </Section>
        <Section title={"Contacts"}>
          <Contacts
            contacts={this.state.contacts}
            filter={this.state.filter}
            onDeleteContact={this.onDeleteContact}
          />
        </Section>
      </>
    );
  }
}
export default App;
