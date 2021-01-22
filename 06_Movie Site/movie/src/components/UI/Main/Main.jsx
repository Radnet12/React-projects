import React from 'react';
import s from './Main.module.scss';

export const Main = ({children}) => {
    return (
        <main className={s.main}>
            {children}
        </main>
    )
};