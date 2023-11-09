import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  deleteContact,
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/sliceContacts';
import { selectFilter } from 'redux/sliseFilter';

import { StyledList } from './ContactList.styled';
import { StyledButton } from 'components/App.styled';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error, loading]);

  if (!filteredContacts.length) {
    return <p>No contacts found.</p>;
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <StyledList>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
              <StyledButton onClick={() => onDeleteContact(id)}>
                Delete
              </StyledButton>
            </li>
          ))}
        </StyledList>
      )}
    </div>
  );
};

export default ContactList;
