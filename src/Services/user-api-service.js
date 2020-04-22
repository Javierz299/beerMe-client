import TokenService from "./token-service"
import config from "../config/config"

const UserApiService = {
    getUserId(userId){
        return fetch(`${config.API_ENPOINT}/alcohol/${userId}/MyCount`, {
            method: 'GET',
            headers: {
                authrization: `bearer ${TokenService.getAuthToken()}`,
                'Content-Type': 'application/json'
            }
        })
        .then(res => res)
        .then(res => res.json())

    }
}

export default UserApiService