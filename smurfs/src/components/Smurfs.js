import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";

import Smurf from './Smurf';
import { test, fetchData } from '../actions'


const Smurfs = props => {

    console.log(props)

    useEffect(() => {

        props.fetchData();

    },[])

    return (
        <div>
            <h1>List of All Smurfs</h1>
            {props.isLoading ? <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
            /> : ''}
            {props.smurfs.map(item => <Smurf name={item.name} age={item.age} height={item.height} key={item.id} />)}
            <button onClick={props.test}></button>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs
    }
}

export default connect(
    mapStateToProps,
    { test, fetchData }
)(Smurfs);