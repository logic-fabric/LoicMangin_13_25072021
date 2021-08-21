import styled from "styled-components";

import { HeroBanner } from "../../components/Banners/Banners";
import { PictoCard } from "../../components/Cards/Cards";

import { styleVar } from "../../utils/styleVariables";
import PictoChat from "../../assets/picto-chat.png";
import PictoMoney from "../../assets/picto-money.png";
import PictoShield from "../../assets/picto-shield.png"

const PICTO_CARDS_CONTENT = [
  {
    picto: PictoChat,
    altText: "Chat pictogram",
    title: "You are our #1 priority",
    text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5minutes.",
  },
  {
    picto: PictoMoney,
    altText: "Money pictogram",
    title: "More savings means higher rates",
    text: "The more you save with us, the higher yout interest rate will be!",
  },
  {
    picto: PictoShield,
    altText: "Shield pictogram",
    title: "Security you can trust",
    text: "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

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
