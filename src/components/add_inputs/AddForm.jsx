import { FormDiv, Button, Input, Label, ErrorMessage } from './AddForm.styled';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/filter/operation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const AddForm = () => {
  const schema = yup.object({
    name: yup
      .string()
      .required('You must enter smt..')
      .min(3, 'Must be more than 3')
      .max(12, 'Must be less than 12'),
    number: yup.number().required('You must enter smt..').positive().integer(),
  });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onSubmit', resolver: yupResolver(schema) });

  const submit = (name, number) => {
    dispatch(addContactThunk(name, number));
  };

  return (
    <FormDiv onSubmit={handleSubmit(submit)}>
      <Label>
        Name
        <Input {...register('name')} />
        <ErrorMessage>{errors?.name && errors.name.message}</ErrorMessage>
      </Label>
      <label>
        Phone
        <Input {...register('number')} />
        <ErrorMessage>{errors?.number && errors.number.message}</ErrorMessage>
      </label>

      <Button>Add contact</Button>
    </FormDiv>
  );
};
