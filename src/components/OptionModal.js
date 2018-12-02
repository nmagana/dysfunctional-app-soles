import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        appElement={document.getElementById('app')}
        isOpen={!!props.modalOn}
        closeTimeoutMS={300}
        onRequestClose={props.handleExitModal}
        className='modal'
    >
        <h1 className='modal__title'>Selected Option</h1>
        {props.selectedOption && <p className='modal__option'>{props.selectedOption}</p>}
        <button className='button button--exit-modal' onClick={props.handleExitModal}>Back</button>
    </Modal>
);

export default OptionModal;