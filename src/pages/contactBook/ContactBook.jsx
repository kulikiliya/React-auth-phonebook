import { Contacts } from '../../components/contatcs/Contacts';
import { AddForm } from '../../components/add_inputs/AddForm';
import { Filter } from '../../components/filter/Fiter';
import { Wrapper } from './ContactBook.styled';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/user/selectors';

const Main = () => {
  const isLogin = useSelector(selectIsLogin);

  if (!isLogin) {
    return <Navigate to="/goit-react-hw-08-phonebook" />;
  }
  return (
    <>
      <Wrapper>
        <h1>Phonebook</h1>
        <AddForm />
        <h2>Contacts!</h2>
        <Filter />
        <Contacts />
      </Wrapper>
    </>
  );
};

export default Main;
