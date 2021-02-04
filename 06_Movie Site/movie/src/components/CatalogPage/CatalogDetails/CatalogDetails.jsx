import React, { useState } from "react";
import s from "./CatalogDetails.module.scss";

export const CatalogDetails = ({ cast, crew, reviews, seasons }) => {
    const [tab, setTab] = useState(1);
    const [isContentHidden, setIsContentHidden] = useState(true);
    const getCorrectImage = (src) => {
        if (src === null) {
            return "https://dummyimage.com/60x60/a6a6a6/fff.jpg&text=%D0%9D%D0%B5%D1%82+%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%B0";
        } else if (src.search("http").toString() === "-1") {
            return `https://secure.gravatar.com/avatar${src}`;
        } else {
            return src.replace(/\//, "");
        }
    };
    const returnCorrectTab = () => {
        if (tab === 3) {
            return (
                <ul className={s.review}>
                    {reviews.length !== 0 ? (
                        reviews.map((review) => {
                            return (
                                <li key={review.id} className={s.review__item}>
                                    <div className={s.review__details}>
                                        <div className={s.review__image}>
                                            <img
                                                src={getCorrectImage(
                                                    review.author_details
                                                        .avatar_path
                                                )}
                                                alt={review.author}
                                                title={review.author}
                                                loading="lazy"
                                            />
                                        </div>
                                        <span className={s.review__name}>
                                            {review.author}
                                        </span>
                                    </div>
                                    <div className={s.review__content}>
                                        {review.content}
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <p>К сожаления, отзывов ещё нет</p>
                    )}
                </ul>
            );
        } else if (tab === 2) {
            return (
                <ul className={s.person}>
                    {crew.length !== 0 ? (
                        crew.map((person) => {
                            return (
                                <li
                                    key={person.credit_id}
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
                                            <span>Должность:</span> {person.job}
                                        </div>
                                    </div>
                                </li>
                            );
                        })
                    ) : (
                        <p>К сожаления, данной информации нет</p>
                    )}
                </ul>
            );
        } else if (tab === 4) {
            return (
                <ul className={s.seasons}>
                    {seasons.map((season) => {
                        return (
                            <li key={season.id} className={s.seasons__season}>
                                <div className={s.seasons__poster}>
                                    <img
                                        src={
                                            season.poster_path !== null
                                                ? `https://image.tmdb.org/t/p/w154${season.poster_path}`
                                                : "https://dummyimage.com/154x231/a6a6a6/fff.jpg&text=%D0%9D%D0%B5%D1%82+%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D0%B0"
                                        }
                                        alt={`Постер ${season.poster_path}`}
                                        title={`Постер ${season.poster_path}`}
                                    />
                                </div>
                                <div className={s.seasons__info}>
                                    <div className={s.seasons__top}>
                                        <span>{season.name}</span>
                                        <span>
                                            Эпизодов: {season.episode_count}
                                        </span>
                                    </div>
                                    <div className={s.seasons__overview}>
                                        {season.overview ? season.overview : "К сожалению, к данному сезону нет описания"}
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            return (
                <ul className={s.person}>
                    {cast.length !== 0 ? (
                        cast.map((person) => {
                            return (
                                <li
                                    key={person.credit_id}
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
                        })
                    ) : (
                        <p>К сожаления, данной информации нет</p>
                    )}
                </ul>
            );
        }
    };
    return (
        <div className={s.details}>
            <div className={s.details__header}>
                <ul className={s.details__tabs}>
                    <li
                        className={
                            tab === 1
                                ? `${s.details__tabs_item} ${s.details__tabs_item_active}`
                                : `${s.details__tabs_item}`
                        }
                        onClick={() => {
                            setTab(1);
                            setIsContentHidden(true);
                        }}
                    >
                        Актёрский состав
                    </li>
                    <li
                        className={
                            tab === 2
                                ? `${s.details__tabs_item} ${s.details__tabs_item_active}`
                                : `${s.details__tabs_item}`
                        }
                        onClick={() => {
                            setTab(2);
                            setIsContentHidden(true);
                        }}
                    >
                        Съемочная группа
                    </li>
                    <li
                        className={
                            tab === 3
                                ? `${s.details__tabs_item} ${s.details__tabs_item_active}`
                                : `${s.details__tabs_item}`
                        }
                        onClick={() => {
                            setTab(3);
                            setIsContentHidden(false);
                        }}
                    >
                        Отзывы
                    </li>
                    {seasons && (
                        <li
                            className={
                                tab === 4
                                    ? `${s.details__tabs_item} ${s.details__tabs_item_active}`
                                    : `${s.details__tabs_item}`
                            }
                            onClick={() => {
                                setTab(4);
                                setIsContentHidden(false);
                            }}
                        >
                            О сезонах
                        </li>
                    )}
                </ul>
                {(tab !== 3 && tab !== 4) && (
                    <div
                        className={s.details__tabs_item}
                        onClick={() =>
                            setIsContentHidden((prevState) => !prevState)
                        }
                    >
                        {isContentHidden ? "Показать всех" : "Скрыть всех"}
                    </div>
                )}
            </div>
            <div
                className={
                    isContentHidden
                        ? `${s.details__content}`
                        : `${s.details__content} ${s.details__content_active}`
                }
            >
                {returnCorrectTab()}
            </div>
        </div>
    );
};
