//* React
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

//* Redux
import { getImages } from "../../store/images";

//* Files & Components


const LikedImages = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    const sessionUser = useSelector(state => state.session.user);
    // console.log(sessionUser);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    let images = useSelector(state => state.images);
    images = Object.values(images);

    const myLikedImages = images.filter(image => image.userId === sessionUser.id);




    return (
        <div className="likedImages-body">
            <h1>My Liked Images</h1>
            <div className="likedImages-container">
                {myLikedImages.map(image => (
                    <div className="likedImages-image" key={image.id}>
                        <img src={image.imageUrl} alt={image.description} />
                        <div className="likedImages-image-info-description">
                            <p>{image.name}</p>
                        </div>
                        <div className="likedImages-image-info-buttons">
                            <button onClick={() => history.push(`/images/${image.id}`)}>View</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LikedImages;
