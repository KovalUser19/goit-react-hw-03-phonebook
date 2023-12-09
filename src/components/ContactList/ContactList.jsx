import css from "./ContactList.module.css"

export const ContactList = (props) => {

   return (
   <ul className={css.items}>
       {props.contacts.map((el) => {
         return <li key={el.id}>{el.name} {el.number}
           <button className={css.button}
             type="button"
             name="delete"
             onClick={()=>props.deleteContact(el.id)}>
               Delete</button>
         </li>
      })
      }
     </ul>
    )

}
