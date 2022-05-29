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
    const [errors, setErrors] = useState([]);

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

    useEffect((errors = []) => {
        if (content.length < 1) errors.push("");
        setErrors(errors);
    }, [content]);

    return (
        <div className="comments-details">
            <div className="comments-header">
                <h2>Comments</h2>
                <div className="comments-container">
                    {comments.map(comment => (
                        <div className="comment-metadata" key={comment?.id}>
                            <p>{comment?.content}</p>
                            <p>{comment?.createdAt}</p>
                            {sessionUser && sessionUser?.id === comment?.userId &&
                                <>
                                    <button id={comment?.id} onClick={() => handleDelete(comment?.id)}>
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                    <EditCommentFormModal comment={comment} />
                                </>
                            }
                            <div className="body-comment">
                                <p>{comment?.comment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="body-comment-form">
                <div className="login-errors">
                    {errors.map((error, i) => (
                        <p key={i}>{error}</p>
                    ))}
                </div>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={content}
                        onChange={e => setContent(e?.target?.value)}
                        placeholder="What do you think?"
                    />
                    <button type="submit" disabled={!!errors.length}>
                        <i className="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Comments;
