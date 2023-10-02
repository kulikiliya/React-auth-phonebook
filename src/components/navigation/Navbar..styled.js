import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavUl = styled.ul`
  padding: 0;
  display: flex;
  gap: 15px;
`;

export const NavLi = styled.li`
  padding: 10px 0px;
  font-weight: 500;
  list-style-type: none;
`;

export const UserEmail = styled.h2`
  margin: 0;
  padding: 10px 20px;
  font-style: normal;
  font-size: medium;
  font-weight: 600;
  color: #834740;
`;

export const ButtonLogOut = styled.button`
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

export const Links = styled(NavLink)`
  color: #212121;
  text-decoration: none;
  padding: 10px 0px;
  transition: background-color 0.3s, color 0.3s;

  &:hover,
  &:focus,
  &:active {
    color: #834740;
  }
`;
