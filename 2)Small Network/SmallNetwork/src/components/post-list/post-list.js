import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';


const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    return (
        <ListGroup className="app-list">
            {
                posts.map((item) => {
                    const {id, ...itemProps} = item;
                    return <PostListItem {...itemProps} 
                                onDelete={() => onDelete(id)}
                                onToggleImportant={() => onToggleImportant(id)}
                                onToggleLiked={() => onToggleLiked(id)}
                                key={id}
                            />
                })
            }
        </ListGroup>
    );
};
export default PostList;