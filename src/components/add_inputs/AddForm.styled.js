import styled from 'styled-components';

export const FormDiv = styled.form`
  width: 250px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &:hover,
  &:focus {
    background-color: #000;
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 2px solid #000;
  color: #000;
  margin-top: 5px;
`;

export const Label = styled.label`
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  color: #000;
`;

export const ErrorMessage = styled.span`
  margin-top: 10px;
  color: red;
`;
