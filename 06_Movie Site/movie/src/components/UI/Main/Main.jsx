import React from 'react';
import s from './Main.module.scss';

export const MainWrap = ({ children }) => {
    return <main className={s.main}>{children}</main>;
};