//* React
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//* Store
import { updateComment } from '../../store/comments';

//* Files & Components
import "./EditCommentForm.css";

const EditCommentForm = ({ isOpen, comment }) => {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);


    const [content, setContent] = useState(comment?.content);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            id: comment?.id,
            userId: sessionUser.id,
            imageId: comment?.imageId,
            content,
        };

        let updatedComment = dispatch(updateComment(data));

        if (updatedComment) {
            isOpen(false);
        }
    };

    useEffect((errors = []) => {
        if (content.length < 1) errors.push("Content is required");
        setErrors(errors);
    }, [content]);

    return (
        <form className="edit-comment-form" onSubmit={handleSubmit}>
            <i className="fas fa-edit" id="edit-comment-icon"></i>
            <ul className="login-errors">
                {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
            <label htmlFor="content">Comment</label>
            <textarea
                type="text"
                name="content"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" disabled={!!errors.length} id="edit-comment-button">Update</button>
        </form>
    );
}

export default EditCommentForm;
