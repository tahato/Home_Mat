import axios from 'axios';

import { getItem } from '../../tools/AsyncStorage';
import { API_URL } from './apiUrl';
import { company_code } from './apiUrl';
export const getImages = async (id, billId) => {
  // const API_URL = 'https://homemattest.scriptdzshock.com';
  console.log(id);

  const token = await getItem('token');
  const response = await axios
    .post(
      `${API_URL}/api/homemat/conception/images?company_code=${company_code}`,
      { id, bill_id: billId },
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
