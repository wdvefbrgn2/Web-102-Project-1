import React from "react";
//import './Activity.css';

const Activity = ({name, review, imageUrl}) => {
    return (
        <div className ="Activity">
            <img src={imageUrl} alt={name} />
            <h3> {name} </h3>
            <p> {`Rating: ${review}`} </p>
        </div>
    );
}

export default Activity;