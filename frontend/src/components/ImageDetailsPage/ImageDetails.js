//*                         React
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";

//*                         Store
import { deleteImageAction } from "../../store/images";
import { getImages } from "../../store/images";

//*                         Files
import EditImageFormModal from "../EditImageForm/Edit";
import Comments from "../CommentsPage/Comments";
import "./ImageDetails.css";

const ImageDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    let images = useSelector(state => state.images);
    images = Object.values(images);
    const image = images.find(image => image.id === +id);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(deleteImageAction(id))
            .then(() => { history.push("/") })
            .catch(err => console.log(err));
    };

    const sessionUser = useSelector(state => state.session.user);


    let date = new Date(image?.createdAt);
    date = date.toLocaleDateString();

    let deleteEditLink;
    if (sessionUser.id === image?.userId) {
        deleteEditLink = (
            <div className="delete-edit-link">
                <EditImageFormModal />
                <button onClick={handleDelete}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        );
    }

    return (
        <div className="image-details">
            <div className="image-details-header">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                </Link>
            </div>
            {sessionUser && deleteEditLink}
            <div className="image-details-body">
                <div className="image-details-page-image">
                    <h2>{image?.name}</h2>
                    <img src={image?.imageUrl} />
                </div>
                <div className="image-details-page-info">
                    <div className="image-details-page-info-user">
                        {/* <div className="image-details-page-info-user-name">
                            <i className="fas fa-user-circle"></i>
                            Author: {image?.name}
                        </div> */}
                    </div>
                    <div className="image-details-page-info-location">
                        <div className="image-details-page-info-location-icon">
                            <i className="fas fa-camera-retro"></i>
                            Captured at: {image?.location}
                        </div>
                        <div className="image-details-page-info-location-date">
                            <i className="far fa-calendar-alt"></i>
                            Uploaded on: {date}
                        </div>
                    </div>
                    <div className="image-details-page-info-content">
                        <div className="image-details-page-info-content-icon">
                            <i className="fas fa-info-circle"></i>
                            Description: {image?.content}
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-details-comments">
                <Comments />
            </div>
        </div>
    );
};

export default ImageDetails;
