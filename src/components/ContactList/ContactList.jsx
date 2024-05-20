import Contact from "../Contact/Contact"
import css from './ContactList.module.css'
import { useSelector } from "react-redux"
import { selectNameFilter, selectContacts } from "../../redux/filtersSlice"



export default function ContactList() {
    const contacts = useSelector(selectContacts)
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
   