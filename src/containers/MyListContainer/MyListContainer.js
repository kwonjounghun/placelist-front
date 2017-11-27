import React from 'react';
import { connect } from 'react-redux';
import { GetMyListRequest } from 'actions/MyList';
import { withRouter } from 'react-router-dom';

class MyListContainer extends React.Component {
    componentDidMount() {
        this.props.GetMyListRequest(this.props.match.params.sigugun, this.props.match.params.category, this.props.token);
    }
    componentWillReceiveProps(nextProps){
        if(JSON.stringify(this.props.match.params) !== JSON.stringify(nextProps.match.params)){
            this.props.GetMyListRequest(nextProps.match.params.sigugun, nextProps.match.params.category, this.props.token);
        }
    }
    render() {
        return (
            <div>{this.props.MyList.map((PlaceList, i) => {
                return (<pre key={i}>{PlaceList.name}</pre>)
            })}</div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.authentication.status.token,
        MyList: state.MyList.MyList
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetMyListRequest: (sigugun, category, token) => {
            return dispatch(GetMyListRequest(sigugun, category, token));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyListContainer));