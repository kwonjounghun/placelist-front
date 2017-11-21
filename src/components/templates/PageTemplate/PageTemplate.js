import React from 'react';

const PageTemplate = ({name, Header, children}) =>{
    return (
        <div>
            {Header}
            {children}
        </div>
    );
};
export default PageTemplate;