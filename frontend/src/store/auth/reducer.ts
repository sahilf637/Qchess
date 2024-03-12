import React from 'react'

const expired = sessionStorage.getItem("session")?(JSON.parse(sessionStorage.getItem("session") as string).expiry > Date.now() ? true: false):false;

// console.log(expired, JSON.parse(sessionStorage.getItem("session") as string).expiry);


const session = expired ? JSON.parse(sessionStorage.getItem("session") as string).value.sessionId: " "
const email = expired ? JSON.parse(sessionStorage.getItem("session") as string).value.email: " "
const isAuthenticated = expired ? true: false; 

// console.log(session, email);


export const initialState = {
    isAuthenticated: isAuthenticated,
    sessionId: " " || session,
    Email: " " || email,
    loading: false,
    errorMessage: null
}

export const AuthReducer = (initialState: any , action: any) => {
    switch (action.type) {
        case "REQUEST_LOGIN":
            return {
                ...initialState,
                loading: true
            };
        case "LOGIN_SUCCESS":
            return {
                ...initialState,
                isAuthenticated: true,
                Email: action.payload.Email,
                sessionId: action.payload.sessionId,
            };
        case "LOGOUT":
            return {
                ...initialState,
                isAuthenticated: false,
                Email: " ",
                sessionId: " ",
            };
        case "LOGIN_ERROR": 
            return {
                ...initialState,
                errorMessage: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}