import ApiClient from "../../core/data/services/Api";
import { ACCESS_TOKEN, BASE_URL } from "../../core/utils/constants/ApiConstants";
import { PostsRemoteDataSourceImpl } from "../../features/posts/data/datasources/PostsRemoteDataSource";
import PostsRepositoryImpl from "../../features/posts/data/repositories/PostsRepositoryImpl";
import GetPosts from "../../features/posts/domain/usecases/GetPosts";

const buildPostsModule = (): GetPosts => {
    const client = new ApiClient(BASE_URL, ACCESS_TOKEN).buildClient();
    const remote = new PostsRemoteDataSourceImpl(client);
    const repository = new PostsRepositoryImpl(remote);
    return new GetPosts(repository);
}

export default buildPostsModule;