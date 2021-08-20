import { Link } from "react-router-dom";
import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";
import ArgentBankLogo from "../../assets/argent-bank-logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <MainNav>
        <MainNavList>
          <li>
            <HeaderLink className="logo-link" to="/">
              <LogoBox>
                <img src={ArgentBankLogo} alt="Argent Bank" />
              </LogoBox>
            </HeaderLink>
            <h1 className="sr-only">Argent Bank</h1>
          </li>

          <li>
            <i className="fa fa-user-circle"></i>
            <HeaderLink to="/login">Sign In</HeaderLink>
          </li>
        </MainNavList>
      </MainNav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  margin: 0 0 2rem 0;
`;

const MainNav = styled.nav`
  ${styleVar.largeWrapper}
`;

const MainNavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.25rem 1rem;

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
