import React from 'react';
import Modal from 'react-modal';

const test = () => {
    console.log('nice');
}

const OptionModal = (props) => (
    <Modal
        appElement={document.getElementById('app')}
        isOpen={!!props.selectedOption}
        closeTimeoutMS={200}
        onRequestClose={test}
        className='modal'
    >
        <h1 className='modal__title'>Selected Option</h1>
        {props.selectedOption && <p className='modal__option'>{props.selectedOption}</p>}
        <button className='button button--exit-modal' onClick={props.handleExitModal}>Back</button>
    </Modal>
);

export default OptionModal;