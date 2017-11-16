import React, { Component } from 'react';
import { connect } from 'react-redux';
import {push} from 'history'

import { CreateDetailRequest } from 'actions/PlaceSearch';

class NaverPlaceCard extends Component {
    constructor(props) {
        super(props);
        this.createDetail = this.createDetail.bind(this);
    }
    createDetail() {
        this.props.CreateDetailRequest(this.props.placeInfo, this.props.userInfo.token).then(
            (data) => {
                this.props.push("/PlaceDetail/"+data);
            }
        )
    }
    render() {
        return (
            <div className="card" onClick={this.createDetail}>
                <div className="row">
                    <div className="card-image waves-effect waves-block waves-light col s2">
                        <img className="activator" src="http://via.placeholder.com/350x350" />
                    </div>
                    <div className="card-content col s10">
                        <span className="card-title activator grey-text text-darken-4">{this.props.title}<i className="material-icons right">more_vert</i></span>
                        <p><span>{this.props.key}</span></p>
                    </div>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        userInfo: state.authentication.status
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        CreateDetailRequest: (address, token) => {
            return dispatch(CreateDetailRequest(address, token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NaverPlaceCard);