import { Post } from "../../entities/Post";
import PostsRepository from "../../repositories/PostsRepository";

export default class GetPosts {
    constructor(private repository: PostsRepository) {};

    async execute(page: number): Promise<Post[]> {
        return this.repository.getPosts(page);
    }
}
