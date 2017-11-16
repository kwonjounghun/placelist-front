import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PlaceCard extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const link = `/PlaceDetail/${this.props.id}`
        return (
            <Link to={link} className="card">
                <div className="row">
                    <div className="card-image waves-effect waves-block waves-light col s2">
                        <img className="activator" src="http://via.placeholder.com/350x350" />
                    </div>
                    <div className="card-content col s10">
                        <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                        <p><span>{this.props.name}</span></p>
                    </div>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </Link>
        )
    }
}

export default PlaceCard;