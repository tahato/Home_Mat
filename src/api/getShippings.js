import axios from 'axios';
import { getItem } from '../../tools/AsyncStorage';
import { API_URL } from './apiUrl';
import { company_code } from './apiUrl';

export const getShippings = async id => {
  const token = await getItem('token');
  const response = await axios
    .post(
      `${API_URL}/api/homemat/shippings?company_code=${company_code}`,
      { id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )
    .then(res => {
      return res.data.data;
    })
    .catch(err => {
      console.log(err.message);
    });
  return response;
};
