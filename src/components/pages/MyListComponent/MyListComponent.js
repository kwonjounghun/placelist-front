import React from 'react';
import PageTemplate from 'components/templates/PageTemplate';

const MyListComponent = ({children})=>{
    return (
        <div>
            myListComponent
            {children}
            <PageTemplate name="page"></PageTemplate>
        </div>
    );
};

export default MyListComponent;