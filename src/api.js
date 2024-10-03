import { Axios } from "axios";
import { jwtDecode } from "jwt-decode";

class Api extends Axios {
    async authget(url, config, locstore) {
        let conf = config;
        let accesstoken = locstore.getItem("access-token");
        let refreshtoken = locstore.getItem("access-token");
        let accessexp = jwtDecode(accesstoken);
        if (accessexp.exp < Date.now() / 1000) {
            if (jwtDecode(refreshtoken).exp > Date.now() / 1000) {
                accesstoken = (
                    await this.post(
                        "token/refresh/",
                        JSON.stringify({
                            refresh: refreshtoken,
                        }),
                        { headers: { "Content-Type": "application/json" } }
                    )
                ).data.access;
            } else {
                throw new NotAuthenticated();
            }
        }
        locstore.setItem("access-token", accesstoken);
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
        if (conf.headers) {
            conf.headers.Authorization = `Bearer ${accesstoken}`;
            conf.headers["Content-Type"] = "application/json";
        } else
            conf.headers = {
                Authorization: `Bearer ${accesstoken}`,
                "Content-Type": "application/json",
            };
        return await this.post(url, data, conf);
    }
}

let api = new Api({
    baseURL: "http://127.0.0.1:8000/api/",
});
export class NotAuthenticated extends Error {}
export default api;
