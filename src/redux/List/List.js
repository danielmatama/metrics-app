import axios from 'axios';

const FETCH_COINS = 'FETCH_COINS';
const currencies = [];

export const FetchCoinsSuccess = (data) => ({ type: FETCH_COINS, payload: data });
export const FetchCoinsFunc = () => (dispatch) => {
  axios.get('https://api.coincap.io/v2/assets')
    .then((res) => dispatch(FetchCoinsSuccess(res.data.data))).catch((err) => err);
};

const ListsReducer = (state = currencies, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return action.payload.map((el) => ({
        id: el.id,
        rank: el.rank,
        symbol: el.symbol,
        name: el.name,
        price: parseFloat(el.priceUsd || 0).toFixed(8),
      }));
    default:
      return state;
  }
};

export default ListsReducer;
