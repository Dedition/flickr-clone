//*                         React
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

//*                         Store
import { getImages } from "../../store/images";

//*                         Files & Components
import EditImageFormModal from "../EditImageForm/Edit";
import DeleteConfirm from "../DeleteButton/DeleteConfirm/DeleteConfirm";
import Comments from "../CommentsPage/Comments";
import "./ImageDetails.css";

const ImageDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    let images = useSelector(state => state.images);
    images = Object.values(images);
    const image = images.find(image => image.id === +id);
    const index = images.indexOf(image);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    const sessionUser = useSelector(state => state.session.user);

    let date = new Date(image?.createdAt);
    date = date.toLocaleDateString();

    let deleteEditLink;
    if (sessionUser.id === image?.userId) {
        deleteEditLink = (
            <div className="delete-edit-link">
                <EditImageFormModal />
                <DeleteConfirm />
            </div>
        );
    }

    return (
        <div className="image-details-container">
            <div className="image-details-card">
                <Link to="/" className="back-arrow"><i className="fas fa-arrow-left" style={{ fontSize: "13px" }}>Back to Explore</i></Link>
                {sessionUser && deleteEditLink}
                <div className="image-body">
                    <Link to={index > 0 ? `/images/${images[index - 1].id}` : null}
                        className={index > 0 ? "forward-back-arrows" : "hidden"}>
                        <i className="fas fa-chevron-left"></i>
                    </Link>
                    {/* eslint-disable-next-line */}
                    <img src={image?.imageUrl} id="image-details-img" />
                    <Link to={index < images.length - 1 ? `/images/${images[index + 1].id}` : null}
                        className={index < images.length - 1 ? "forward-back-arrows" : "hidden"}>
                        <i className="fas fa-chevron-right"></i>
                    </Link>
                </div>
                <div className="image-details-info">
                    <i className="fa-solid fa-user-group" id="fa-icons author-icon"></i>
                    <h3 id="author">Taken by {image?.name}</h3>
                    <i className="fas fa-camera-retro" id="fa-icons"></i>
                    <p>Captured at: {image?.location}</p>
                    <i className="fa-solid fa-pen" id="fa-icons"></i>
                    <p>Description: {image?.content}</p>
                    <i className="far fa-calendar-alt" id="fa-icons"></i>
                    <p>Uploaded on: {date}</p>
                </div>
            </div>
            <Comments />
        </div>
    );
};

export default ImageDetails;
