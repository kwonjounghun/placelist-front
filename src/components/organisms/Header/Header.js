import React from 'react';
import Logo from 'components/atoms/Logo';
import { NavLink } from 'react-router-dom';
const $ = window.$
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.sideNavToggle = this.sideNavToggle.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.state = {
            sideNav: true,
            sideNavStyle: false
        };
    }

    sideNavToggle() {
        // sideNav를 toggle함
        console.log("클릭");
        $(".button-collapse").sideNav();
    };

    onClickBg(){
        $("#sidenav-overlay").click();
    }

    updateDimensions() {
        if (window.innerWidth < 993) {
            if (this.state.sideNav === false) {
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

        // resize event를 만들어줌
        window.addEventListener("resize", this.updateDimensions);
        // updateDimensions를 한번 실행시킴 초기 state.sideNav값이 true이지만 처음실행하는 디바이스가 웹인지 모바일인지 구분하기 위해서 resize함수를 한번 실행시킴
        this.updateDimensions();
        // 초기 디바이스가 넓이가 993보다 작은지를 비교하여 작다면 sideNavToggle 함수를 실행
        this.usesideNavFuc();
    }
    componentDidUpdate(prevProps, prevState) {
        // 초기 디바이스가 넓이가 993보다 작은지를 비교하여 작다면 sideNavToggle 함수를 실행
        this.usesideNavFuc();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <div className="container">
                        <Logo />
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul className={this.state.sideNav ? 'side-nav' : 'right hide-on-med-and-down'} id={this.state.sideNav ? "mobile-demo" : ""} >
                            <li><NavLink to="/MyPage" onClick={this.onClickBg}>마이 페이지</NavLink></li>
                            <li><a href="#" onClick={this.props.signout}>로그아웃</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

export default Header;