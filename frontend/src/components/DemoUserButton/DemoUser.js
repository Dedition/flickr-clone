import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

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
        <div className="DemoUser">
            <button className="DemoUser_button" onClick={handleClick}>
                <span className="DemoUser_button-text">Demo User</span>
            </button>
        </div>
    );
};

export default DemoUser;
