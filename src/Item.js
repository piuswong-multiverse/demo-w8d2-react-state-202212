import React from 'react';

const Item = ( props ) => {
    return(
        <div className="item">
            <h1>Hello! My name is { props.chinchObj.name }!</h1>
            <img src={ props.chinchObj.imgURL } />
        </div>
    )
}

export default Item;