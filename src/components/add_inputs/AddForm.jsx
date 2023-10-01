import { useState } from 'react';
import { FormDiv, Button, Input } from './AddForm.styled';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/filter/operation';

export const AddForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(addContactThunk({ name, phone }));

    setName('');
    setPhone('');
  };

  return (
    <FormDiv onSubmit={handleSubmit}>
      <label>
        Name
        <Input
          onChange={handleInput}
          value={name}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Phone
        <Input
          onChange={handleInput}
          value={phone}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button>Add contact</Button>
    </FormDiv>
  );
};
