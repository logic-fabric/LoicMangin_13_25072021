import styled from "styled-components";

import { styleVar } from "../../utils/style/styleVariables";

export function Footer() {
  return (
    <FooterContainer>
      <p>Copyright 2021 Argent Bank</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;

  padding: 2rem 0;
  border-top: 0.125rem solid ${styleVar.neutral300};

  p {
    margin: 0;
  }
`;
