import styled from "styled-components";

import { styleVar } from "../../utils/styleVariables";
import HeroIllustration from "../../assets/money-tree.jpeg";

export function HeroBanner() {
  return (
    <HeroBannerContainer>
      <CardContainer>
        <HeroBannerCard>
          <h2 className="sr-only">Promoted Content</h2>

          <h3>No fees.</h3>
          <h3>No minmum deposit.</h3>
          <h3>Hign interest rates.</h3>

          <p>Open a saving account with Argent Bank today!</p>
        </HeroBannerCard>
      </CardContainer>
    </HeroBannerContainer>
  );
}

const HeroBannerContainer = styled.div`
  height: 26rem;

  background: ${styleVar.neutral700} url(${HeroIllustration}) 0 -11rem no-repeat;
  background-size: cover;
`;

const CardContainer = styled.div`
  position: relative;

  ${styleVar.largeWrapper}
`;

const HeroBannerCard = styled.section`
  position: absolute;
  top: 6rem;
  right: 6rem;
  
  width: 22.5rem;
  padding: 2rem;

  text-align: left;

  background: white;

  h3 {
    margin: 0 0 0.5rem 0;

    font-size: 1.5rem;
    font-weight: 700;
  }

  p {
    margin: 1.25rem 0 0 0;

    font-size: 1.25rem;
  }
`;
