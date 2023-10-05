import React, { useEffect, useState } from "react";
import { Card, CardHolder, GameButtons, GameOptions, GameOver, PlayButton, PokerGameContainer } from "./style";
import pokerTableImg from '../../core/assets/images/pokertable.jpg'
import { getNewCard, getNewDeck } from "../../api/deckOfCards";

const HighCards = {
  "KING": 10,
  "QUEEN": 10,
  "JACK": 10,
  "ACE": 11
}

const GameStatus = {
  IDLE: "IDLE",
  LOST: "LOST",
  WON: "WON",
  PLAYING: "PLAYING",
  TIE: "TIE"
};

const GamePage = () => {
  // TODO: Refactor redundant code
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStatus, setGameStatus] = useState(GameStatus.IDLE);
  const [dealerHand, setDealerHand] = useState([]);
  const [dealerScore, setDealerScore] = useState(0);

  const getCard = async () => {
    if (gameStatus !== GameStatus.PLAYING) {
      setCards([]);
      setDealerHand([]);
      setScore(0);
      const newDeck = await getNewDeck();
      setDeck(newDeck);
      setGameStatus(GameStatus.PLAYING);
      const newPlayerCard = await getNewCard(deck.deck_id);
      setCards([...newPlayerCard.cards]);
      const newDealerCard = await getNewCard(deck.deck_id);
      setDealerHand([...newDealerCard.cards]);
    } else {
      const newPlayerCard = await getNewCard(deck.deck_id);
      setCards([...cards, ...newPlayerCard.cards]);
      if (dealerScore <= 16) {
        const newDealerCard = await getNewCard(deck.deck_id);
        setDealerHand([...dealerHand, ...newDealerCard.cards]);
      }
    }
  }

  const resignGame = () => {
    setGameStatus(GameStatus.LOST)
  }

  const gameDecision = async () => {
    let dealerLastMoveScore = dealerScore;
    if (dealerScore <= 16) {
      const newDealerCard = await getNewCard(deck.deck_id);
      const translateValue = HighCards[newDealerCard.cards[0].value];
      if (translateValue) {
        dealerLastMoveScore += translateValue
      } else {
        dealerLastMoveScore += parseInt(newDealerCard.cards[0].value);
      };
      setDealerHand([...dealerHand, ...newDealerCard.cards])
      setDealerScore(dealerLastMoveScore)
    }
    if (score > 21 && dealerScore > 21) {
      setGameStatus(GameStatus.TIE);
    }
    if (score > dealerLastMoveScore) {
      setGameStatus(GameStatus.WON);
    } else if (score < dealerLastMoveScore) {
      setGameStatus(GameStatus.LOST);
    } else {
      setGameStatus(GameStatus.TIE);
    }
  }

  useEffect(() => {
    const initializeGame = async () => {
      const newDeck = await getNewDeck();
      setDeck(newDeck);
    }
    !deck?.success && initializeGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (cards.length > 0) {
      let newScore = 0;
      cards.forEach(card => {
        const translateValue = HighCards[card.value];
        if (translateValue) {
          newScore += translateValue;
        } else {
          newScore += parseInt(card.value);
        }
      });
      setScore(newScore);

      if (newScore === 21) {
        setGameStatus(GameStatus.WON);
      } else if (newScore > 21) {
        setGameStatus(GameStatus.LOST);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

  useEffect(() => {
    if (dealerHand.length > 0) {
      let newScore = 0;
      dealerHand.forEach(card => {
        const translateValue = HighCards[card.value];
        if (translateValue) {
          newScore += translateValue;
        } else {
          newScore += parseInt(card.value);
        }
      });
      setDealerScore(newScore);

      if (newScore === 21) {
        setGameStatus(GameStatus.LOST);
      } else if (newScore > 21) {
        setGameStatus(GameStatus.WON);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealerHand]);

  useEffect(() => {

  }, [score, dealerScore])

  return (
    <>
      {(gameStatus === GameStatus.WON ||
        gameStatus === GameStatus.LOST ||
        gameStatus === GameStatus.TIE
      ) &&
        (<GameOver>
          {gameStatus}
        </GameOver>
        )}
      {gameStatus !== GameStatus.PLAYING && (
        <PlayButton onClick={getCard}>
          {gameStatus === GameStatus.IDLE ? 'Play' : 'Play again'}
        </PlayButton>
      )}
      <PokerGameContainer backgroundImage={pokerTableImg}>
        <CardHolder>
          {dealerHand && dealerHand.length > 0 &&
            dealerHand.map(dealerHand => (
              <Card cardImg={dealerHand.image} />
            )
            )}
        </CardHolder>
        <CardHolder>
          {cards && cards.length > 0 &&
            cards.map(card => (
              <Card cardImg={card.image} />
            )
            )}
        </CardHolder>
      </PokerGameContainer>
      <GameOptions>
        <span style={{ color: '#fff', fontWeight: 'bold' }}>Dealer: {dealerScore}</span>
        <br />
        <span style={{ color: '#fff', fontWeight: 'bold' }}>Player: {score}</span>
        <GameButtons disabled={gameStatus !== GameStatus.PLAYING} onClick={getCard}>Call</GameButtons>
        <GameButtons disabled={gameStatus !== GameStatus.PLAYING} onClick={gameDecision}>Stay</GameButtons>
        <GameButtons disabled={gameStatus !== GameStatus.PLAYING} onClick={resignGame}>Fold</GameButtons>
      </GameOptions>
    </>
  );
};

export default GamePage;
