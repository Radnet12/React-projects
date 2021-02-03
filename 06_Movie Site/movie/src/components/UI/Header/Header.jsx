import React, { useEffect } from "react";
import s from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import { Container } from "../Container/Container";
import { connect } from "react-redux";
import { updateText, getSearchResults, zeroOutSearchResults } from "../../../store/actions/movies";
import { useDebounce } from "../../../api/useDebounce";

const Header = ({updateText,searchText,getSearchResults,movies,zeroOutSearchResults}) => {
    const debouncedText = useDebounce(searchText, 400);
    useEffect(() => {
        if (searchText.length > 0) {
            getSearchResults(searchText);
        } else {
            zeroOutSearchResults();
        }
    }, [debouncedText]);

    const getRelevantAnswer = () => {
        if (movies.length === 0 && searchText.length > 0) {
            return (
                <li className={s.header__searched_info}>
                    К сожаления, по Вашему запросу ничего не найдено
                </li>
            );
        } else if (movies.length === 0 && searchText.length === 0) {
            return (
                <li className={s.header__searched_info}>
                    Введите что-нибудь для поиска
                </li>
            );
        } else {
            const regexp = new RegExp(searchText, "g");
            return movies
                .filter((movie) => movie.media_type !== "person")
                .map((movie) => {
                    const name = (movie.title || movie.original_title || movie.name || movie.original_name).replace(
                        regexp,
                        `<span style="background-color: var(--color-highlight)" class="s.header__search_highlited">${searchText}</span>`
                    );
                    return (
                        <li key={movie.id} className={s.header__searched_item}>
                            <Link to={`/catalog/${movie.media_type}/${movie.id}`} className={s.header__searched_link}>
                                {movie.media_type === "movie" ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <circle
                                            cx="256"
                                            cy="256"
                                            r="256"
                                            fill="#ff0037"
                                        />
                                        <path
                                            d="M512 256a257.75 257.75 0 00-3.485-42.218l-118.15-118.15-289.608 124.09v192.24l92.208 92.208C213.131 509.277 234.247 512 256 512c141.385 0 256-114.615 256-256z"
                                            fill="#d30f0f"
                                        />
                                        <path
                                            fill="#414952"
                                            d="M100.76 219.72h310.48v192.24H100.76z"
                                        />
                                        <path
                                            fill="#23272b"
                                            d="M255.76 219.72h155.48v192.24H255.76z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M100.76 219.72h310.48v53.57H100.76z"
                                        />
                                        <path
                                            fill="#f7f7f7"
                                            d="M255.76 219.72h155.48v53.57H255.76z"
                                        />
                                        <path
                                            fill="#707789"
                                            d="M259 273.295h-28.667L253 219.722h28.667z"
                                        />
                                        <path
                                            fill="#636978"
                                            d="M281.667 219.722h-25.905v53.573H259z"
                                        />
                                        <g fill="#707789">
                                            <path d="M194.212 273.295h-28.666l22.666-53.573h28.667zM129.424 273.295h-28.666l22.666-53.573h28.667z" />
                                        </g>
                                        <g fill="#636978">
                                            <path d="M323.788 273.295h-28.667l22.667-53.573h28.666zM388.576 273.295h-28.667l22.667-53.573h28.666z" />
                                        </g>
                                        <path
                                            fill="#fff"
                                            d="M88.344 167.617L390.39 95.645l12.418 52.115-302.046 71.972z"
                                        />
                                        <path
                                            fill="#f7f7f7"
                                            d="M390.365 95.632L255.762 127.71v55.072l147.022-35.037z"
                                        />
                                        <path
                                            fill="#707789"
                                            d="M254.689 183.037l-27.885 6.646 9.63-57.367 27.886-6.646z"
                                        />
                                        <path
                                            fill="#636978"
                                            d="M255.762 127.71v48.938l8.558-50.978z"
                                        />
                                        <g fill="#707789">
                                            <path d="M191.667 198.056l-27.886 6.646 9.63-57.367 27.886-6.646zM128.644 213.076l-27.886 6.645 9.631-57.367 27.885-6.646z" />
                                        </g>
                                        <g fill="#636978">
                                            <path d="M317.712 168.018l-27.886 6.646 9.631-57.367 27.886-6.646zM380.735 152.999l-27.886 6.646 9.631-57.367 27.885-6.646z" />
                                        </g>
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                    >
                                        <path d="M0 61h512v300H0zM341 421v-30H171v30h-50v30h270v-30z" />
                                    </svg>
                                )}
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: `${name}`,
                                    }}
                                ></span>
                                <span className={s.header__searched_indicator}>
                                    {movie.media_type === "movie"
                                        ? "Фильм"
                                        : "Сериал"}
                                </span>
                            </Link>
                        </li>
                    );
                });
        }
    };
    return (
        <header className={s.header}>
            <Container>
                <div className={s.header__wrapper}>
                    <div className={s.header__logo}>
                        <Link to="/">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <circle
                                    cx="256"
                                    cy="256"
                                    r="256"
                                    fill="#ff0037"
                                />
                                <path
                                    d="M512 256a257.75 257.75 0 00-3.485-42.218l-118.15-118.15-289.608 124.09v192.24l92.208 92.208C213.131 509.277 234.247 512 256 512c141.385 0 256-114.615 256-256z"
                                    fill="#d30f0f"
                                />
                                <path
                                    fill="#414952"
                                    d="M100.76 219.72h310.48v192.24H100.76z"
                                />
                                <path
                                    fill="#23272b"
                                    d="M255.76 219.72h155.48v192.24H255.76z"
                                />
                                <path
                                    fill="#fff"
                                    d="M100.76 219.72h310.48v53.57H100.76z"
                                />
                                <path
                                    fill="#f7f7f7"
                                    d="M255.76 219.72h155.48v53.57H255.76z"
                                />
                                <path
                                    fill="#707789"
                                    d="M259 273.295h-28.667L253 219.722h28.667z"
                                />
                                <path
                                    fill="#636978"
                                    d="M281.667 219.722h-25.905v53.573H259z"
                                />
                                <g fill="#707789">
                                    <path d="M194.212 273.295h-28.666l22.666-53.573h28.667zM129.424 273.295h-28.666l22.666-53.573h28.667z" />
                                </g>
                                <g fill="#636978">
                                    <path d="M323.788 273.295h-28.667l22.667-53.573h28.666zM388.576 273.295h-28.667l22.667-53.573h28.666z" />
                                </g>
                                <path
                                    fill="#fff"
                                    d="M88.344 167.617L390.39 95.645l12.418 52.115-302.046 71.972z"
                                />
                                <path
                                    fill="#f7f7f7"
                                    d="M390.365 95.632L255.762 127.71v55.072l147.022-35.037z"
                                />
                                <path
                                    fill="#707789"
                                    d="M254.689 183.037l-27.885 6.646 9.63-57.367 27.886-6.646z"
                                />
                                <path
                                    fill="#636978"
                                    d="M255.762 127.71v48.938l8.558-50.978z"
                                />
                                <g fill="#707789">
                                    <path d="M191.667 198.056l-27.886 6.646 9.63-57.367 27.886-6.646zM128.644 213.076l-27.886 6.645 9.631-57.367 27.885-6.646z" />
                                </g>
                                <g fill="#636978">
                                    <path d="M317.712 168.018l-27.886 6.646 9.631-57.367 27.886-6.646zM380.735 152.999l-27.886 6.646 9.631-57.367 27.885-6.646z" />
                                </g>
                            </svg>
                        </Link>
                    </div>
                    <ul className={s.header__list}>
                        <li className={s.header__item}>
                            <NavLink
                                activeClassName={s.header__link_active}
                                className={s.header__link}
                                to="/movie"
                            >
                                Фильмы
                            </NavLink>
                        </li>
                        <li className={s.header__item}>
                            <NavLink
                                activeClassName={s.header__link_active}
                                className={s.header__link}
                                to="/tv"
                            >
                                Сериалы
                            </NavLink>
                        </li>
                    </ul>
                    <div className={s.header__search}>
                        <input
                            className={s.search}
                            placeholder="Ищите кино прямо здесь..."
                            type="text"
                            value={searchText}
                            onChange={(e) => {
                                updateText(e.target.value);
                            }}
                        />
                        <ul className={s.header__searched_list}>
                            {getRelevantAnswer()}
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
};

function mapStateToProps(state) {
    return {
        searchText: state.moviesPage.searchText,
        movies: state.moviesPage.searchedMovies,
    };
}

export default connect(mapStateToProps, {
    updateText,
    getSearchResults,
    zeroOutSearchResults
})(Header);
