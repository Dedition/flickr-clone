import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { uploadImage } from "../../store/images";

const UploadForm = ({ isOpen }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");
    // eslint-disable-next-line
    const [errors, setErrors] = useState([]);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let newImage = await dispatch(uploadImage({
            name,
            content,
            location,
            userId: sessionUser.id,
            image
        }));

        setName("");
        setLocation("");
        setContent("");
        setImage(null);
        setErrors([]);

        if (newImage) {
            history.push(`/images/${newImage.id}`);
            isOpen(false);
        }
    };

    useEffect((error = []) => {
        if (name.length < 1) error.push("Name is required");
        if (location.length < 1) error.push("Location is required");
        if (content.length < 1) error.push("Content is required");
        if (image === null) error.push("Image is required");
        setErrors(error);
    }, [name, location, content, image]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Upload Image</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <ul className="login-errors">
                                {errors.map((error, i) => (
                                    <li key={i}>{error}</li>
                                ))}
                            </ul>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea
                                className="form-control"
                                id="content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image</label>
                            <input
                                type="file"
                                className="form-control-file"
                                id="image"
                                onChange={handleImageChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!!errors.length}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UploadForm;
