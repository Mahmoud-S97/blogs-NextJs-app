import React, { Fragment, JSX } from 'react';
import MainNavigation from './main-navigation';
import Notification from '../ui/notification';
import { useApp } from '@/hooks/app/useApp';

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {

    const { message } = useApp();

    return (
        <Fragment>
            <MainNavigation />
            <main>
                {children}
            </main>
            {message && <div className='w-full min-h-screen bg-black/50 fixed top-0 left-0 z-9999'><Notification {...message} /></div>}
        </Fragment>
    )
}

export default Layout;