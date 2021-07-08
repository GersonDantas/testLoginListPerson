import {api} from "../api/clientSide"
import {SignInData} from "@store/context/AuthContext"

export const handleLogin = async (data: SignInData) => {
    return await api.post("/api/v1/Auth/LogIn", data).then((res) => res.data);
};