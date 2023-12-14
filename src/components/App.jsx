import { Component } from "react"
import { nanoid } from "nanoid"
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import css from "./App.module.css"

export class App extends Component{
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter:'',
  }
  componentDidMount() {
    const localData = localStorage.getItem('contacts')
    if (localData && JSON.parse(localData).length > 0) {
    this.setState({contacts: JSON.parse(localData)})
  }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }

  }
  componentWillUnmount() {
    localStorage.removeItem('contacts')
  }

  ifContactExist = (name) =>
  {
    return this.state.contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())

  }

  addContact = (data) => {

   if (this.ifContactExist(data.name)) {
     alert(`${data.name} is already in contacts`)
     return
    }
    const contact = {...data, id: nanoid()}
    this.setState((prev)=>({
      contacts:[ ...prev.contacts, contact ]
  }))
}

  onDeleteContact = (contactId) => {
    this.setState((prev)=> {
      return { contacts: prev.contacts.filter((el) => el.id !== contactId)}
    })
  }
  onChangeFilter = (e) => {
    this.setState({ filter: e.target.value })
  }

  getVisibleContact = () => {
    const {filter, contacts} = this.state
    return contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  render() {
    const {filter} = this.state
    const visibleContact = this.getVisibleContact()
    console.log('contacts :>> ', this.state)
   return (
     <div className={css.wrapper}>
       <h1>Phonebook</h1>
       <ContactForm addContact={this.addContact}></ContactForm>
       <h2>Contacts</h2>
       <Filter value={filter} filterWord={this.onChangeFilter}></Filter>
       <ContactList contacts={visibleContact} deleteContact={this.onDeleteContact}>
       </ContactList>
    </div>
  );
  }

};
