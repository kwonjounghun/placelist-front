import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLogoutsRequest } from '../../actions/Authentication'
const $ = window.$;

class Header extends Component {
    constructor(props) {
        super(props);
        this.sideNavToggle = this.sideNavToggle.bind(this);
        this.triggerModals = this.triggerModals.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            sideNav: true,
            sideNavStyle: false
        };
        console.log(window.innerWidth);
    }

    sideNavToggle() {
        // sideNav를 toggle함
        $(".button-collapse").sideNav();
    }

    triggerModals() {
        // 모달은 components/Modals 디렉토리에 정의되어있다.
        // 모달 열기
        $('#modal1').modal('open');
    }

    updateDimensions() {
        if (window.innerWidth < 993) {
            if (this.state.sideNav === false) {
                console.log("시작");
                this.setState({ sideNav: true });
            }
        } else {
            if (this.state.sideNav === true) {
                this.setState({ sideNav: false });
                if ($("body").attr("style")) {
                    // 이미 sideNav가 열린상태인데 웹디바이스로 전화할때 동작
                    // sideNav를 닫아줌
                    $(".button-collapse").trigger("click");
                    // sideNav가 사라지는 에니메이션 딜레이가 있기때문에 setTimeout을 통하여 attr제거를 지연시킴
                    setTimeout(function () {
                        // attr 속성이 남아있으면 웹뷰에서 메뉴 우측에 여백이 생기는 문제가 있기때문에 attr을 제거
                        $(".hide-on-med-and-down").removeAttr("style");
                    }, 200);
                } else {
                    // attr 속성이 남아있으면 웹뷰에서 메뉴 우측에 여백이 생기는 문제가 있기때문에 attr을 제거
                    $(".hide-on-med-and-down").removeAttr("style");
                }
            }
        }
    }

    usesideNavFuc() {
        // 초기 디바이스가 넓이가 993보다 작은지를 비교하여 작다면 sideNavToggle 함수를 실행
        if (window.innerWidth < 993) {
            this.sideNavToggle();
        }
    }

    componentDidMount() {
        // component가 만들어지고 첫 렌더링이 완료되었을때 실행할 코드
        // 모달을 초기화
        // 모달은 components/Modals 디렉토리에 정의되어있다.
        $('#modal1').modal();
        // resize event를 만들어줌
        window.addEventListener("resize", this.updateDimensions);
        // updateDimensions를 한번 실행시킴 초기 state.sideNav값이 true이지만 처음실행하는 디바이스가 웹인지 모바일인지 구분하기 위해서 resize함수를 한번 실행시킴
        this.updateDimensions();
        // 초기 디바이스가 넓이가 993보다 작은지를 비교하여 작다면 sideNavToggle 함수를 실행
        this.usesideNavFuc();
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("다시");
        // 초기 디바이스가 넓이가 993보다 작은지를 비교하여 작다면 sideNavToggle 함수를 실행
        this.usesideNavFuc();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    handleLogout() {
        console.log(this.props);
        return this.props.getLogoutsRequest().then(
            () => {
                console.log("header userInfo :", this.props.userInfo);
                let userInfo = this.props.userInfo;
                document.cookie = 'userInfo=' + btoa(JSON.stringify(userInfo));

            }
        );
    }

    render() {
        // 웹과 모바일의 메뉴구성이 비슷하기 때문에 따로 분류하여 관리
        // 웹이냐 모바일이냐에 따라서 class와 id가 달라지기때문에 this.state.sideNav를 이용하여 분기를 만듬
        let listItem = (
            <ul className={this.state.sideNav ? 'side-nav' : 'right hide-on-med-and-down'} id={this.state.sideNav ? "mobile-demo" : ""} >
                <li><NavLink to="/Pages/PlaceList" activeClassName="active">가고싶은 곳</NavLink></li>
                <li><NavLink to="/Pages/MyPage" activeClassName="active">마이페이지</NavLink></li>
                <li><a href="#" onClick={this.handleLogout}>로그아웃</a></li>
            </ul>
        )
        return (
            <nav>
                <div className="nav-wrapper">
                    <NavLink to="/Pages/" className="brand-logo">placeList</NavLink>
                    <a href="#" onClick={this.sideNavToggle} data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    {listItem}
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo : state.authentication.status
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getLogoutsRequest: () => {
            return dispatch(getLogoutsRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);