import config from '../config/config'
import TokenService from './token-service'

const AuthApiService = {
    postUser(user) {
        console.log(user)
        return fetch(`${config.API_ENPOINT}/user`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json()
        )
        .then(data => data)
    },
    postLogin({ username, password}){
        console.log(username,password)
        return fetch(`${config.API_ENPOINT}/auth/token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ username, password})
        })
        .then(res => res.json()
        )
        .then(data => data)
    },
    refreshToken(){
        return fetch(`${config.API_ENPOINT}/auth/token`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then( res => {
            res.json()
        })
    }

}

export default AuthApiService