import axios from "axios";

const REGISTER_API_BASE_URL = "http://localhost:8080/api/v1/user/save";

class RegistrationService{
    createRegisind(regis){
        return axios.post(REGISTER_API_BASE_URL,regis);
    }
}

export default new RegistrationService()