import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

const App = () => {

  // const deleteUser = e => {
  //   const filtered = contacts.filter(contact => contact.id !== e.target.id);
  //   setContacts(filtered);
  // };

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
