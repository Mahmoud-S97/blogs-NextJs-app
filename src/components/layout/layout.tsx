import React, { Fragment, JSX } from 'react';
import MainNavigation from './main-navigation';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
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