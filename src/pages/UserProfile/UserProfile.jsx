import { Redirect } from "react-router";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { AccountCard } from "../../components/Cards/Cards";
import { Button } from "../../components/Button/Button";

import { styleVar } from "../../utils/style/styleVariables";

const USER_ACCOUNTS = [
  {
    accountName: "Checking (x8349)",
    amount: 2082.79,
    balanceType: "Available",
  },
  {
    accountName: "Savings (x6712)",
    amount: 10928.42,
    balanceType: "Available",
  },
  {
    accountName: "Credit Card (x8349)",
    amount: 184.3,
    balanceType: "Current",
  },
];

export function UserProfile() {
  const token = useSelector((state) => state.user.token);

  if (!token) return <Redirect to="/" />

  return (
    <UserProfileMain>
      <UserProfileContainer>
        <h1>
          Welcome back
          <br />
          Tony Jarvis
        </h1>

        <EditButtonContainer>
          <Button type="button" text="Edit Name" callToAction={false} />
        </EditButtonContainer>

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
  padding: 1rem 3rem;

  background: ${styleVar.secondary900};

  h1 {
    color: white;
  }

  button {
    margin: auto;
  }
`;

const UserProfileContainer = styled.div`
  ${styleVar.largeWrapper}
`;

const EditButtonContainer = styled.div`
  margin: 0 0 2rem 0;
`;
