//* React
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

//* Store
import { getImages } from '../../store/images';

//* Files

const SearchQuery = () => {
    const dispatch = useDispatch();
    const { searchQuery } = useParams();

    let images = useSelector(state => state.images);
    images = Object.values(images);

    // images.sort((a, b) => {
    //     if (a.createdAt < b.createdAt) return 1;
    //     if (a.createdAt > b.createdAt) return -1;
    //     return 0;
    // });

    const queriedImages = images.filter(image => image?.name?.toLowerCase().includes(searchQuery.toLowerCase()));
    console.log(queriedImages);
    useEffect(() => {
        dispatch(getImages(searchQuery));
    }, [dispatch, searchQuery]);


    return (
        <div className='query-container'>
            <h1 id="query-header" style={{ textAlign: 'center', marginTop: "50px" }}>Search Results for: {searchQuery}</h1>
            {!queriedImages.length ? (
                <div className='no-results'>
                    <i className="fa-solid fa-alicorn" id="no-result-icon"></i>
                    <h2 id="no-result-text">No results found! Sorry! Do a different one?</h2>
                </div>
            ) : (
                queriedImages.map(image => (
                    <div className='image-container' key={image?.id}>
                        <Link to={`/images/${image.id}`}>
                            <img key={image?.id} src={image.imageUrl} alt={image.name} />
                        </Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default SearchQuery;
