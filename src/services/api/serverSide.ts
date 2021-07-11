import axios from "axios";
import { parseCookies } from "nookies";

//parse cookies in server side
export function getApiClient(ctx?: any) {
  const cookies = parseCookies(ctx);
  
  const api = axios.create({
    baseURL: "http://leadsoft.ddns.com.br:18355",
  });

  const token = cookies["Leadsoft.Authorization"]

  if (token) {
    api.defaults.headers["Authorization"] = token
  }

  return api;
}
