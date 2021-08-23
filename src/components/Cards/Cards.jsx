import styled from "styled-components";

import { Button } from "../Button/Button";
import { formatAmount } from "../../utils/str/format";
import { styleVar } from "../../utils/style/styleVariables";

export function AccountCard({ accountName, amount, balanceType }) {
  return (
    <AccountCardContainer>
      <div>
        <h3>Argent Bank {accountName}</h3>

        <Amount>${formatAmount(amount)}</Amount>

        <p>{balanceType} Balance</p>
      </div>

      <div>
        <Button type="button" text="View transations" callToAction={false} />
      </div>
    </AccountCardContainer>
  );
}

const AccountCardContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 80%;
  margin: 0 auto 2rem auto;
  padding: 1.5rem;
  border-radius: 0.25rem;

  text-align: left;

  background: white;

  h3 {
    margin: 0 0 0.125rem 0;

    font-size: 1rem;
    font-weight: 400;
  }

  p {
    margin: 0;

    line-height: initial;
  }
`;

const Amount = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;

export function PictoCard({ picto, altText, title, text }) {
  return (
    <PictoCardContainer>
      <img src={picto} alt={altText} />

      <h3>{title}</h3>

      <p>{text}</p>
    </PictoCardContainer>
  );
}

const PictoCardContainer = styled.article`
  flex: 1;

  padding: 2.5rem;

  img {
    width: 10rem;
    padding: 1rem;
    border: 0.5rem solid ${styleVar.primary500};
    border-radius: 50%;
  }

  h3 {
    margin: 1.25rem 0 0.5rem 0;

    color: ${styleVar.primary700};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
