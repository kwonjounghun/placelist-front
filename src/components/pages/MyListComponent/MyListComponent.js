import React from 'react';
import basicTemplate from 'components/templates/basicTemplate'

class MyListComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <basicTemplate name="name"/>
            </div>
        )
    }
}

export default MyListComponent;