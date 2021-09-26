import styled from "styled-components";

import { styleVar } from "../../utils/style/styleVariables";

export function Button({ type, text, callToAction, handleClick }) {
  return (
    <StyledButton type={type} callToAction={callToAction} onClick={handleClick}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: block;

  margin: 0;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;

  color: white;
  font-size: 1.2rem;
  font-weight: 700;

  background: ${styleVar.primary600};

  cursor: pointer;
  transition: all 300ms;

  ${(props) =>
    props.callToAction
      ? `
        width: 100%;`
      : ``}

  &:hover {
    background: ${styleVar.primary700};
  }
`;
