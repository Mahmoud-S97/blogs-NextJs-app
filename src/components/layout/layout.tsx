import React, { Fragment } from 'react';
import MainNavigation from './main-navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <MainNavigation />
            <main>
                {children}
            </main>
        </Fragment>
    )
}

export default Layout;