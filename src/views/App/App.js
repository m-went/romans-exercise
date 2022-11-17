import { useState } from 'react';
import useModal from '../../hooks/useModal';
import useUsers from '../../hooks/useUsers';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useAuth } from '../../hooks/useAuth';
import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';
import { useError } from '../../hooks/useError';
import AuthenticatedApp from '../../components/AuthenticatedApp/AuthenticatedApp';

function App() {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [chosenUser, setChosenUser] = useState('');
  const { findUser } = useUsers();
  const errorData = useError();

  const auth = useAuth();

  const showUserDetails = async (user) => {
    const foundUser = await findUser(user.id);
    setChosenUser(foundUser);
    openModal();
  };

  return (
    <>
      {errorData.error ? <ErrorDisplay /> : null}
      {auth.user ? (
        <AuthenticatedApp
          chosenUser={chosenUser}
          isOpen={isOpen}
          closeModal={closeModal}
          showUserDetails={showUserDetails}
        />
      ) : (
        <LoginForm handleSignIn={auth.signIn} />
      )}
      ;
    </>
  );
}

export default App;
