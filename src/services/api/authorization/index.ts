import  Router  from "next/router"
import { destroyCookie } from "nookies"


export const Logout = () => {
    destroyCookie(null, 'Leadsoft.Authorization')
    Router.push("/")
}

