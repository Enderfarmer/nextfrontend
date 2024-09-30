import { Axios } from "axios";
import { jwtDecode } from "jwt-decode";

class Api extends Axios {
    async authget(url, config, accesstoken, refresh) {
        let conf = config;
        let accessexp = jwtDecode(accesstoken);
        console.log(accessexp);
        if (accessexp.exp < Date.now() / 1000) {
            if (jwtDecode(refresh).exp > Date.now() / 1000) {
                accesstoken = (
                    await this.post("token/refresh/", { refresh: refresh })
                ).data.access;
            } else {
                throw new NotAuthenticated();
            }
        }
        if (conf.headers) conf.headers.Authorization = `Bearer ${access}`;
        else conf.headers = { Authorization: `Bearer ${accesstoken}` };
        return await this.get(url, conf);
    }
    async authpost(url, data, config, accesstoken, refresh) {
        let conf = config;
        if (jwtDecode(accesstoken).exp < Date.now() / 1000) {
            if (jwtDecode(refresh).exp > Date.now() / 1000)
                accesstoken = (
                    await this.post("token/refresh/", { refresh: refresh })
                ).data.access;
            else {
                throw new NotAuthenticated();
            }
        }
        if (conf.headers) conf.headers.Authorization = `Bearer ${accesstoken}`;
        else conf.headers = { Authorization: `Bearer ${accesstoken}` };
        return await this.post(url, data, conf);
    }
}

let api = new Api({
    baseURL: "http://127.0.0.1:8000/api/",
});
export class NotAuthenticated extends Error {}
export default api;
