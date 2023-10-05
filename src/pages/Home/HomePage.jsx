import React from "react";
import { HomeBanner, HomeContainer, HomeTitle, HomeParagraph, PlayButton } from "./style";
import img from "../../core/assets/images/pokerbanner.jpg";

const HomePage = () => {

  return (
    <div>
      Home Page
      <HomeBanner backgroundImage={img}>
      </HomeBanner>
      <HomeContainer>
        <PlayButton href="/poker-table">Play</PlayButton>
        <HomeTitle>♠️RULES♠️</HomeTitle>
        <HomeParagraph>Objective: Win by having the best hand or convincing others to fold.</HomeParagraph>
        <HomeParagraph>
          Setup: Standard deck, 2 - 10 players, 2 hole cards, 5 community cards.
        </HomeParagraph>
        <HomeParagraph>Gameplay:
          Small and big blind bets.
          Deal 2 cards.
          Betting rounds: Pre - flop, Flop, Turn, River.</HomeParagraph>
        <HomeParagraph>Showdown: Reveal and compare hands to determine the winner.</HomeParagraph>

      </HomeContainer>

    </div>)
}

export default HomePage;
