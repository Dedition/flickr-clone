//*                         React
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//*                        Store
import { createComment, getComment, removeComment } from '../../store/comments';

//*                       Files
import EditCommentFormModal from '../EditCommentForm/Edit';
import "./Comments.css";

const Comments = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const [content, setContent] = useState('');

    // eslint-disable-next-line
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
        <div className="comments-container">
            <form className="comments-form" onSubmit={handleSubmit}>
                <h2 id="comments-title">Comments</h2>
                <textarea
                    type="text"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    placeholder="What do you think?"
                    required
                />
                <button type="submit" id="add-comment-button">
                    Add
                </button>
            </form>
            {comments.map(comment => (
                <div className="comment-item" key={comment.id}>
                    <div>
                        <i className='fa-brands fa-pushed' id="comment-icon" />
                        <p>{comment?.content}</p>
                        <span>{comment?.createdAt}</span>
                        {sessionUser && sessionUser?.id === comment?.userId &&
                            <div className='delete-edit-comp'>
                                <EditCommentFormModal comment={comment} />
                                <button id="delete-comment-button" onClick={() => handleDelete(comment.id)}>
                                    <i className="fa-solid fa-trash-alt" id="delete-button-icon" />
                                </button>
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>

    );
}

export default Comments;
