import styled from 'styled-components';

export const ContainerDiv = styled.div`
  margin-top: 20px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border: 2px solid #000;
  color: #000;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 2px solid #000;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  &&:hover,
  &&:focus {
    background-color: #000;
    color: #fff;
  }
`;

export const Text = styled.p`
  margin: 0;
`;

export const Number = styled.p`
  margin: 0;
  margin-right: 10px;
`;
