import axios from "axios";

import { getItem } from "../../tools/AsyncStorage";

export const getImages = async (id) => {
  const API_URL = 'https://homemattest.scriptdzshock.com';
  const company_code = 'b2fb';
  const token = await getItem("token");
  const response = await axios
    .post(
      `${API_URL}/api/homemat/conception/images?company_code=${company_code}`,
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
