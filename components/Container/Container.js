import React from 'react';
import Navbar from '../Navbar/Navbar';

const Container = (props) => {

    // console.log(props)

    return (
        <>
           <Navbar /> 

           {props.children}
        </>
    );
};

export default Container;