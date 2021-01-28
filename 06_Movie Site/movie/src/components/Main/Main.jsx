import React from 'react';
import s from './Main.module.scss';

export const Main = () => {
    return (
        <section className={s.main}>
            <div className={s.main__offer}>
                <h1>Смотрите любимое кино здесь</h1>
                <div className={s.main__search}>
                    <input type="text" placeholder="Найти фильм или сериал..."/>
                </div>
            </div>
        </section>
    )
};