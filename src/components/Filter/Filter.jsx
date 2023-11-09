import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, selectFilter } from 'redux/sliseFilter';

import { StyledTitle } from './Filter.style';
import { StyledInput } from 'components/ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
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
