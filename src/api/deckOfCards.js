import axios from "axios"

export const getNewDeck = async () => {
  const response = await axios.get('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
  if (response.data.success) {
    return response.data;
  } else {
    return {};
  }
}

export const getNewCard = async (deckId) => {
  const response = await axios.get(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
  if (response.data.success) {
    return response.data;
  } else {
    return {};
  }
}