import { useSelector } from 'react-redux';
import css from './ContactList.module.css';

export const ContactList = () => {

  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter.status);

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>
      <ul className={css.contacts__list}>
        {filterContact.map(contact => (
          <li className={css.contacts__item} key={contact.id}>
            {contact.name} : {contact.number}{' '}
            <button
              className={css.contacts__btn}
              // id={id}
              // onClick={onClickHandler}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
