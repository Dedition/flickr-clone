//* React
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//* Store
import { deleteImageAction } from "../../store/images";

//* Files & Components
import "./DeleteConfirm/DeleteConfirm.css";

// TODO Create a delete button that redirects you to the DeleteConfirm page/component

const DeleteButton = ({ isOpen }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { id } = useParams();

    const deleteImage = async () => {
        await dispatch(deleteImageAction(id))
            .then(() => { history.push("/") })
            .catch(err => console.log(err));
        history.push("/");
        isOpen(false);
    }

    return (
        <div className="delete-button-container">
            <h2>This action is <em>final.</em> Are you sure you want to delete this image?</h2>
            <div>
                <button id="submit" type="submit" onClick={deleteImage}>
                    Yes
                </button>
            </div>
            <div>
                <button id="cancel" onClick={() => isOpen(false)}>
                    No
                </button>
            </div>
        </div>
    );
}

export default DeleteButton;
