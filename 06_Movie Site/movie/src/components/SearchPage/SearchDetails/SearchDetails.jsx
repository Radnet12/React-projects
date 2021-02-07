import React from "react";
import s from "./SearchDetails.module.scss";

export const SearchDetails = () => {
    return (
        <div className={s.search}>
            <ul className={s.search__list}>
                <li className={s.search__item}>
                    <a href="#" className={s.search__link}>
                        <div className={s.search__poster}>
                            <img src="" alt="" />
                        </div>
                        <div className={s.search__info}>
                            <div className={s.search__title}>
                                Название фильма
                            </div>
                            <div className={s.search__date}>10.10.2020</div>
                            <div className={s.search__overview}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quae, neque repellendus asperiores aliquid dolorum perspiciatis eum recusandae eos cum suscipit odit corrupti, molestias dolores, impedit labore reiciendis consequuntur est.
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    );
};
