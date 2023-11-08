import { useSelector } from 'react-redux';
import { StyledWrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notificatio } from './Notificatio/Notificatio';
import { getContacts } from 'redux/sliceContacts';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <StyledWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        <ContactList />
      ) : (
        <Notificatio message={'You have no contacts'} />
      )}
    </StyledWrapper>
  );
};
