import React, { ReactNode, useState } from 'react';
import AppContext from '.';

interface ContextProviderPropsIntf {
    children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderPropsIntf>= ({ children }) => {
    const [fullJson, setFullJson] = useState<any>([]); // figure out interface

    const context = {
        test: 'hello there',
        fullJson,
        setFullJson,
    }

    return (
        <AppContext.Provider value={ context }>
            {children}
        </AppContext.Provider>
    );
}

export default ContextProvider;
