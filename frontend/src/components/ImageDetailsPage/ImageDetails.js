import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { getImages } from "../../store/images";

import "./ImageDetails.css";

const ImageDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    let images = useSelector(state => state.images);
    // console.log('HELLLOOOOOOO', image);
    images = Object.values(images);
    // console.log('HELLLOOOOOOO', image);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    const sessionUser = useSelector(state => state.session.user);
    const image = images.find(image => image.id === id);


}

export default ImageDetails;
