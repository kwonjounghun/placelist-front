import React from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import HeaderContainer from 'containers/HeaderContainer'

const MyListPage = ()=>{
    return (
        <div>
            <PageTemplate name="page" Header={<HeaderContainer/>}>
                <div className="container">MyListPage</div>
            </PageTemplate>
        </div>
    );
};

export default MyListPage;