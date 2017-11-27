import React from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import HeaderContainer from 'containers/HeaderContainer'
import MyListContainer from 'containers/MyListContainer';
import FillterContainer from 'containers/FillterContainer';

const MyListPage = ()=>{
    return (
        <div>
            <PageTemplate name="page" Header={<HeaderContainer/>}>
                <div className="container">
                    <FillterContainer/>
                    <MyListContainer/>
                </div>
            </PageTemplate>
        </div>
    );
};

export default MyListPage;