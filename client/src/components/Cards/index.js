import React from "react";

function Cards(props) {

    return(
        <div>
            <img
            src={props.image}
            alt={props.value}             
            />
            
        </div>
    )
}

export default Cards;