import { StyledInput } from 'components/ContactForm/ContactForm.styled';
import React from 'react';
import { StyledTitle } from './Filter.style';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilter } from 'redux/sliseFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div>
      <StyledTitle>Find contact by name</StyledTitle>
      <StyledInput
        onChange={event => dispatch(filterContacts(event.target.value.trim()))}
        value={filter}
        placeholder="Enter filter value"
        name="filter"
      ></StyledInput>
    </div>
  );
};
