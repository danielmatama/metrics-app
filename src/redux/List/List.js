import axios from 'axios';

const FETCH_COINS = 'react-metrics-webapp/List/FETCH_COINS';
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
        ...el,
        priceUsd: parseFloat(el.priceUsd || 0).toFixed(8),
        supply: parseFloat(el.supply || 0).toFixed(4),
        marketCapUsd: parseFloat(el.marketCapUsd || 0).toFixed(4),
        volumeUsd24Hr: parseFloat(el.volumeUsd24Hr || 0).toFixed(4),
        changePercent24Hr: parseFloat(el.changePercent24Hr || 0).toFixed(8),
        vwap24Hr: parseFloat(el.vwap24Hr || 0).toFixed(8),
      }));
    default:
      return state;
  }
};

export default ListsReducer;
