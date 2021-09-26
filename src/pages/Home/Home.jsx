import styled from "styled-components";

import { HeroBanner } from "../../components/Banners/Banners";
import { PictoCard } from "../../components/Cards/Cards";

import { styleVar } from "../../utils/style/styleVariables";
import { PICTO_CARDS_CONTENT } from "../../data/pictoCardsContent";

export function Home() {
  return (
    <main>
      <HeroBanner />

      <PictoCardsContainer>
        <h2 className="sr-only">Features</h2>

        {PICTO_CARDS_CONTENT.map(({ picto, altText, title, text }, index) => (
          <PictoCard
            key={`picto-card-${index}`}
            picto={picto}
            altText={altText}
            title={title}
            text={text}
          />
        ))}
      </PictoCardsContainer>
    </main>
  );
}

const PictoCardsContainer = styled.section`
  ${styleVar.largeWrapper}

  display: flex;
`;
