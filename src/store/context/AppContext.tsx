import React, { createContext, useEffect, useState } from 'react';

type StatusType = 'pending' | 'success' | 'error' | null;

type MessageType = {
    title: string;
    status: StatusType;
    body: string
}

type AppContextTypes = {
    message: MessageType | null,
    setMessageHandler: (message: MessageType | null) => void
}

const initialState: AppContextTypes = {
    message: {
        title: '',
        status: null,
        body: ''
    },
    setMessageHandler: () => { }
}

export const AppContext = createContext<AppContextTypes | undefined>(initialState);

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [message, setMessage] = useState<MessageType | null>(null);

    useEffect(() => {
        if (!message) return;

        const timeout = setTimeout(() => setMessageHandler(null), 5000); // 5 sec

        return () => clearTimeout(timeout);
    }, [message]);

    const setMessageHandler = (message: MessageType | null): void => {
        setMessage(message)
    }

    return <AppContext.Provider value={{ message, setMessageHandler }}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;