import { useSelector } from "react-redux";

import HomePage from "./HomePage/Homepage";
import Explore from "./ExplorePage/Explore";

import "./Splash.css";

const Splash = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let splashPage;
    if (sessionUser) {
        splashPage = (<Explore />)
    } else {
        splashPage = (<HomePage />)
    }

    return (
        <>
            {isLoaded && splashPage}
        </>
    );
}

export default Splash;
