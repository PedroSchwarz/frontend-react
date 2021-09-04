import { Post } from "../../../domain/entities/Post";
import PostsRepository from "../../../domain/repositories/PostsRepository";
import { PostsRemoteDataSource } from "../../datasources/PostsRemoteDataSource";
import { PostModel } from "../../models/PostModel";

export default class PostsRepositoryImpl implements PostsRepository {
    constructor(private remote: PostsRemoteDataSource) {};

    async getPosts(page: number): Promise<Post[]> {
        const { data } = await this.remote.getPosts(page);
        return data.data.map(el => new PostModel(el.id, el.user_id, el.title, el.body).toPost());
    }
}