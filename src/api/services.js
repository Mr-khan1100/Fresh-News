import { APP_URL } from "@constants/appRoutes";
import { makeRequest } from "./helper";

const GET = 'GET';
export async function getSelectedCategoryList(category, country) {
    try {
      return await makeRequest({
        method: GET,
        url: APP_URL.topHeadings,
        data: undefined,
        category: category,
        country: country,
      }).then(response => {
        if (response?.data?.status === 'error') {
          throw new Error(response.data.message || 'Something went wrong');
        }
        console.log(response.data.articles);
        
        return response.data.articles;
      });
    } catch (err) {
      throw new Error(err?.message || 'Unexpected error occurred');
    }
}


export async function getSearchResults(query, from) {
  console.log(query,from,'query');
  
  try {
    return await makeRequest({
      method: GET,
      url: APP_URL.everything,
      data: undefined,
      query: query,
      from: from,
    }).then(response => {
      if (response?.data?.status === 'error') {
      console.log(response.data, 'response in search 1');

        throw new Error(response.data.message || 'Something went wrong');
      }
      
      return response.data.articles;
    });
  } catch (err) {
    console.log(err, 'response in search 2');

    throw new Error(err?.message || 'Unexpected error occurred');
  }
}
