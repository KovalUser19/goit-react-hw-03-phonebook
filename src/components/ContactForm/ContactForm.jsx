
import { Component } from "react"
import css from "./ContactForm.module.css"
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',

  }
  handleChange = ({ target: {value, name} }) => {
      return this.setState({
        [name]:  value
      })
  }
  reset = () => {
      this.setState({name:'',number:''})
  }

 handleSubmit = (e)=>{
   e.preventDefault()
   this.props.addContact(this.state);
   this.reset()
  }

  render() {

      return (
        <form  onSubmit={this.handleSubmit}>
          <div className={css.formWrapper}>
            <label htmlFor={this.loginInputId}>Name</label>
            <input className={css.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required />
            <label>Number</label>
            <input className={css.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
            <button className={css.button} type="submit">Add contact</button>
          </div>
        </form>
      )
    }
  }
