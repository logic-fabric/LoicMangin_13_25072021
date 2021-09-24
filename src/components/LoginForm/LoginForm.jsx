import { useEffect, useState } from "react";
import styled from "styled-components";

import { Button } from "../Button/Button";
import { styleVar } from "../../utils/style/styleVariables";

export function LoginForm() {
  const [userInfos, setUserInfos] = useState({
    email: "",
    password: "",
    token: "",
  });

  const [askForAuthentication, setAskForAuthentication] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleInputChange = (event) => {
    const inputName = event.target.id;

    setUserInfos({
      ...userInfos,
      [inputName]: event.target.value,
    });
    setSubmitError(false);
  };

  const handleLoginFormSubmit = (event) => {
    event.preventDefault();

    setAskForAuthentication(true);
  };

  console.log(
    "userInfos =",
    userInfos,
    "| askForAuthentication",
    askForAuthentication,
    "| submitError =",
    submitError
  );

  useEffect(() => {
    if (askForAuthentication) {
      const url = "http://localhost:3001/api/v1/user/login";

      const loginPayload = {
        email: userInfos.email,
        password: userInfos.password,
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
          setUserInfos({
            ...userInfos,
            token: json.body.token,
          });

          console.log("/user/login response to POST:", json);
        })
        .catch((error) => {
          setSubmitError(true);

          setUserInfos({
            ...userInfos,
            token: "",
          });

          console.error(
            `An error has occured while posting to /user/login: ${error}`
          );
        });

      setAskForAuthentication(false);
    }
  }, [userInfos, askForAuthentication]);

  return (
    <form onSubmit={handleLoginFormSubmit}>
      <LabeledInput>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" onChange={handleInputChange} />
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

      <Button type="submit" text="Sign In" callToAction={true} />
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
