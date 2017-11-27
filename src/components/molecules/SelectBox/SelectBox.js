import React from 'react';
import ReactDOM from 'react-dom'
import OptionComponent from 'components/atoms/OptionComponent';
const $ = window.$;

class SelectBox extends React.Component {

    componentDidMount(){
        $(document).ready(function () {
            $('select').material_select();
        });
        $(ReactDOM.findDOMNode(this.refs.testSelect)).on('change',this.handleSelectChange.bind(this));
    }
    componentDidUpdate() {
        $(document).ready(function () {
            $('select').material_select();
        });
    }
    handleSelectChange(event){
        event.preventDefault();
        this.props.FHandle(event.target.name, event.target.value);
    }
    render() {
        return (
            <select ref="testSelect" name={this.props.name} defaultValue="null">
                <option value="null" disabled>{this.props.placeholder}</option>
                { this.props.options === [] || this.props.options === null ? null : this.props.options.map((OptionArray, i) => {
                    return(<OptionComponent OptionA={OptionArray} key={i} />)
                })}
            </select>
        );
    }
}
SelectBox.defaultProps = {
    options: []
};

export default SelectBox;