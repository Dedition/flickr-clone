import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import { deleteImageAction } from "../../store/images";

import { getImages } from "../../store/images";

import "./ImageDetails.css";

const ImageDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    let images = useSelector(state => state.images);
    images = Object.values(images);
    // console.log(id)



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
    const image = images.find(image => image.id === +id);

    return (
        <div className="image-details-page">
            <div className="image-details-page-image">
                <img src={image?.imageUrl} alt="image" />
            </div>
            <div className="image-details-page-info">
                <div className="image-details-page-info-user">
                    <div className="image-details-page-info-user-name">
                        {image?.name}
                    </div>
                </div>
                <div className="image-details-page-info-location">
                    <div className="image-details-page-info-location-icon">
                        <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="image-details-page-info-location-text">
                        {image?.location}
                    </div>
                </div>
                <div className="image-details-page-info-content">
                    <div className="image-details-page-info-content-icon">
                        <i className="fas fa-info-circle"></i>
                    </div>
                    <div className="image-details-page-info-content-text">
                        {image?.content}
                    </div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ImageDetails;
