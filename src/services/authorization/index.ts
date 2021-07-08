import  Router  from "next/router"
import { destroyCookie } from "nookies"


export const Logout = () => {
    destroyCookie(null, 'Leadsoft.UserInformation')
    Router.push("/")
}

