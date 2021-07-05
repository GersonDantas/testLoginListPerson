import api from "../api"

declare interface Data {
    username: string;
    password: string;
}

export const Login = (data: Data) => {
    return api.post("/api/v1/Auth/LogIn", data).then((res) => res.data);
};