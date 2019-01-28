import axios from 'axios';

const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';
const API_ENDPOINT = 'https://api.deezer.com/';
const instance = axios.create({
  baseURL: `${CORS_ANYWHERE}${API_ENDPOINT}`,
});

export default {
  fetchBy(query, by, limit = 10) {
    return instance.get('/search', {
      params: {
        q: query,
        order: by,
        limit,
      },
    })
      .then(({ data }) => data)
      .catch(err => console.log(err)); // eslint-disable-line
  },
};