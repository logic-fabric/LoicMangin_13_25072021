import { useState } from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { AccountCard } from "../../components/Cards/Cards";
import { Button } from "../../components/Button/Button";
import { EditNameForm } from "../../components/Forms/EditNameForm";

import { styleVar } from "../../utils/style/styleVariables";
import { USER_ACCOUNTS } from "../../data/userAccountsMock";

export function UserProfile() {
  const token = useSelector((state) => state.user.token);

  const [editionMode, setEditionMode] = useState(false);

  const toggleEditionMode = () => setEditionMode(!editionMode);

  if (!token) return <Redirect to="/" />;

  return (
    <UserProfileMain>
      <UserProfileContainer>
        <h2>Welcome back</h2>

        <EditionContainer>
          {editionMode ? "" : <h3>Tony Jarvis!</h3>}

          {editionMode ? (
            <EditNameForm toggleEditionMode={toggleEditionMode} />
          ) : (
            <Button
              className="btn--edit"
              type="button"
              text="Edit Name"
              center={true}
              handleClick={toggleEditionMode}
            />
          )}
        </EditionContainer>

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

  h2,
  h3 {
    margin: 0;

    color: white;
    font-size: 2rem;
    font-weight: 700;
  }

  h3 {
    margin: 0 0 1.5rem 0;
  }

  article button {
    margin: 1.5rem auto;
  }
`;

const UserProfileContainer = styled.div`
  ${styleVar.largeWrapper}
`;

const EditionContainer = styled.div`
  margin: 0 0 2.5rem 0;

  .btn--edit {
    margin: auto;
  }
`;
