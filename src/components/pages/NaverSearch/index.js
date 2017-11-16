import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NaverSearchRequest } from 'actions/PlaceSearch';

import NaverPlaceCard from 'components/NaverPlaceCard'

class NaverSearch extends Component{
    constructor(props){
        super(props);
        this.onSearchNaver = this.onSearchNaver.bind(this)
    }
    onSearchNaver(){
        this.props.NaverSearchRequest(this.props.keyword, this.props.userInfo.token)
    }
    render(){
        const naverButton = (
            <button className="btn waves-effect waves-light btn-large" onClick={this.onSearchNaver}>네이버로 "{this.props.keyword}"찾기</button>
        )
        return(
            <div>
                {this.props.isNaver? naverButton : ""}
                <div className="row">
                    {this.props.NaverList.map((naverList, i) => {
                        return (<NaverPlaceCard key={i} title={naverList.title} address={naverList.address} placeInfo = {naverList} push={this.props.push}/>)
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        userInfo: state.authentication.status,
        NaverList: state.placesearch.places.NaverList,
        isNaver : state.placesearch.isNaver
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        NaverSearchRequest: (keyword, token) => {
            return dispatch(NaverSearchRequest(keyword, token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NaverSearch);