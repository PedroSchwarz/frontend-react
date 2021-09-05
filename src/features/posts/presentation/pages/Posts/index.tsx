import React, { useEffect, useState, useContext } from 'react';
import { InjectionContext } from '../../../../../di/InjectionContext';
import PostsList from '../../widgets/PostsList';
import { ErrorCard, Loading, Main } from './styles';

import { pagesActions } from '../../stores/Pages';
import { useDispatch, useSelector } from 'react-redux';
import { PAGES_STATE } from '../../stores/Pages/reducer';
import { postsActions } from '../../stores/Posts';
import { POSTS_STATE } from '../../stores/Posts/reducer';

const Posts: React.FC = () => {
    const { currentPage } = useSelector<{pages: PAGES_STATE}, PAGES_STATE>(state => state.pages);
    const { posts } = useSelector<{posts: POSTS_STATE}, POSTS_STATE>(state => state.posts);
    const dispatch = useDispatch();
    const { getPosts: usecase } = useContext(InjectionContext);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        console.log(posts.length);
        handleExecuteUseCase();
    }, [currentPage, usecase]);

    const handleExecuteUseCase = async () => {
        setLoading(true);
        try {
            const result = await usecase.execute(currentPage);
            dispatch(postsActions.setPosts({ posts: result.posts }));
            dispatch(pagesActions.setTotalPages({ totalPages: result.totalPages }))
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
                <PostsList />
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