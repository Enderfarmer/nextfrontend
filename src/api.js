import { Axios } from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

class Api extends Axios {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async authget(url, config, accesstoken, refresh) {
        let conf = config;
        if (jwtDecode(accesstoken).exp < Date.now()) {
            accesstoken = (
                await this.post("token/refresh/", { refresh: refresh })
            ).data.access;
        }
        if (conf.headers) conf.headers.Authorization = `Bearer ${access}`;
        else conf.headers = { Authorization: `Bearer ${accesstoken}` };
        return await this.get(url, conf);
    }
    async authpost(url, data, config, accesstoken, refresh) {
        let conf = config;
        if (jwtDecode(accesstoken).exp < Date.now()) {
            try {
                accesstoken = (
                    await this.post("token/refresh/", { refresh: refresh })
                ).data.access;
            } catch (err) {
                redirect("/login/");
            }
        }
        if (conf.headers) conf.headers.Authorization = `Bearer ${access}`;
        else conf.headers = { Authorization: `Bearer ${accesstoken}` };
        return await this.post(url, data, conf);
    }
}

let api = new Api("http://127.0.0.1:8000/api/");

export default api;
