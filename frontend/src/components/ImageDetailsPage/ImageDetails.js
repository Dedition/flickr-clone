import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { getImages } from "../../store/images";

import "./ImageDetails.css";

const ImageDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    let images = useSelector(state => state.images);
    images = Object.values(images);
    console.log(id)

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    const sessionUser = useSelector(state => state.session.user);
    const image = images.find(image => image.id === +id);
    console.log(image.imageUrl);
    // console.log(images.id);

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
                </div>
            </div>
        </div>
    );
};

export default ImageDetails;
