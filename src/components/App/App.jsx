

import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import css from './App.module.css'


function App() {


  // const [filter, setFilter] = useState('')
  

 

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
   
      <ContactForm/>
      <SearchBox />
      <ContactList/>
     
     
    </div>
  )
}

export default App