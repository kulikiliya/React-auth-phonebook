import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { loginThunk } from 'redux/user/opertation';
import { selectIsLogin } from 'redux/user/selectors';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  ErrorMessage,
  Form,
  Input,
  InputSubmit,
  Label,
  Text,
} from './Login.styled';
const Login = () => {
  const schema = yup.object({
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
  const isLogin = useSelector(selectIsLogin);
  const submit = data => {
    console.log(data);
    dispatch(loginThunk(data));
  };
  if (isLogin) {
    return <Navigate to="/contactbook" />;
  }

  return (
    <div>
      <Form onSubmit={handleSubmit(submit)}>
        <Label>
          <Text>email</Text>
          <Input {...register('email')} />
          <ErrorMessage>{errors?.email && errors.email.message}</ErrorMessage>
        </Label>
        <Label>
          <p>password</p>
          <Input {...register('password')} />
          <ErrorMessage>
            {errors?.password && errors.password.message}
          </ErrorMessage>
        </Label>

        <InputSubmit type="submit" value="Login" />
      </Form>
    </div>
  );
};

export default Login;
