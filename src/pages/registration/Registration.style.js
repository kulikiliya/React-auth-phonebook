import styled from 'styled-components';

export const InputDiv = styled.div`
  display: flex;

  align-items: center;
  gap: 10px;
`;

export const ErrorMessage = styled.span`
  display: flex;
  justify-content: center;
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
  align-items: stretch;
  gap: 10px;
  margin-bottom: 10px;
  color: #000;
`;

export const Text = styled.p`
  padding: 0;
  margin: 0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border: 2px solid #000;
  color: #000;
  margin-top: 5px;
`;

export const InputSubmit = styled.input`
  width: 100%;
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
