//* React
import { useDispatch } from 'react-redux';

//* Store
import * as sessionActions from '../../store/session';

//* Files & Components
import "./DemoUser.css";

const DemoUser = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(sessionActions.login({
            credential: 'Demo-lition',
            password: 'password',
        })).catch(async (res) => {
            await res.json();
        }
        );
    };

    return (
        <div className="demoUser">
            <button id="demoUser-button" onClick={handleClick}>
                <span id="demoUser-text">Demo User</span>
            </button>
        </div>
    );
};

export default DemoUser;
