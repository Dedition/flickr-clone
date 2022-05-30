//* React
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

//* Store
import { deleteImageAction } from "../../store/images";

//* Files

// TODO Create a delete button that redirects you to the DeleteConfirm page/component

const DeleteButton = ({ isOpen }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams();
    const sessionUser = useSelector(state => state.session.user);

    const deleteImage = async () => {
        await dispatch(deleteImageAction(id))
            .then(() => { history.push("/") })
            .catch(err => console.log(err));
        history.push("/");
        isOpen(false);
    }

    return (
        <div className="delete-button-container">
            This action is final. Are you sure you want to delete this image?
            <div>
                <button type="submit" onClick={deleteImage}>
                    Yes
                </button>
            </div>
            <div>
                <button onClick={() => isOpen(false)}>
                    No
                </button>
            </div>
        </div>
    );
}

export default DeleteButton;
