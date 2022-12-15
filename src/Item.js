import React from 'react';

const Item = ( props ) => {
    return(
        <div className="item" onClick={ () => {
            props.setFavoriteId(props.currentId);
        } } >
            <h1>Hello! My name is { props.chinchObj.name }!</h1>
            <img src={ props.chinchObj.imgURL } />
            {
                // if the favorite id === the current chinchilla id, display this...
                props.favoriteId === props.currentId ? <h2 className="message"> This is my favorite </h2> : ""
            }
        </div>
    )
}

export default Item;