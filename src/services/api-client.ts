import axios, { AxiosRequestConfig } from "axios";
import APIResponse from "../entities/APIResponse";

const { VITE_API_KEY } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "43f83f4393e08dbc8174dd5ae78f98a0",
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
