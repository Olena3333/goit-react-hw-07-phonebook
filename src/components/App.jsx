import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { selectContacts } from 'redux/sliceContacts';
import { fetchAllContactsThunk } from 'redux/operations';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Notificatio } from './Notificatio/Notificatio';

import { StyledWrapper } from './App.styled';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);
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
