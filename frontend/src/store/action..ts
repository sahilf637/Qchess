const URL = import.meta.env.VITE_BASE_URL;

export const signUser = async (dispatch: any, Payload: any) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Payload.data)
    };

    try {
        dispatch({ type: 'REQUEST_LOGIN' });
        const response = await fetch(`${URL}/api/my/user/${Payload.type}`, requestOptions)

        const data = await response.json()

        if (response.ok) {
            const now = new Date();
            const item = {
                value: {
                    sessionId: data.sessionID,
                    email: data.Email
                },
                expiry: now.getTime() + 7 * 24 * 60 * 60 * 1000
            }
            sessionStorage.setItem("session", JSON.stringify(item))

            dispatch({ type: 'LOGIN_SUCCESS' , payload: {
                Email: data.Email,
                sessionId: data.sessionID
            }})
            return data
        }
        return;
    } catch (error) {
        dispatch({ type: 'LOGIN_ERROR', error: error })
    }
}

export const logOut = (dispatch: any) => {
    dispatch({ type: 'LOGOUT' });
    sessionStorage.removeItem('session')
}