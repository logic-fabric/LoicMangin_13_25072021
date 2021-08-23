import { Link } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../../components/Button/Button";

import { styleVar } from "../../utils/style/styleVariables";

export function Error404() {
  return (
    <Error404Main>
      <ErrorMessagesContainer>
        <div>
          <h2>404</h2>
        </div>

        <div>
          <p>Sorry, we can't find any web page for this address.</p>

          <Link to="/">
            <Button
              type="button"
              text="Back to Home page"
              callToAction={true}
            />
          </Link>
        </div>
      </ErrorMessagesContainer>
    </Error404Main>
  );
}

const Error404Main = styled.main`
  padding: 3rem;

  background: ${styleVar.secondary900};
`;

const ErrorMessagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  & > div {
    width: 50%;
    padding: 6rem;
  }

  h2 {
    font-size: 8rem;
  }

  p {
    margin: 0 4rem;

    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
  }

  button {
    margin: 4rem 0 0 0;
  }
`;
