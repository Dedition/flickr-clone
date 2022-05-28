import React, { useState } from 'react';
import { Modal } from "../../../context/Modal";
import SignupForm from '../../SignupFormModal/SignupForm';

const StartForFreeModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <button onClick={toggle} id="start-free-button">Start For Frddxee</button>
            {isOpen && (
                <Modal onClose={toggle}>
                    <SignupForm />
                </Modal>
            )}
        </div>
    );
}

export default StartForFreeModal;
