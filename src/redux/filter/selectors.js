import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contact.contacts.items;
export const selectLoading = state => state.contact.contacts.loading;
export const selectError = state => state.contact.contacts.error;
export const selectFilter = state => state.contact.filter;

export const selectMyFilter = createSelector(
  [selectContact, selectFilter],
  (items, filter) => {
    console.log(filter);
    return items.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
