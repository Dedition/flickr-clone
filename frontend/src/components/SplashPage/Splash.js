import { useSelector } from "react-redux";

import Explore from "./ExplorePage/Explore";

const Splash = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);
    let splashPage;
    if (sessionUser) {
        splashPage = (<Explore />)
    } else {
        splashPage = (<h1>Please sign in | Render home page here</h1>)
    }

    return (
        <>
            {isLoaded && splashPage}
        </>
    );
}

export default Splash;
