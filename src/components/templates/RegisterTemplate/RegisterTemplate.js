import React from 'react';
import RegisterFromContainer from 'containers/RegisterFromContainer';


const RegisterTemplate = ({isSignUpPage, push})=>{
    const registTitle = {
        textAlign: 'center'
    }
    return (
        <div>
            <h1 style={registTitle}>{isSignUpPage? "SIGN UP" : "SIGN IN" }</h1>
            <RegisterFromContainer isSignUpPage={isSignUpPage}/>
        </div>
    );
};

export default RegisterTemplate;