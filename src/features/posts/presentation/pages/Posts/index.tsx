import React, { useEffect, useState, useContext } from 'react';
import { InjectionContext } from '../../../../../contexts/InjectionContext';
import { PagesContext } from '../../../../../contexts/PagesContext';
import { Post } from '../../../domain/entities/Post';
import PostsList from '../../widgets/PostsList';
import { ErrorCard, Loading, Main } from './styles';

const Posts: React.FC = () => {
    const { getPosts: usecase } = useContext(InjectionContext);
    const { currentPage, setTotalPages } = useContext(PagesContext);
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        handleExecuteUseCase();
    }, [currentPage, usecase]);

    const handleExecuteUseCase = async () => {
        setLoading(true);
        try {
            const result = await usecase.execute(currentPage);
            setPosts(result.posts);
            setTotalPages(result.totalPages);
            setError('');
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <Main>
            {
                loading &&
                <Loading>
                    <p>Carregando...</p>
                </Loading>
            }
            {
                posts.length > 0 &&
                <PostsList posts={posts} />
            }
            {
                !loading && error &&
                <ErrorCard>
                    <p>{ error }</p>
                    <ErrorCard.TryAgainButton onClick={handleExecuteUseCase}>
                        Tentar Novamente
                    </ErrorCard.TryAgainButton>
                </ErrorCard>
            }
        </Main>
    )
};

export default Posts;