import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { ActionUi, useAppDispatch, useAppSelector } from '../../core';
import { EnumAppModal } from '../../models';

export function ModalRegister(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const modalData = useAppSelector(state => state.ui.modal);
  const showModal = React.useMemo(() => modalData?.type === EnumAppModal.Register, [modalData]);
  const closeModal = React.useCallback(() => dispatch(ActionUi.ModalClose()), [dispatch]);

  if (!showModal) return null;

  return (
    <Modal
      show={showModal}
      dialogClassName="modal-lg"
      onHide={closeModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Body will go here
      </Modal.Body>
    </Modal>
  );
}
