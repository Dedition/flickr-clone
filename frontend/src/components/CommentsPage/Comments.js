//*                         React
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//*                        Store
import { createComment, getComment, removeComment } from '../../store/comments';

//*                       Files
import EditCommentFormModal from '../EditCommentForm/Edit';

const Comments = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [content, setContent] = useState('');

    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(getComment(id));
        // eslint-disable-next-line
    }, [dispatch]);

    let comments = useSelector(state => state.comments);
    comments = Object.values(comments);
    comments = comments.filter(comment => comment.imageId === +id);
    comments.forEach(comment => comment.createdAt = new Date(comment.createdAt).toLocaleDateString()
    );

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(createComment({
            userId: sessionUser.id,
            imageId: id,
            content
        }));
        setContent('');
    }

    const handleDelete = async (id) => {
        dispatch(removeComment(id))
        return;
    };

    return (
        <div className="image-details">
            <div className="image-details-header">
            </div>
            <div className="image-details-body">
                <div className="image-details-body-comments">
                    <div className="image-details-body-comments-header">
                        <h2>Comments</h2>
                    </div>
                    <div className="image-details-body-comments-body">
                        {comments.map(comment => (
                            <div className="image-details-body-comments-body-comment" key={comment?.id}>
                                <div className="image-details-body-comments-body-comment-header">
                                    <div className="image-details-body-comments-body-comment-header-user">
                                        <p>{comment?.content}</p>
                                        <div className="image-details-body-comments-body-comment-header-user-info">
                                            <p>{comment?.createdAt}</p>
                                        </div>
                                    </div>
                                    {sessionUser && sessionUser?.id === comment?.userId &&
                                        <>
                                            <button id={comment?.id} onClick={() => handleDelete(comment?.id)}>
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                            <EditCommentFormModal comment={comment} />
                                        </>
                                    }
                                </div>
                                <div className="image-details-body-comments-body-comment-body">
                                    <p>{comment?.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="image-details-body-comment-form">
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={content}
                            onChange={e => setContent(e?.target?.value)}
                            placeholder="What do you think?"
                        />
                        <button type="submit">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Comments;
