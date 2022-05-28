import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// eslint-disable-next-line
import { useParams, useHistory } from "react-router-dom";

import { editImage } from "../../store/images";

const EditImageForm = ({ isOpen }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);

    let images = useSelector(state => state.images);
    images = Object.values(images);

    const image = images.find(image => image.id === +id);

    const [name, setName] = useState(image?.name);
    const [location, setLocation] = useState(image?.location);
    const [content, setContent] = useState(image?.content);

    const handleSubmit = async (e) => {
        e.preventDefault();

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

    return (
        <div className="upload-form fa-edit">
            <h2>Edit Image</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        name="location"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        name="content"
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EditImageForm;
