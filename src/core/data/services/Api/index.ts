import axios, { AxiosInstance } from "axios";

class ApiClient {
    constructor(private apiUrl: string, private accessToken: string) {};

    buildClient(): AxiosInstance {
        return axios.create({
            baseURL: `${this.apiUrl}&access-token=${this.accessToken}`,
            headers: {'Content-Type': 'application/json'}
        });
    }
}

export default ApiClient;