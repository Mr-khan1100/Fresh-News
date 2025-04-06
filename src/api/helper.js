import axios from "axios";
import { API_AUTH, BASE_URL } from "@constants/appContants";

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
            reject(error);
          });
      } catch (error) {
        reject(error);
      }
    });
  }
  