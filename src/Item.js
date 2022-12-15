import React from 'react';

const Item = ( { chinchObj, favoriteId, currentId, setFavoriteId } ) => {
    return(
        <div className="item" onClick={ () => {
            setFavoriteId(currentId);
        } } >
            <h1>Hello! My name is { chinchObj.name }!</h1>
            <img src={ chinchObj.imgURL } />
            {
                // if the favorite id === the current chinchilla id, display this...
                favoriteId === currentId ? <h2 className="message"> This is my favorite </h2> : ""
            }
            <p><a href="#">Click me</a></p>
        </div>
    )
}

export default Item;