import axios from '../configs';
import Cookies from 'js-cookie';

export function getData(url, params) {
  const token = Cookies.get('token');

  return axios.get(`${url}`, {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function postData(url, payload) {
  const token = Cookies.get('token');

  return await axios.post(`${url}`, payload, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
