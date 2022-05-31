import StartForFreeModal from "./StartForFreeModal";
import "./Homepage.css";

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="center-text">
                <h1 id="splash-title">Find your inspiration.</h1>
                <h2 id="splash-subheading">Join the Flickr community, home to tens of billions of photos and 2 million groups.</h2>
                <StartForFreeModal />
            </div>
        </div>
    );
};

export default Homepage;
