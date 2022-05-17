import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getImages } from '../../store/images';

const Welcome = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const images = useSelector(state => state);
    console.log(images);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    return (
        <>
            <h1>Welcome to the Gallery</h1>
            <button onClick={() => history.push('/signup')}>Signup</button>
            <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/images')}>Images</button>
            <div>
                {/* {images.map(image => (
                    <img key={image.id} src={image.url} alt={image.title} />
                ))} */}
            </div>
        </>
    );
}

export default Welcome;
