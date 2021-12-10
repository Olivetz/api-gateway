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

    async newAccount(body){
        return await this.post('/api/create_user', body);
    }

    async signIn(body){
        return await this.post('/api/token',body);
    }

    async updateAccountUser(data){
        const {id, ...body}=data
        return await this.put(`/api/user/${id}`, body);
    }

    async deleteAccountUser(id){
        return await this.delete(`/api/user/${id}`);
    }

}

export default AccountAPI;