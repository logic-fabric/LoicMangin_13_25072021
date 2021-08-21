import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";

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

    color: ${styleVar.neutral900};
    font-size: 1.25rem;
    font-weight: 700;
  }
`;
