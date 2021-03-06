import React, { Component } from "react";
import ContactsList from "./components/contactsList/ContactsList";
import Filter from "./components/filter/Filter";
import ContactForm from "./components/form/ContactForm";
import Section from "./components/section/Section";
import { v4 as uuidv4 } from "uuid";

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
  onFormSubmitHandler = (name, number) => {
    if (this.state.contacts.find((contact) => contact.name === name)) {
      alert("Введите другое имя!");
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: uuidv4(), name, number }],
    }));
  };

  onHandleFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  onHandleContactForm = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  deleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };
  render() {
    return (
      <>
        <Section title={"Phonebook"}>
          <ContactForm
            onHandlerFilter={this.onHandlerFilter}
            onSubmit={this.onFormSubmitHandler}
          />
        </Section>
        <Section title={"Contacts"}>
          <Filter
            onHandlerFilter={this.onHandleContactForm}
            filter={this.state.filter}
          />
          <ContactsList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
export default App;
