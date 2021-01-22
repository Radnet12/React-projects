import React from "react";
import s from "./Cards.module.scss";

export const Cards = () => {
    return (
        <div className={s.cards}>
            <ul className={s.cards__list}>
                <li className={s.item}>
                    <div className={s.item__image}>
                        <a href="#" className={s.item__link}>
                            <img
                                src="https://image.tmdb.org/t/p/w342/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className={s.item__rating}>
                        <span>7.8</span>
                    </div>
                    <div className={s.item__bottom}>
                        <div className={s.item__title}>
                            <a href="#">Бойцовский клуб</a>
                        </div>
                        <div className={s.item__date}>18.03.20</div>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.item__image}>
                        <a href="#" className={s.item__link}>
                            <img
                                src="https://image.tmdb.org/t/p/w342/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className={s.item__rating}>
                        <span>7.8</span>
                    </div>
                    <div className={s.item__bottom}>
                        <div className={s.item__title}>
                            <a href="#">Бойцовский клуб</a>
                        </div>
                        <div className={s.item__date}>18.03.20</div>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.item__image}>
                        <a href="#" className={s.item__link}>
                            <img
                                src="https://image.tmdb.org/t/p/w342/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className={s.item__rating}>
                        <span>7.8</span>
                    </div>
                    <div className={s.item__bottom}>
                        <div className={s.item__title}>
                            <a href="#">Бойцовский клуб</a>
                        </div>
                        <div className={s.item__date}>18.03.20</div>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.item__image}>
                        <a href="#" className={s.item__link}>
                            <img
                                src="https://image.tmdb.org/t/p/w342/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className={s.item__rating}>
                        <span>7.8</span>
                    </div>
                    <div className={s.item__bottom}>
                        <div className={s.item__title}>
                            <a href="#">Бойцовский клуб</a>
                        </div>
                        <div className={s.item__date}>18.03.20</div>
                    </div>
                </li>
                <li className={s.item}>
                    <div className={s.item__image}>
                        <a href="#" className={s.item__link}>
                            <img
                                src="https://image.tmdb.org/t/p/w342/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"
                                alt=""
                            />
                        </a>
                    </div>
                    <div className={s.item__rating}>
                        <span>7.8</span>
                    </div>
                    <div className={s.item__bottom}>
                        <div className={s.item__title}>
                            <a href="#">Бойцовский клуб</a>
                        </div>
                        <div className={s.item__date}>18.03.20</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};
