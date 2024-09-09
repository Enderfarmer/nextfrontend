import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { redirect } from "next/navigation";

let api = axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
});
api.authget = async function (url, config, accesstoken, refresh) {
    let conf = config;
    if (jwtDecode(accesstoken).exp < Date.now()) {
        accesstoken = (await this.post("token/refresh/", { refresh: refresh }))
            .data.access;
    }
    if (conf.headers) conf.headers.Authorization = `Bearer ${access}`;
    if (conf.headers) conf.headers.Authorization = `Bearer ${access}`;
    else conf.headers = { Authorization: `Bearer ${accesstoken}` };
    return await this.get(url, conf);
};
api.authpost = async function (url, data, config, accesstoken, refresh) {
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
    if (conf.headers) conf.headers.Authorization = `Bearer ${access}`;
    else conf.headers = { Authorization: `Bearer ${accesstoken}` };
    return await this.post(url, data, conf);
};
export default api;
