import React, { useState } from 'react';
import { StyledForm, StyledInput } from './ContactForm.styled';
import { StyledButton } from 'components/App.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/sliceContacts';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handelOnChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handelOnSubmit = event => {
    event.preventDefault();
    const newContact = {
      name: name.trim(),
      number: number.trim(),
      id: nanoid(),
    };
    if (!name.trim()) {
      return;
    }

    handleAddContact(newContact);
    setName('');
    setNumber('');
  };
  const handleAddContact = newContact => {
    const isDublicate = contacts.find(
      contact => contact.name === newContact.name
    );
    if (isDublicate) {
      toast.warning(`${newContact.name} is already in contacts.`);
    } else {
      dispatch(addContact(newContact));
      toast.info(`${newContact.name} add`);
    }
  };
  return (
    <StyledForm onSubmit={handelOnSubmit}>
      <label>
        Name:
        <StyledInput
          onChange={handelOnChange}
          type="text"
          placeholder="Enter the name "
          name="name"
          value={name}
          required
        />
      </label>
      <label>
        Number:
        <StyledInput
          onChange={handelOnChange}
          placeholder="Enter the number"
          value={number}
          type="tel"
          name="number"
          required
        />
      </label>
      <StyledButton disabled={!name}>Add contact</StyledButton>
    </StyledForm>
  );
};
