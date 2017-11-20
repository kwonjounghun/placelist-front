import React from 'react';
import OptionComponent from 'components/atoms/OptionComponent';
const $ = window.$;

class SelectBox extends React.Component {
    componentDidMount() {
        $(document).ready(function () {
            $('select').material_select();
        });
    }
    render() {
        return (
            <select defaultValue="0">
                <option value="0" disabled>{this.props.placeholder}</option>
                {this.props.options.map((OptionArray, i) => {
                    return(<OptionComponent OptionA={OptionArray} key={i} />)
                })}
            </select>
        );
    }
}


export default SelectBox;