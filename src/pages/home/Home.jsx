import { Navigate } from 'react-router-dom';
import { Wrapper } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/user/selectors';

const Home = () => {
  const isLogin = useSelector(selectIsLogin);

  if (isLogin) {
    return <Navigate to="/contactBook" />;
  }
  return (
    <>
      <Wrapper>
        <p>Hello, user!</p>
        <p>
          To start work with the phonebook, you need to log in. If you don't
          have an account, feel free to create your own!
        </p>
      </Wrapper>
    </>
  );
};

export default Home;
