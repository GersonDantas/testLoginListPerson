import { api } from "../clientSide";
import { SignInData } from "src/types/index";

export const handleLogin = async (data: SignInData) => {
  return await api
    .post("/api/v1/Auth/LogIn", data)
    .then((res) => res.data)
    .catch((e) => alert(`server error in login ${e.message}`));
};
