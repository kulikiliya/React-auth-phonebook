import React, { useEffect } from 'react';
import { ContainerDiv, Ul, Button, Li, Text, Number } from './Contacts.styled';
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
          <Li key={item.id}>
            <Text>{item.name} : </Text> <Number>{item.number}</Number>
            <Button
              onClick={() => {
                dispatch(deleteContactThunk(item.id));
              }}
            >
              Delete
            </Button>
          </Li>
        ))}
      </Ul>
    </ContainerDiv>
  );
};
