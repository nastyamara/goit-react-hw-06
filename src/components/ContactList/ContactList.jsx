import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { useSelector } from "react-redux"
import { selectNameFilter } from "../../redux/filtersSlice"



export default function ContactList() {
    const contacts = useSelector(state => state.contacts.items)
    const valueFilter = useSelector(selectNameFilter);
    
      const filtredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(valueFilter.toLowerCase())
  );


    return( <ul className={css.contactList}> 
        {filtredContacts.map((contact) => (
            <li key={contact.id}>
                <Contact contact={contact} />
            
            </li>))}
    </ul>)
}
   