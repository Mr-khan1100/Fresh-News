import axios from "axios";
import { API_AUTH, BASE_URL, generalConstants } from "@constants/appContants";

const leading =  BASE_URL;


export async function makeRequest({method, url, data, category, country, query, from}) {
  return new Promise(function (resolve, reject) {
    try {
      axios({
        method: method,
        url: `${leading}${url}`,
        data: data,
        params: {
          category: category,
          country: country,
          q: query,
          from: from,
          apiKey: API_AUTH,
        },
      })
      .then(function (response) {
        resolve(response);
      })
      .catch(function (error) {
        if (error.response) {
          const apiError = error.response.data || {};
          reject(new Error(
            apiError.message || 
            `Request failed with status code ${error.response.status}`
          ));
        } else if (error.request) {
          reject(new Error(generalConstants.NO_RESPONSE));
        } else {
          reject(new Error(generalConstants.ERROR_REQUEST));
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
  