import React from 'react';
import './backDrop.css';

const backDrop = props => {
    return (
        <div className='back__drop' onClick={props.onClick}></div>
    )
}
export default backDrop;