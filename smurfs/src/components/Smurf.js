import React from 'react';
// import { connect } from 'react-redux';

const Smurf = props => {

//  const thisOne = (props.selectedSmurf )
console.log(props.selectedSmurf)
console.log(props.id)

    return (
        <div>
            <div className={props.selectedSmurf == props.id ? 'yup' : 'nope'} onClick={props.selectSmurf} >
                <h2>{props.name}</h2>
                <h3>{props.age}</h3>
                <h4>{props.height}</h4>
            </div>
                <button onClick={props.deleteSmurf} className={props.selectedSmurf == props.id ? '' : 'hide'} >delete</button>
        </div>
    )
}

export default Smurf;

// const mapStateToProps = state => {

// }

// export default connect()