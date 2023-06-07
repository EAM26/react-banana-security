import {createContext, useState} from "react";

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {

    const [isAuth, setIsAuth] = useState(false)
    const data = {
        isAuth: isAuth,
        setIsAuth: setIsAuth
    }

    return (
        <AuthContextProvider value={data}>
            {children}
        </AuthContextProvider>)
}