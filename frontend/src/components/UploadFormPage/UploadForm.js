import { useState } from "react";
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
    const [error, setError] = useState([]);

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

        if (newImage) {
            history.push(`/images/${newImage.id}`);
            isOpen(false);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Upload Image</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {error.length > 0 && (
                        <div className="alert alert-danger">
                            {error.map((err, i) => (
                                <p key={i}>{err}</p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UploadForm;
