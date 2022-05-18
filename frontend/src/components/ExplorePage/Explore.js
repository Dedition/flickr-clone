import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getImages } from '../../store/images';

const Explore = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    let images = useSelector(state => state.images);
    // console.log(Object.values(images));
    images = Object.values(images)
    // console.log(images);
    // console.log(images.imageUrl);
    // console.log(typeof images);

    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    return (
        <>
            <h1>Welcome to the Gallery</h1>
            {/* <button onClick={() => history.push('/signup')}>Signup</button>
            <button onClick={() => history.push('/login')}>Login</button>
            <button onClick={() => history.push('/images')}>Images</button> */}
            <div>
                {images.map(image => (
                    <img key={image?.id} src={image?.imageUrl} />
                ))}
            </div>
        </>
    );
}

export default Explore;
