import React from 'react';
import { Container } from '../UI/Container/Container';
import s from './Main.module.scss';

export const Main = () => {
    return (
        <section className={s.main}>
            <Container>
                <div className={s.main__offer}>
                    <h1>Смотрите любимое кино здесь</h1>
                    <div className={s.main__search}>
                        <input
                            type="text"
                            placeholder="Найти фильм или сериал..."
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};