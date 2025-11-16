import axios from "axios";

import { getItem } from "../../tools/AsyncStorage";

export const getDashboard = async (id) => {
  const API_URL = 'https://homemattest.scriptdzshock.com';
  const company_code = 'b2fb';
  const token = await getItem("token");
  const response = await axios
    .get(`${API_URL}/api/homemat/dashboard?company_code=${company_code}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.log(err.message);
    });
  return response;
};
