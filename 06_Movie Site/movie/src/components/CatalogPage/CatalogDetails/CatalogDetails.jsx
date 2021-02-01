import React, { useState } from "react";
import s from "./CatalogDetails.module.scss";

export const CatalogDetails = ({ cast, crew }) => {
    const [tab, setTab] = useState(1);
    if (cast !== undefined && crew !== undefined) {
        const returnCorrectTab = () => {
            if (tab === 3) {
                return (
                    <ul></ul>
                )
            } else if (tab === 2) {
                return (
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
                )
            } else {
                return (
                    <ul className={s.person}>
                        {cast.map((person) => {
                            return (
                                <li
                                    key={person.cast_id}
                                    className={s.person__item}
                                >
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
                                            <span>Персонаж:</span>{" "}
                                            {person.character}
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                );
            }
        };
        return (
            <section className={s.details}>
                <ul className={s.details__tabs}>
                    <li className={tab === 1 ? `${s.details__tabs_item} ${s.details__tabs_item_active}` : `${s.details__tabs_item}`} onClick={() => setTab(1)}>Актёрский состав</li>
                    <li className={tab === 2 ? `${s.details__tabs_item} ${s.details__tabs_item_active}` : `${s.details__tabs_item}`} onClick={() => setTab(2)}>Съемочная группа</li>
                    <li className={tab === 3 ? `${s.details__tabs_item} ${s.details__tabs_item_active}` : `${s.details__tabs_item}`} onClick={() => setTab(3)}>Отзывы</li>
                </ul>
                <div>
                    <div className={s.details__content}>
                        {returnCorrectTab()}
                    </div>
                </div>
            </section>
        );
    } else {
        return null;
    }
};
