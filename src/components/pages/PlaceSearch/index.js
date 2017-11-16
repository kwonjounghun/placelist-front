import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BasicSearchRequest } from 'actions/PlaceSearch';
import PlaceCard from 'components/PlaceCard';
import NaverSearch from 'components/pages/NaverSearch';
let Materialize = window.Materialize;
const $ = window.$;

class PlaceSearch extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.startSearch = this.startSearch.bind(this);
        this.serchEventHandle = this.serchEventHandle.bind(this);
        if(this.props.keyword !== null){
            this.state = {
                keyword: this.props.keyword
            }
        }
        this.state = {
            keyword: "",
            is_search : null
        }
    }
    componentDidMount() {

    }
    startSearch() {
        if(this.state.keyword === ""){
            let $toastContent = $('<span style="color: #FFB4BA">검색어를 입력해 주세요.</span>');
            Materialize.toast($toastContent, 2000);
            return;
        }
        this.props.BasicSearchRequest(this.state.keyword, this.props.userInfo.token).then(
            ()=>{
                this.props.basicList.length === 0 ? this.setState({is_search : false}) : this.setState({is_search : true})
            }
        );
    }
    handleChange(e) {
        this.setState({
            keyword: e.target.value
        })

        if (e.keyCode == 13) {
            this.startSearch();
        }
    }
    serchEventHandle(e) {
        e.preventDefault();
        this.startSearch();
    }

    render() {
        const basicList = (
            this.props.basicList.map((listdatas, i) => {
                return (<PlaceCard name={listdatas.name} id={listdatas._id} g_id={listdatas.G_place_id} key={i} />)
            })
        );
        const notList = (
            <p>검색결과가 없습니다.</p>
        )
        return (
            <div className="container">
                <div className="row">
                    <div className="input-field col s10">
                        <input id="keyword" type="text" name="keyword" className="validate" onKeyUp={this.handleChange}/>
                        <label htmlFor="keyword">장소명 검색</label>

                    </div>
                    <a href="" className="btn waves-effect waves-light btn-large col s2" onClick={this.serchEventHandle}><i className="material-icons">send</i> 찾기</a>
                </div>
                <div className="row">
                    {this.state.is_search === false ? notList : basicList }
                </div>
                <div className="row">
                    <NaverSearch isNaver={this.props.isNaver} keyword={this.state.keyword} push={this.props.history.push}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.authentication.status,
        basicList: state.placesearch.places.basicList,
        isNaver : state.placesearch.isNaver,
        keyword : state.placesearch.keyword
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        BasicSearchRequest: (keyword, token) => {
            return dispatch(BasicSearchRequest(keyword, token));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaceSearch);