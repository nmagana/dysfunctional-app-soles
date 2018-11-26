import React from 'react';

const Option = (props) => (
    <div className='option'>
        <p className='option__text'>{props.index + 1}. {props.option}</p>
        <button className='button button--remove-option' onClick={() => props.deleteOption(props.option)}>
            X
        </button>
    </div>
);

export default Option;