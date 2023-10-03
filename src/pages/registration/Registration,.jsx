import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/user/operation';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ErrorMessage,
  Form,
  Input,
  InputDiv,
  InputSubmit,
  Label,
  Text,
} from './Registration.style';

const Registration = () => {
  const schema = yup.object({
    name: yup.string().required('You must enter smt..'),
    email: yup
      .string()
      .email('Please, enter an email')
      .required('You must enter smt..'),
    password: yup.string().required('You must enter smt..'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const submit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(submit)}>
        <Label>
          <InputDiv>
            <Text>name</Text>
            <Input {...register('name')} />
          </InputDiv>
          <ErrorMessage>{errors?.name && errors.name.message}</ErrorMessage>
        </Label>
        <Label>
          <InputDiv>
            <Text>email</Text>
            <Input {...register('email')} />
          </InputDiv>

          <ErrorMessage>{errors?.email && errors.email.message}</ErrorMessage>
        </Label>
        <Label>
          <InputDiv>
            <Text>password</Text>
            <Input {...register('password')} />
          </InputDiv>

          <ErrorMessage>
            {errors?.password && errors.password.message}
          </ErrorMessage>
        </Label>

        <InputSubmit type="submit" value="Create account" />
      </Form>
    </div>
  );
};

export default Registration;
