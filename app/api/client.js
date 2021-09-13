import {create} from 'apisauce';
import { Platform } from "react-native";
// import cache from '../utils/cache';
import authStorage from '../auth/storage'

const apiClient = create({
  baseURL: 'http://192.168.1.152:3000'
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if(!authToken) return;
  request.headers["x-auth-token"] = authToken;
})

const { get } = apiClient;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  // if (response.ok) {
  //     cache.store(url, response.data);
  //     return response;
  // }

  // const data = await cache.get(url);
  // return data ? { ok: true, data } : response;
  return response;
};

export default apiClient;