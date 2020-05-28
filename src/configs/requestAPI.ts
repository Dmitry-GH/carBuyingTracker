import axios from 'axios';
import {AUTORIA_API_KEY} from './APIKeys';

const API_BASE_URL = 'https://developers.ria.com/auto/';

const axiosMainInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosMainInstance.defaults.headers.common.Accept = 'application/json';
axiosMainInstance.defaults.headers.common['Content-Type'] = 'application/json';

export default async function requestAPI(
  url: string,
  options = {
    params: {
      api_key: AUTORIA_API_KEY,
    },
  },
) {
  const requestOptions = {
    url,
    ...options,
  };

  try {
    const {data} = await axiosMainInstance(requestOptions);
    return data;
  } catch (err) {
    return new Promise((_, reject) => reject(err));
  }
}
