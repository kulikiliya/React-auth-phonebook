import React, { useEffect } from 'react';
import { ContainerDiv, Ul, Button } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectMyFilter } from 'redux/filter/selectors';
import { deleteContactThunk, fetchContacts } from 'redux/filter/operation';

export const Contacts = () => {
  const dispatch = useDispatch();
  const myFilter = useSelector(selectMyFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerDiv>
      <Ul>
        {myFilter.map(item => (
          <li key={item.id}>
            {item.name}: {item.phone}
            <Button
              onClick={() => {
                dispatch(deleteContactThunk(item.id));
              }}
            >
              Delete
            </Button>
          </li>
        ))}
      </Ul>
    </ContainerDiv>
  );
};
