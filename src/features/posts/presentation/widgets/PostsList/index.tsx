import React, { ReactNode } from 'react'
import { Post } from '../../../domain/entities/Post';
import PagesController from '../PagesController';
import PostItem from '../PostItem';
import { Card, List } from './styles';

type PostsListProps = {
    posts: Post[];
};

const PostsList: React.FC<PostsListProps> = ({ posts }) => {

    const handleRenderPostItems = (): ReactNode[] => {
        return posts.map(el => <PostItem key={el.id} post={el} />);
    }

    return (
        <Card>
            <Card.Title>Últimas postagens</Card.Title>

            <List>
                <List.Header>
                    <p>Titulo</p>
                    <p>Conteúdo</p>
                </List.Header>
                <List.Body>
                    { handleRenderPostItems() }
                </List.Body>
                <List.Footer>
                    <p>Exibindo {posts.length} postagens</p>
                    <PagesController />
                </List.Footer>
            </List>
        </Card>
    );
};

export default PostsList;