import { AxiosInstance, AxiosResponse } from "axios";
import { APIResult } from "../../models/PostModel";

export interface PostsRemoteDataSource {
    getPosts(page: number): Promise<AxiosResponse<APIResult>>
}

export class PostsRemoteDataSourceImpl implements PostsRemoteDataSource {
    constructor(private client: AxiosInstance) {};

    async getPosts(page: number): Promise<AxiosResponse<APIResult>> {
        return await this.client.get<APIResult>(`&page=${page}`);
    }
}