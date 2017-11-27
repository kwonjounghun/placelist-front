import React from 'react';
import { connect } from 'react-redux';

import Fillter from 'components/organisms/Fillter';
import { withRouter } from 'react-router-dom';
import { GetFillterListRequest, SetFillterItemRequest } from 'actions/Fillter';
class FillterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.FillterChangehandle = this.FillterChangehandle.bind(this);
        this.SetFillterHandle = this.SetFillterHandle.bind(this);
    }
    FillterChangehandle(name, value) {
        let sigugun, category = null;
        if (name === "sigugun") {
            sigugun = value;
            this.SetFillterHandle(sigugun, this.props.fillterSeleted.category);
        } else if (name === "category") {
            category = value;
            this.SetFillterHandle(this.props.fillterSeleted.sigugun, category);
        }
    };
    SetFillterHandle(sigugun, category) {
        this.props.SetFillterItemRequest(sigugun, category).then(
            () => {
                this.props.history.push(`/${this.props.fillterSeleted.map}/${sigugun}/${category}`);
            }
        )
    }
    componentWillMount() {
        this.props.GetFillterListRequest(this.props.token);
    }

    render() {
        return (
            <div><Fillter FillterList={this.props.FillterList} FillterHandle={this.FillterChangehandle} /></div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.authentication.status.token,
        FillterList: state.Fillter.fillter,
        fillterSeleted: state.Fillter.fillterSeleted
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetFillterListRequest: (token) => {
            return dispatch(GetFillterListRequest(token));
        },
        SetFillterItemRequest: (sigugun, category) => {
            return dispatch(SetFillterItemRequest(sigugun, category));
        }
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FillterContainer));