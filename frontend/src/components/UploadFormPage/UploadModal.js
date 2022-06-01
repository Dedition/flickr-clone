import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadForm from './UploadForm';

const UploadFormModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} id='nav-upload-button'>Upload
                <i className="fas fa-upload"></i>
            </button>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)}>
                    <UploadForm isOpen={setIsOpen} />
                </Modal>
            )}
        </>
    );
}

export default UploadFormModal;
