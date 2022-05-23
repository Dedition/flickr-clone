import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { updateComment } from '../../store/comments';

const EditCommentForm = ({ isOpen, comment }) => {
    // const { id } = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);
    console.log(sessionUser, 'sessionUser');

    // let comments = useSelector(state => state.comments);
    // comments = Object.values(comments);

    // const comment = comments.find(comment => comment.imageId === +id);
    console.log(comment, 'comment');

    const [content, setContent] = useState(comment?.content);

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

    return (
        <div className="upload-form fa-edit">
            <h2>Edit Comment</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="content">Comment</label>
                    <textarea
                        type="text"
                        name="content"
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit">Update</button>
                </div>
            </form>
        </div>
    );
}

export default EditCommentForm;
