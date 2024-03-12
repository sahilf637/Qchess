import React, { useContext, useReducer } from "react";
import { initialState, AuthReducer } from "./reducer";

const authContext = React.createContext({
    isAuthenticated: false,
    sessionId: " ",
    Email: " " ,
    loading: false,
    errorMessage: null
});
const authDispatchContext = React.createContext({});

export function useAuthState() {
    const context = useContext(authContext)

    if(context === undefined){
        throw new Error("authContext must be used withini a provider")
    }

    return context
}

export function useAuthDispatch() {
    const context = useContext(authDispatchContext)

    if(context === undefined){
        throw new Error("useAuthDispatch must be used withini a provider")
    }    

    return context
}

type prop  = {
    children: React.ReactNode
}

const AuthProvider = ({ children }: prop) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState)

    return (
        <authContext.Provider value={user}>
            <authDispatchContext.Provider value={dispatch}>
                {children}
            </authDispatchContext.Provider>
        </authContext.Provider>
    )
}

export default AuthProvider