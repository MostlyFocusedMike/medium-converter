import React, { ReactNode } from 'react';
import AppContext from '.';

interface ContextProviderPropsIntf {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderPropsIntf>= ({ children }) => {
    const context = {
        test: 'hello there'
    }

    return (
        <AppContext.Provider value={ context }>
            {children}
        </AppContext.Provider>
    );
}

export default ContextProvider;
