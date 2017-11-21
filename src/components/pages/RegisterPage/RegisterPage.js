import React from 'react';
import RegisterTemplate from 'components/templates/RegisterTemplate';


const RegisterPage = ({match, history}) => {
    const ObjCenter = {
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#F2F2F2'
    }
    const registerCard = {
        width: "70%"
    }
    return (
        <div className="valign-wrapper" style={ObjCenter}>
            <div className="card-panel" style={registerCard}>
                <RegisterTemplate isSignUpPage={match.path === "/signup"}/>
            </div>
        </div>
    );
};

export default RegisterPage;