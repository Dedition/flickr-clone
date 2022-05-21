import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditImageForm from './EditImageForm';

const EditImageFormModal = ({ id }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} id='nav-upload'>Edit
                <i className="fas fa-edit"></i>
            </button>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <EditImageForm id={id} isOpen={setIsOpen} />
                </Modal>
            )}
        </>
    );
}
