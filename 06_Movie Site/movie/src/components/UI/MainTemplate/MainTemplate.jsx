import React from 'react';
import s from './MainTemplate.module.scss';

export const MainTemplate = ({children}) => {
    return <section className={s.main}>{children}</section>;
};