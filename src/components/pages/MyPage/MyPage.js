import React from 'react';
import PageTemplate from 'components/templates/PageTemplate';
import HeaderContainer from 'containers/HeaderContainer'

const MyPage = () =>{
    return (
        <PageTemplate name="page" Header={<HeaderContainer/>}>
            <div className="container">MyPage</div>
        </PageTemplate>
    )
}

export default MyPage;