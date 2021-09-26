import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { styleVar } from "../../utils/style/styleVariables";
import ArgentBankLogo from "../../assets/argent-bank-logo.png";

export function Header() {
  const token = useSelector((state) => state.user.token);

  return (
    <HeaderContainer>
      <MainNav>
        <Link to="/">
          <LogoBox>
            <img src={ArgentBankLogo} alt="Argent Bank" />
          </LogoBox>
        </Link>

        <h1 className="sr-only">Argent Bank</h1>

        <MainNavList>
          <li>
            <i className="fa fa-user-circle"></i>

            {token ? (
              <HeaderLink to="/profile">[ USER NAME ]</HeaderLink>
            ) : (
              <HeaderLink to="/login">Sign In</HeaderLink>
            )}
          </li>

          {token ? (
            <li>
              <i className="fas fa-sign-out-alt"></i>

              <HeaderLink to="/">Sign Out</HeaderLink>
            </li>
          ) : (
            ""
          )}
        </MainNavList>
      </MainNav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  margin: 0;
`;

const MainNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${styleVar.largeWrapper}
`;

const MainNavList = styled.ul`
  display: flex;

  padding: 0.25rem 1rem;

  li {
    margin: 0 0.5rem;
  }

  li i {
    margin: 0 0.5rem 0 0;
  }
`;

const HeaderLink = styled(Link)`
  color: ${styleVar.neutral700};
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LogoBox = styled.div`
  width: 12.5rem;

  img {
    width: 100%;
  }
`;
