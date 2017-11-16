import React, { Component } from 'react';
import { DetailSearchRequest, DetailAddRequest, DetailRemoveRequest } from 'actions/PlaceSearch';
import { connect } from 'react-redux';

import MapContainer from 'components/MapContainer'

class PlaceDetail extends Component {
    constructor(props) {
        super(props);
        this.addPlaceList = this.addPlaceList.bind(this);
        this.removePlaceList = this.removePlaceList.bind(this);
        this.state = { hasPlace: false };
    }
    componentDidMount() {
        for (var i in this.props.myList) {
            if (this.props.match.params.id === this.props.myList[i]._id) {
                this.setState({ hasPlace: true });
            }
        }

        this.props.DetailSearchRequest(this.props.match.params.id, this.props.userInfo.token);
    }
    addPlaceList() {
        this.props.DetailAddRequest(this.props.detailcontent, this.props.userInfo.currentUser, this.props.userInfo.token).then(
            () => {
                if (this.props.myListStatus) {
                    this.setState({ hasPlace: true });
                } else {
                    this.setState({ hasPlace: false });
                }
            }
        );
    }
    removePlaceList() {
        this.props.DetailRemoveRequest(this.props.detailcontent._id, this.props.userInfo.token).then(
            () => {
                if (this.props.myListStatus) {
                    this.setState({ hasPlace: true });
                } else {
                    this.setState({ hasPlace: false });
                }
            }
        );
    }
    render() {
        const MapContainerStlye = {
            position: "relative",
            width: "100%",
            height: "500px",
            marginBottom: "30px"
        }
        const addPlaceBtn = (
            <button className="waves-effect waves-light btn-large" onClick={this.addPlaceList}>추가하기</button>
        );
        const deleteBtn = (
            <button className="waves-effect waves-light btn-large" onClick={this.removePlaceList}>지우기</button>
        );
        return (
            <div className="container">
                <div style={MapContainerStlye}>
                    <MapContainer marker={[this.props.detailcontent]} />
                </div>

                <div className="row">
                    {this.state.hasPlace ? deleteBtn : addPlaceBtn}
                </div>
                <div className="row">
                    <div className="col s4">
                        <img className="activator" src="http://via.placeholder.com/350x350" />
                    </div>
                    <div className="col s8">
                        <h2>{this.props.detailcontent.name}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.authentication.status,
        detailcontent: state.placesearch.detailcontent,
        myList: state.placeList.myList,
        myListStatus: state.placeList.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        DetailSearchRequest: (id, token) => {
            return dispatch(DetailSearchRequest(id, token));
        },
        DetailAddRequest: (placeDetail, userId, token) => {
            return dispatch(DetailAddRequest(placeDetail, userId, token));
        },
        DetailRemoveRequest: (placeId, token) => {
            return dispatch(DetailRemoveRequest(placeId, token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail);