import jwtDecode from 'jwt-decode'
import config from '../config/config'

const TokenService = {
    saveAuthToken(token){
        window.sessionStorage.setItem(config.TOKEN_KEY, token)
    },
    getAuthToken(){
        return window.sessionStorage.getItem(config.TOKEN_KEY)
    },
    clearAuthtoken(){
        return window.sessionStorage.removeItem(config.TOKEN_KEY)
    },
    hasAuthtoken(){
        return TokenService.getAuthToken()
    },
    parseJwt(jwt){
        return jwtDecode(jwt)
    },
    parseAuthToken(){
        const authToken = this.getAuthToken()

        if(authToken){
            return this.parseJwt(authToken)
        }
    },
    

}

export default TokenService