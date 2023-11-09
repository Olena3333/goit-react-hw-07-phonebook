import { configureStore } from '@reduxjs/toolkit';

import { sliceContacts } from './sliceContacts';
import { sliceFilter } from './sliseFilter';

const store = configureStore({
  reducer: {
    contacts: sliceContacts.reducer,
    filter: sliceFilter.reducer,
  },
});

export default store;
