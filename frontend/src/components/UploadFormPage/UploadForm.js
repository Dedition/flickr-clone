//* React
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

//* Redux
import { uploadImage } from "../../store/images";

//* Files & Components
import "./UploadForm.css";

const UploadForm = ({ isOpen }) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [content, setContent] = useState("");
    const [errors, setErrors] = useState([]);

    const handleImageChange = (e) => setImage(e.target.files[0]);

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
        <div className="upload-modal">
            <h1 className="upload-title">Upload Image</h1>
            <form name="upload-form" onSubmit={handleSubmit}>
                <ul className="upload-errors errors">
                    {errors.map((error, i) => (
                        <li key={i}>{error}</li>
                    ))}
                </ul>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    className="form-control"
                    id="location"
                    autoComplete="off"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <label htmlFor="content">Content</label>
                <textarea
                    className="form-control"
                    id="content"
                    autoComplete="off"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    className="form-control-file"
                    onChange={handleImageChange}
                />
                <button type="submit" className="upload-button" disabled={!!errors.length}>Submit</button>
            </form>
        </div>
    );
}

export default UploadForm;
