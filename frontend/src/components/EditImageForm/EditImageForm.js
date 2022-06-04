//*  React
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

//* Redux
import { editImage } from "../../store/images";

//* Files & Components
import "./EditImageForm.css";

const EditImageForm = ({ isOpen }) => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    let images = useSelector(state => state.images);
    images = Object.values(images);

    const image = images.find(image => image.id === +id);

    const [name, setName] = useState(image?.name);
    const [location, setLocation] = useState(image?.location);
    const [content, setContent] = useState(image?.content);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        const data = {
            id: +id,
            userId: sessionUser.id,
            url: image?.url,
            name,
            location,
            content,
        };

        let newPhoto = dispatch(editImage(data));


        if (newPhoto) {
            // history.push(`/images/${newPhoto.id}`);
            isOpen(false);
        }
    };

    useEffect((errors = []) => {
        if (name.length < 1) errors.push("Name is required");
        if (location.length < 1) errors.push("Location is required");
        if (content.length < 1) errors.push("Content is required");
        setErrors(errors);
    }, [name, location, content]);

    return (
        <form className="edit-image-form" onSubmit={handleSubmit}>
            <i className="fas fa-edit"></i>
            <ul className="login-errors">
                {errors.map((error, i) => (
                    <li key={i}>{error}</li>
                ))}
            </ul>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="location">Location</label>
            <input
                type="text"
                name="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <label htmlFor="content">Content</label>
            <textarea
                name="content"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit" disabled={!!errors.length} id="edit-image-button">
                Submit
            </button>
        </form>
    );
};

export default EditImageForm;
