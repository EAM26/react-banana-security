import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {

    const navigate = useNavigate()

    function login(email) {
        setUserData({isAuth: true, user: email})
        console.log("Gebruiker is ingelogd")
        navigate("/profile")
    }

    function logout() {
        setUserData({isAuth: false, user: ''})
        console.log("Gebruiker is uitgelogd")
        navigate("/")
    }

    const [userData, setUserData] = useState({isAuth: false, user: ''})
    const data = {
        isAuth: userData.isAuth,
        user: userData.user,
        setUserData: setUserData,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>)
}

export default AuthContextProvider