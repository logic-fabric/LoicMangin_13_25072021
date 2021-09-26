import { useState } from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { AccountCard } from "../../components/Cards/Cards";
import { Button } from "../../components/Button/Button";

import { styleVar } from "../../utils/style/styleVariables";
import { USER_ACCOUNTS } from "../../data/userAccountsMock";

export function UserProfile() {
  const token = useSelector((state) => state.user.token);

  const [editionMode, setEditionMode] = useState(false);

  if (!token) return <Redirect to="/" />;

  console.log("editionMode >", editionMode);

  return (
    <UserProfileMain>
      <UserProfileContainer>
        <h2>Welcome back</h2>
        {editionMode ? "" : <h2>Tony Jarvis!</h2>}

        <Button
          type="button"
          text="Edit Name"
          callToAction={false}
          handleClick={() => setEditionMode(!editionMode)}
        />

        <h2 className="sr-only">Accounts</h2>

        {USER_ACCOUNTS.map(({ accountName, amount, balanceType }, index) => (
          <AccountCard
            key={`account-card-${index}`}
            accountName={accountName}
            amount={amount}
            balanceType={balanceType}
          />
        ))}
      </UserProfileContainer>
    </UserProfileMain>
  );
}

const UserProfileMain = styled.main`
  padding: 2rem 3rem;

  background: ${styleVar.secondary900};

  h2 {
    margin: 0;

    color: white;
    font-size: 2rem;
    font-weight: 700;
  }

  button {
    margin: 1.5rem auto;
  }
`;

const UserProfileContainer = styled.div`
  ${styleVar.largeWrapper}
`;
