import React from "react";
import s from "./CatalogDetails.module.scss";

export const CatalogDetails = ({ cast, crew }) => {
    if (cast !== undefined && crew !== undefined) {
        return (
            <section className={s.details}>
                <ul className={s.details__tabs}>
                    <li className={s.details__tabs_item}>Актёрский состав</li>
                    <li className={s.details__tabs_item}>Съемочная группа</li>
                    <li className={s.details__tabs_item}>Отзывы</li>
                </ul>
                <div>
                    <div className={s.details__content}>
                        <ul className={s.person}>
                            {cast.map(person => {
                                return (
                                    <li key={person.cast_id} className={s.person__item}>
                                        <div className={s.person__image}>
                                            <img
                                                src={
                                                    person.profile_path !== null
                                                        ? `https://image.tmdb.org/t/p/w45${person.profile_path}`
                                                        : "https://dummyimage.com/45x68/a6a6a6/fff.jpg&text=%D0%9D%D0%B5%D1%82+%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%B0"
                                                }
                                                alt={person.name}
                                                title={person.name}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className={s.person__info}>
                                            <div className={s.person__detail}>
                                                <span>Имя:</span> {person.name}
                                            </div>
                                            <div className={s.person__detail}>
                                                <span>Персонаж:</span> {person.character}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={s.details__content}>
                        <ul className={s.person}>
                            {crew.map((person) => {
                                return (
                                    <li key={person.id} className={s.person__item}>
                                        <div className={s.person__image}>
                                            <img
                                                src={
                                                    person.profile_path !== null
                                                        ? `https://image.tmdb.org/t/p/w45${person.profile_path}`
                                                        : "https://dummyimage.com/45x68/a6a6a6/fff.jpg&text=%D0%9D%D0%B5%D1%82+%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%B0"
                                                }
                                                alt={person.name}
                                                title={person.name}
                                                loading="lazy"
                                            />
                                        </div>
                                        <div className={s.person__info}>
                                            <div className={s.person__detail}>
                                                <span>Имя:</span> {person.name}
                                            </div>
                                            <div className={s.person__detail}>
                                                <span>Должность:</span> {person.job}
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </section>
        );
    } else {
        return null;
    }
};
