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
        <HomeParagraph>Play against one opponent (the dealer) and aim to get a hand total closest to 21 without exceeding it.</HomeParagraph>
        <HomeParagraph>
          Face cards are worth 10, numbered cards their face value, and Aces worth 11.
        </HomeParagraph>
        <HomeParagraph>If you go over 21, you lose (bust).</HomeParagraph>
        <HomeParagraph>Blackjack is an Ace and a 10-point card.</HomeParagraph>

      </HomeContainer>

    </div>)
}

export default HomePage;
