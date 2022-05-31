//* React
import { useState } from "react";

//* Files & Components
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

const SignupFormModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <button onClick={toggle} id="signup-button">Sign Up</button>
            {isOpen && (
                <Modal onClose={toggle}>
                    <SignupForm />
                </Modal>
            )}
        </div>
    );
}

export default SignupFormModal;
