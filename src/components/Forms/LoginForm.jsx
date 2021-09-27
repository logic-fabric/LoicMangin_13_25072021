import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { setEmail, setToken } from "../../redux/reducers";

import { Button } from "../Button/Button";

import { styleVar } from "../../utils/style/styleVariables";

export function LoginForm() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const [formIsSubmited, setFormIsSubmited] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (event) => {
    const inputName = event.target.id;

    setUserInputs({
      ...userInputs,
      [inputName]: event.target.value,
    });
    setSubmitError(false);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    setFormIsSubmited(true);
  };

  console.log(
    "userInputs =",
    userInputs,
    "| formIsSubmited",
    formIsSubmited,
    "| submitError =",
    submitError
  );

  useEffect(() => {
    if (formIsSubmited) {
      const url = "http://localhost:3001/api/v1/user/login";

      const loginPayload = {
        email: userInputs.email,
        password: userInputs.password,
      };

      const requestOptions = {
        method: "POST",
        body: JSON.stringify(loginPayload),
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Send POST request:
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((json) => {
          dispatch(setEmail(userInputs.email));
          dispatch(setToken(json.body.token));

          console.log("/user/login response to POST:", json);
        })
        .catch((error) => {
          setSubmitError(true);

          setUserInputs({
            ...userInputs,
          });

          console.error(
            `An error has occured while posting to /user/login: ${error}`
          );
        });

      setFormIsSubmited(false);
    }
  }, [dispatch, userInputs, formIsSubmited]);

  if (token) return <Redirect to="/profile" />

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <LabeledInput>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" onChange={handleInputChange} />
      </LabeledInput>

      <LabeledInput>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={handleInputChange} />
      </LabeledInput>

      <LabeledCheckbox>
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </LabeledCheckbox>

      <ErrorMessage className={submitError ? "show-error" : ""}>
        {submitError ? "Incorrect email or password" : ""}
      </ErrorMessage>

      <Button type="submit" text="Sign In" fullWidth={true} />
    </form>
  );
}

const LabeledInput = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 0 1.5rem 0;

  text-align: left;

  label {
    margin: 0 0 0.25rem 0;

    font-size: 1.1rem;
    font-weight: 700;
  }

  input {
    padding: 0.5rem;
    border: 1px solid ${styleVar.neutral900};
    border-radius: 0.25rem;

    font-size: 1.2rem;
  }
`;

const LabeledCheckbox = styled.div`
  display: flex;

  label {
    margin: 0 0 0 0.5rem;
  }
`;

const ErrorMessage = styled.p`
  margin: 1rem 0 1.5rem 0;
  height: 0;

  color: transparent;
  font-size: 1.1rem;
  font-weight: 500;

  transition: all 350ms;

  &.show-error {
    height: auto;

    color: ${styleVar.danger500};
  }
`;
