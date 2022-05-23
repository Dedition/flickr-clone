import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getImages } from '../../../store/images';

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
            <h1>Welcome to the Gallery</h1>
            {/* <button onClick={() => history.push('/signup')}>Signup</button>
            <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/images')}>Images</button> */}
            <div className="explore-container">
                <div>
                    {images.map(image => (
                        <div className='images' key={image?.id}>
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
