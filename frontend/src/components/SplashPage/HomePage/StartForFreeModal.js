//* React
import { useState } from 'react';

//* Files
import { Modal } from "../../../context/Modal";
import SignupForm from '../../SignupFormModal/SignupForm';
// import "./StartForFreeModal.css";


const StartForFreeModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <button onClick={toggle} id="start-free-button">Start For Free</button>
            {isOpen && (
                <Modal onClose={toggle}>
                    <SignupForm />
                </Modal>
            )}
        </div>
    );
}

export default StartForFreeModal;
