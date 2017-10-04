import React, { Component } from 'react';
import Header from '../Header'
import PagesRouter from '../../routes/Pages'

class Pages extends Component{
    render(){
        return (
            <div>
                <Header/>
                <PagesRouter/>
            </div>
        )
    }
}

export default Pages;