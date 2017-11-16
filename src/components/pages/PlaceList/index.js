import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MapContainer from 'components/MapContainer';
import PlaceFilter from 'components/PlaceFilter';
import PlaceCard from 'components/PlaceCard';
import { GetPlaceListRequest } from 'actions/PlaceList';

import { connect } from 'react-redux';

const $ = window.$;
class PlaceList extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.GetPlaceListRequest(this.props.userInfo.token);
    }

    render() {
        const style = {
            position: "relative"
        }
        const MapContainerStlye = {
            position: "relative",
            width: "100%",
            height: "500px",
            marginBottom: "30px"
        }
        const buttonsWrap = {
            position: "relative",
            width: "100%",
            overflow: "hidden",
            marginBottom: "30px"
        }
        const button = {
            float: "right"
        }
        return (
            <div>
                <div className="container" style={style}>
                    <PlaceFilter />
                    <div style={MapContainerStlye}>
                        <MapContainer marker={this.props.myList}/>
                    </div>
                    <div style={buttonsWrap}>
                        <Link to="/PlaceSearch" className="waves-effect waves-light btn-large" style={button}>추가하기</Link>
                    </div>
                    {this.props.myList.map((datas, i) => {
                        return (<PlaceCard name={datas.name} id={datas._id} key={i} />)
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.authentication.status,
        myList: state.placeList.myList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetPlaceListRequest: (token) => {
            return dispatch(GetPlaceListRequest(token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceList);