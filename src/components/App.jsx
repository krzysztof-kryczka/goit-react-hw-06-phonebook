import ContactList from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

const App = () => {

  // const [filter, setFilter] = useState('');

  // const changeFilterValue = e => {
  //   setFilter(e.target.value);
  // };

  // const deleteUser = e => {
  //   const filtered = contacts.filter(contact => contact.id !== e.target.id);
  //   setContacts(filtered);
  // };

  return (
    <>
      <ContactForm />
      {/* <Filter onFilterChange={changeFilterValue} /> */}
      {/* <ContactList
        //contacts={contacts}
        //filter={filter}
        //onClickHandler={deleteUser}
      ></ContactList> */}
    </>
  );
};

export default App;
