import axios, { AxiosRequestConfig } from "axios";
import APIResponse from "../entities/APIResponse";

const { VITE_API_BASE_URL, VITE_API_KEY } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: VITE_API_BASE_URL,
  params: {
    api_key: VITE_API_KEY,
  },
});

class APIClient<T> {
  public constructor(public endpoint: string) {}

  getAll = (config: AxiosRequestConfig) =>
    axiosInstance
      .get<APIResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
}

export default APIClient;
