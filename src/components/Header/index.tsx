import MenuItem from './MenuItem';
import Styled from './index.styles';
import useTokenAuth from '../../hooks/useTokenAuth';
import { useGoogleAuth } from '../../hooks/useGoogleAuth';

function Header() {
  const { isLoggedIn, clearToken, user } = useTokenAuth();
  const { oauthSignIn: googleOauthSignin } = useGoogleAuth();
  // const { user, actions } = useUser();

  const handleLoginClick = () => {
    googleOauthSignin();
  };
  const handleLogoutClick = () => {
    clearToken();
  };

  console.log(user);

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.Logo>
          <div className="logo-img" />

          <div className="logo-txt-en">Ship-Check</div>
          <div className="logo-txt-kr">쉽첵</div>
        </Styled.Logo>

        <div className="right-container">
          {user && <Styled.ProfileImage user={user} />}

          <MenuItem
            label={isLoggedIn ? 'Logout' : 'Login'}
            onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}
          />
        </div>
      </Styled.Header>
    </Styled.Container>
  );
}

export default Header;
