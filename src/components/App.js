import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MyListComponent from 'components/pages/MyListComponent';

class App extends React.Component {
    render(){
        return (
            <div>
                <MyListComponent>홈페이지</MyListComponent>
            </div>
        );
    }
}

export default App;