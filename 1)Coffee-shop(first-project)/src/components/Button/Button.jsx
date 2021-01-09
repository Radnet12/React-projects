import React from 'react';

function Button({text, onCustomClick}) {
    return(
        <button type="button" onClick={onCustomClick}>{text}</button>
    )
}
export default Button;