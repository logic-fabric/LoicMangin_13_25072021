import styled from "styled-components";

import { Button } from "../Button/Button";

import { styleVar } from "../../utils/style/styleVariables";

export function EditNameForm(props) {
  const handleInputChange = (event) => {
    const inputName = event.target.id;

    /*
    setUserInputs({
      ...userInputs,
      [inputName]: event.target.value,
    });
    setSubmitError(false);
    */
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <EditFormContainer>
      <form onSubmit={handleEditFormSubmit}>
        <input
          type="text"
          id="first-name"
          placeholder="your first name"
          onChange={handleInputChange}
        />

        <input
          type="text"
          id="last-name"
          placeholder="your last name"
          onChange={handleInputChange}
        />

        <ButtonsContainer>
          <Button type="submit" text="Save" handleClick={() => {}} />

          <Button
            type="button"
            text="Cancel"
            handleClick={props.toggleEditionMode}
          />
        </ButtonsContainer>
      </form>
    </EditFormContainer>
  );
}

const EditFormContainer = styled.div`
  margin: 1.5rem 0;

  input {
    width: 16rem;
    margin: 0 0.5rem;
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 0.25rem;

    font-size: 1.5rem;
    font-weight: 700;

    &::placeholder {
      color: ${styleVar.neutral400};
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    width: 10rem;
    margin: 1rem 0.5rem 0 0.5rem;
    padding: 0.5rem 1.5rem;
    border: 0.125rem solid ${styleVar.primary700};

    color: ${styleVar.primary700};

    background: white;

    &:hover {
      border-color: white;

      color: white;

      background: ${styleVar.primary600};
    }
  }
`;
