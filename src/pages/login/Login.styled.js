import styled from 'styled-components';

export const ErrorMessage = styled.span`
  margin-top: 10px;
  color: red;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  color: #000;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  border: 2px solid #000;
  color: #000;
  margin-top: 5px;
`;

export const InputSubmit = styled.input`
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  padding: 10px 20px;
  margin-top: 10px;

  &&:hover,
  &&:focus {
    background-color: #000;
    color: #fff;
  }
`;
