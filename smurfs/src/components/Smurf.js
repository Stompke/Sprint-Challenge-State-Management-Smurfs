import React from 'react';

const Smurf = props => {

    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <h4>{props.height}</h4>
        </div>
    )
}

export default Smurf;