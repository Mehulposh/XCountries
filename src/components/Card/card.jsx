import React from 'react';

function Card({name, png}) {
    return (
        <div className="card">
        <img src={png} alt={name} className="card-image" />
        <h2>{name}</h2>
        </div>
    );
}


export default Card;
// This is a functional component that takes in two props: name and png. It returns a div with the class "card" that contains an image and a heading. The image source is set to the value of the png prop, and the alt text is set to the value of the name prop. The heading displays the value of the name prop.