import axios from '../interceptors/axiosConfig';
import { BASE_URL,} from "../constants/app-config-constants";

export async function login(loginReqObject: any) {
    try {
        const url = BASE_URL + "/authenticate";
        const { data } = await axios.post(url, loginReqObject);
        let userInfo = data;
        return userInfo;
    } catch (err) { 
        throw err;
    }
}