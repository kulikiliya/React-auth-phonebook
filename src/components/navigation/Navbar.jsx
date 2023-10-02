import { NavLink, Navigate, Outlet } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectIsLogin } from 'redux/user/selectors';
import { logoutThunk } from 'redux/user/opertation';
import {
  ButtonLogOut,
  Links,
  NavLi,
  NavUl,
  NavWrapper,
  UserEmail,
} from './Navbar..styled';

export const Nav = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectEmail);
  const isLogin = useSelector(selectIsLogin);

  const handleLogOut = () => {
    dispatch(logoutThunk());
  };
  return (
    <>
      <NavWrapper>
        <NavUl>
          {!isLogin ? (
            <>
              <NavLi>
                <Links to="/goit-react-hw-08-phonebook">Main</Links>
              </NavLi>
              <NavLi>
                <Links to="/registration">Registration</Links>
              </NavLi>
              <NavLi>
                <Links to="/login">Login</Links>
              </NavLi>
            </>
          ) : (
            <>
              <NavLi>
                <Links to="/main">PhoneBook</Links>
              </NavLi>

              <UserEmail>{userEmail}</UserEmail>

              <ButtonLogOut onClick={handleLogOut}>Log Out</ButtonLogOut>
            </>
          )}
        </NavUl>
      </NavWrapper>
      <hr />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
