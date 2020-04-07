import config from '../config/config'
import TokenService from './token-service'

const AuthApiService = {
    postLogin({ username, password}){
        console.log(username,password)
        return fetch(`${config.API_ENPOINT}/auth/token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ username, password})
        })
        .then(res => {
            res.json()
            }
        )
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