//* React
import { useState } from "react";

//* Files
import { Modal } from "../../../context/Modal";
import DeleteButton from "../DeleteButton";

const DeleteConfirm = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} id="delete-button">
                <i className="fas fa-trash-alt"></i>
            </button>
            {isOpen && (
                <Modal onClose={() => isOpen(false)}>
                    <DeleteButton isOpen={setIsOpen} />
                </Modal>
            )}
        </>
    );
};

export default DeleteConfirm;
