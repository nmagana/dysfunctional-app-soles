import React from 'react';

const Action = (props) => (
    <button className='button big-button' disabled={!props.hasOptions} onClick={props.handleAction}>What Should I do?</button>
)

export default Action;