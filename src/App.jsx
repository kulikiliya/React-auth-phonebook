import Main from 'pages/contactBook/ContactBook';
import Nav from 'components/navigation/Navbar';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NotFound from 'pages/notFound/NotFound';
import Registration from 'pages/registration/Registration,';
import Login from 'pages/login/Login';
import Home from 'pages/home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from 'redux/user/selectors';
import { refreshThunk } from 'redux/user/operation';

export const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(refreshThunk());
    // .unwrap()
    // .then(() => navigate('/contactBook'));
  }, [dispatch, navigate]);

  return !isRefresh ? (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />} />
          <Route path="/contactBook" element={<Main />} />

          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  ) : (
    <>
      <p>Loading</p>
    </>
  );
};
