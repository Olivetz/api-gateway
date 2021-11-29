import { RESTDataSource } from "apollo-datasource-rest"
import servers from "../server.js";

class AccountAPI extends RESTDataSource {
    constructor(){
        super();
        this.baseURL=servers.account_api_url;
    }
    async accounts() {
        return await this.get(`/api/user`);
    }

    async accountByUsername(username){
        return await this.get(`/api/user/${username}`)
    }

}

export default AccountAPI;