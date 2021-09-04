import { Post } from "../../entities/Post";

export default interface PostsRepository {
    getPosts(page: number): Promise<Post[]>;
}