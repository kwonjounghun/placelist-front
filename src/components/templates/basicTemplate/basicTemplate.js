import React from 'react';

class basicTemplate extends React.Component {
    render(){
        return (
            <div>
                기본템플릿
                {this.props.name}
            </div>
        )
    }
}

export default basicTemplate;