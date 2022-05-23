import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditCommentForm from './EditCommentForm';

const EditCommentFormModal = ({ id, comment }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} id='nav-upload'>Edit
                <i className="fas fa-edit"></i>
            </button>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <EditCommentForm id={id} comment={comment} isOpen={setIsOpen} />
                </Modal>
            )}
        </>
    );
}

export default EditCommentFormModal;
