import React from 'react';
import {connect} from 'react-redux';
import {GetMyListRequest} from 'actions/MyList';

class MyListContainer extends React.Component{
    componentWillMount(){
        this.props.GetMyListRequest(this.props.token);
    }
    render(){
        return (
            <div>{this.props.MyList.map((PlaceList, i)=>{
                return(<pre>{PlaceList.name}</pre>)
            })}</div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.authentication.status.token,
        MyList : state.MyList.MyList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetMyListRequest: (token) => {
            return dispatch(GetMyListRequest(token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyListContainer);