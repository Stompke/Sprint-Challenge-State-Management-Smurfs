import React, { useState} from 'react';
import { connect } from 'react-redux';

import { postData, changeData } from '../actions';

const Form = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const nameHandler = e => {
        setName(e.target.value)
    }
    const ageHandler = e => {
        setAge(e.target.value)
    }
    const heightHandler = e => {
        setHeight(e.target.value)
    }



    return (
        <div>
            <button onClick={() => props.changeData(props.selectedSmurf, name, age, height)}>change it!!!</button>
            <input onChange={nameHandler} type='text' placeholder='name'/>
            <input onChange={ageHandler} type='text' placeholder='age'/>
            <input onChange={heightHandler} type='text' placeholder='height'/>
            <button onClick={() => props.postData(name, age, height)}>Add Smurf</button>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
        selectedSmurf: state.selectedSmurf
    }
}

export default connect(
    mapStateToProps,
    { postData, changeData }
)(Form);