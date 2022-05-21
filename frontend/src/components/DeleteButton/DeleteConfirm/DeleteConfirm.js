import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { deleteImageAction } from "../../../store/images";

const DeleteConfirm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useSelector(state => state.images);

    useEffect(() => {
        dispatch(deleteImageAction(id));
        history.push("/");
    }, [dispatch, history, id]);

    return (
        <div className="delete-confirm-page">
            <div className="delete-confirm-page-text">
                <h1>Are you sure you want to delete this image?</h1>
                <p>This action cannot be undone.</p>
            </div>
            <div className="delete-confirm-page-buttons">
                <button className="delete-confirm-page-buttons-yes">Yes</button>
                <button className="delete-confirm-page-buttons-no">No</button>
            </div>
        </div>
    );
}

export default DeleteConfirm;
