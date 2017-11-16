import React, { Component } from 'react';
let $ = window.$;

class PlaceFilter extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.collapsible').collapsible();
            $('select').material_select();
        });
    }
    render() {
        return (
            <div>
                <ul className="collapsible" data-collapsible="accordion">
                    <li>
                        <div className="collapsible-header">
                            <i className="material-icons">tune</i>필터
                            <i className="material-icons">remove_red_eye</i>방문<span>했던 곳</span>
                            <i className="material-icons">reorder</i>카테고리<span>모두</span>
                            <i className="material-icons">pin_drop</i>지도<span>켜기</span>
                        </div>
                        <div className="collapsible-body">
                            <div className="input-field col s12">
                                <select defaultValue="">
                                    <option value="0">모두</option>
                                    <option value="1">방문 했던 곳</option>
                                    <option value="2">방문 안한 곳</option>
                                </select>
                                <label>방문여부</label>
                            </div>
                        </div>
                        <div className="collapsible-body">
                            <div className="input-field col s12">
                                <select defaultValue="0">
                                    <option value="0">모두</option>
                                    <option value="1">카페</option>
                                    <option value="2">음식점</option>
                                    <option value="3">공원</option>
                                    <option value="4">숙박</option>
                                    <option value="5">레저</option>
                                    <option value="6">놀이</option>
                                    <option value="7">쇼핑</option>
                                </select>
                                <label>카테고리</label>
                            </div>
                        </div>
                        <div className="collapsible-body">
                            <div className="input-field col s12">
                                <select defaultValue="0">
                                    <option value="1">켜기</option>
                                    <option value="2">끄기</option>
                                </select>
                                <label>지도</label>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PlaceFilter;