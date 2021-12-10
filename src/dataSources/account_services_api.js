import { RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";

class AccountServicesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.account_services_url;
    }

    async accountsProviders() {
        return await this.get('/providers');
    }

    async accountById(id) {
        return await this.get(`/providers/${id}`);
    }

    async newAccountService(body) {
        return await this.post('/providers', body);
    }

    async deleteAccount(id) {
        return await this.delete(`/providers/${id}`);
    }

    async updateAccount(data) {
        const { id, ...body } = data;
        return await this.put(`/providers/${id}`, body);
    }
}

export default AccountServicesAPI;