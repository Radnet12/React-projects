import React, { useEffect } from "react";
import s from "./Header.module.scss";
import { NavLink, Link } from "react-router-dom";
import { Container } from "../Container/Container";
import { connect } from "react-redux";
import {
    updateText,
    getSearchResults,
    zeroOutSearchResults,
    setIsSearchOpen,
} from "../../../store/reducers/headerSearchReducer";
import { logout, requestNewToken } from "../../../store/reducers/authReducer";
import { useDebounce } from "../../../api/useDebounce";

const Header = ({
    updateText,
    searchText,
    getSearchResults,
    movies,
    zeroOutSearchResults,
    isSearchOpen,
    setIsSearchOpen,
    requestNewToken,
    isAuth,
    logout,
}) => {
    const debouncedText = useDebounce(searchText, 400);

    useEffect(() => {
        if (debouncedText.length > 0) {
            getSearchResults(debouncedText, "multi");
        } else {
            zeroOutSearchResults();
        }
    }, [debouncedText, getSearchResults, zeroOutSearchResults]);
    const getRelevantAnswer = () => {
        if (movies.length === 0 && searchText.length > 0) {
            return (
                <li className={s.header__searched_info}>
                    К сожаления, по Вашему запросу ничего не найдено &#128532;
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
                    const name = (
                        movie.title ||
                        movie.original_title ||
                        movie.name ||
                        movie.original_name
                    ).replace(
                        regexp,
                        `<span style="background-color: var(--color-highlight)" class="s.header__search_highlited">${searchText}</span>`
                    );
                    return (
                        <li
                            key={movie.id}
                            className={s.header__searched_item}
                            onClick={() => {
                                setIsSearchOpen();
                                zeroOutSearchResults();
                            }}
                        >
                            <Link
                                to={`/catalog/${movie.media_type}/${movie.id}`}
                                className={s.header__searched_link}
                            >
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
                    <div
                        className={s.header__logo}
                        onClick={isSearchOpen ? () => setIsSearchOpen() : null}
                    >
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
                    <nav>
                        <ul className={s.header__list}>
                            <li className={s.header__item}>
                                <NavLink
                                    activeClassName={s.header__link_active}
                                    className={s.header__link}
                                    to="/movie"
                                    onClick={
                                        isSearchOpen
                                            ? () => setIsSearchOpen()
                                            : null
                                    }
                                >
                                    Фильмы
                                </NavLink>
                            </li>
                            <li className={s.header__item}>
                                <NavLink
                                    activeClassName={s.header__link_active}
                                    className={s.header__link}
                                    to="/tv"
                                    onClick={
                                        isSearchOpen
                                            ? () => setIsSearchOpen()
                                            : null
                                    }
                                >
                                    Сериалы
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={s.header__right}>
                        <div className={s.header__search}>
                            <input
                                className={
                                    isSearchOpen === true
                                        ? `${s.search} ${s.search__active}`
                                        : `${s.search}`
                                }
                                placeholder="Ищите кино прямо здесь..."
                                type="text"
                                value={searchText}
                                onChange={(e) => {
                                    updateText(e.target.value);
                                }}
                            />
                            <button
                                className={s.header__search_btn}
                                onClick={() => setIsSearchOpen()}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="512"
                                    height="512"
                                    viewBox="0 0 512.005 512.005"
                                >
                                    <path
                                        d="M505.749 475.587l-145.6-145.6c28.203-34.837 45.184-79.104 45.184-127.317C405.333 90.926 314.41.003 202.666.003S0 90.925 0 202.669s90.923 202.667 202.667 202.667c48.213 0 92.48-16.981 127.317-45.184l145.6 145.6c4.16 4.16 9.621 6.251 15.083 6.251s10.923-2.091 15.083-6.251c8.341-8.341 8.341-21.824-.001-30.165zM202.667 362.669c-88.235 0-160-71.765-160-160s71.765-160 160-160 160 71.765 160 160-71.766 160-160 160z"
                                        fill="#fff"
                                        data-original="#000000"
                                        xmlns="http://www.w3.org/2000/svg"
                                    />
                                </svg>
                            </button>
                            <ul
                                className={
                                    isSearchOpen === true
                                        ? `${s.header__searched_list} ${s.header__searched_list_active}`
                                        : `${s.header__searched_list}`
                                }
                            >
                                {getRelevantAnswer()}
                            </ul>
                        </div>
                        {isAuth ? (
                            <button
                                className={s.header__login}
                                onClick={logout}
                            >
                                Выйти
                            </button>
                        ) : (
                            <button
                                className={s.header__login}
                                onClick={requestNewToken}
                            >
                                Войти
                            </button>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
};

function mapStateToProps(state) {
    return {
        searchText: state.headerSearch.searchText,
        movies: state.headerSearch.searchedMovies,
        isSearchOpen: state.headerSearch.isSearchOpen,
        isAuth: state.auth.isAuth
    };
}

export default connect(mapStateToProps, {
    updateText,
    getSearchResults,
    zeroOutSearchResults,
    setIsSearchOpen,
    requestNewToken,
    logout,
})(Header);
