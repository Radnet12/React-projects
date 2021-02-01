import React from 'react';
import { Container } from '../Container/Container';
import s from './MainTemplate.module.scss';

export const MainTemplate = ({children}) => {
    return (
        <section>
            <Container>
                <div className={s.main__wrapper}>{children}</div>
            </Container>
        </section>
    );
};