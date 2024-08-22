import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmationModal = ({ show, onClose, onConfirm, action }) => {
    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirm {action}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to {action.toLowerCase()} this item?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    {action}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;
