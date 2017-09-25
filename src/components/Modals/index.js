import React, { Component } from 'react';
const $ = window.$;

class LoginModal extends Component {
    constructor(props){
        super(props);
        
    }
    render() {
        return (
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModal;