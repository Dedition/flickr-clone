//*  React
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//* Store
import { getImages } from '../../../store/images';

//* Files & Components
import "./Explore.css";

const Explore = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let images = useSelector(state => state.images);
    images = Object.values(images)

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    const imageRedirect = (image) => {
        history.push(`/images/${image.id}`, { from: "explore" });
    }

    return (
        <>
            <div className="explore-container">
                <h1 id="explore-title">Explore</h1>
                <div className='image-container'>
                    {images.map(image => (
                        <div className='explore-image' key={image?.id}>
                            {/* eslint-disable-next-line */}
                            <img onClick={() => { imageRedirect(image) }} key={image?.id} src={image?.imageUrl} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Explore;
