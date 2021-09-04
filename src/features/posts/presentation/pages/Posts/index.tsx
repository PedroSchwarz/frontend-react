import React, { useEffect, useState, useContext } from 'react';
import { InjectionContext } from '../../../../../contexts/InjectionContext';
import { Post } from '../../../domain/entities/Post';

const Posts: React.FC = () => {
    const { getPosts: usecase } = useContext(InjectionContext);

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const posts = await usecase.execute(currentPage);
                setPosts(posts);
            } catch (e) {
                console.log(e);
            }
        }
        loadPosts();
    }, [currentPage]);

    return (
        <div>
            <ul>
                {
                    posts.length > 0 &&
                    posts.map(el => <li key={el.id}>{ el.title }</li>)
                }
            </ul>
            <button type="submit" onClick={() => setCurrentPage(currentPage + 1)}>next</button>
        </div>
    )
};

export default Posts;