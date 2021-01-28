import React, { useEffect } from 'react';
import s from './Header.module.scss';
import {NavLink, Link} from 'react-router-dom';
import { Container } from '../Container/Container';
import { connect } from 'react-redux';
import { updateText, getSearchResults } from "../../../store/actions/movies";

const Header = ({ updateText, searchText, getSearchResults, movies }) => {
    console.log(movies);
    useEffect(() => {
        if (searchText.length > 0) {
            setTimeout(async () => {
                getSearchResults(searchText);
            }, 1000);
        }
    }, [searchText, getSearchResults]);
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
                        <ul className={movies.length > 0 ? `${s.header__searched_list} ${s.header__searched_list_active}` : s.header__searched_list}>
                            {movies.filter((movie) => movie.media_type !== "person").map((movie) => {
                                return (
                                    <li
                                        key={movie.id}
                                        className={
                                            movie.media_type === "movie"
                                                ? `${s.header__searched_item} ${s.header__searched_item_movie}`
                                                : `${s.header__searched_item} ${s.header__searched_item_tv}`
                                        }
                                    >
                                        {movie.media_type === "movie" ? (
                                            <svg
                                                height="512"
                                                viewBox="0 0 64 64"
                                                width="512"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g data-name="Layer 18">
                                                    <path d="M62 21H11v-1.07l51.17-8.83A1 1 0 0063 9.94l-1.42-8.11A1 1 0 0060.42 1L1.83 11.12a1.08 1.08 0 00-.65.41 1.05 1.05 0 00-.17.75l.2 1.13A1 1 0 001 14v48a1 1 0 001 1h60a1 1 0 001-1V22a1 1 0 00-1-1zM3 15h6v10H3zm1.59 12L3 28.59V27zM3 35h58v2H3zm0-2v-2h58v2zm42.41-4l6-6h7.18l-6 6zm-2.82 0h-7.18l6-6h7.18zm-10 0h-7.18l6-6h7.18zm-10 0h-7.18l6-6h7.18zm32.82 0L61 23.41V29zm-36.82-6l-6 6H5.41l2-2H10a1 1 0 001-1v-3zm-8.26-9.93l1.08-1.57 7.05-1.22-5 7.19-2.46.43V14a1 1 0 00-.67-.93zm32.53-.67l-7 1.21 5-7.19 6.87-1.18zm7.58-7.63l7-1.22-4.85 7.17-7 1.21zm-17.33 9.31l-7 1.22 5-7.18 7-1.22zm-9.81 1.7l-7 1.21 5-7.18 7.05-1.22zm32.06-5.53l4.5-6.65 1 5.7zM8.65 12l-.71 1H3.17v-.07zM3 61V39h58v22z" />
                                                    <path d="M5 17.1h2v2H5zM5 21h2v2H5zM15 49.61l1.14 1.9a1 1 0 001.72 0l1.14-1.9V55h2v-9a1 1 0 00-1.86-.51L17 49.06l-2.14-3.57A1 1 0 0013 46v9h2zM26.5 55a3.5 3.5 0 003.5-3.5v-3a3.5 3.5 0 00-7 0v3a3.5 3.5 0 003.5 3.5zM25 48.5a1.5 1.5 0 013 0v3a1.5 1.5 0 01-3 0zM45 55h5v-2h-4v-2h4v-2h-4v-2h4v-2h-5a1 1 0 00-1 1v8a1 1 0 001 1zM34.17 54.55a1 1 0 001.66 0l2-3A1 1 0 0038 51v-6h-2v5.7l-1 1.5-1-1.5V45h-2v6a1 1 0 00.17.55zM40 45h2v10h-2z" />
                                                    <path d="M54 41H10a1 1 0 00-1 1v16a1 1 0 001 1h44a1 1 0 001-1V42a1 1 0 00-1-1zm-1 16H11V43h42z" />
                                                </g>
                                            </svg>
                                        ) : (
                                            <svg
                                                height="512"
                                                viewBox="0 0 128 128"
                                                width="512"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M122.25 17.266H5.75A5.756 5.756 0 000 23.016V91.01a5.757 5.757 0 005.75 5.75h9.883l-3.068 4.44a6.079 6.079 0 0010 6.912l7.847-11.352h67.176l7.844 11.351a6.079 6.079 0 0010-6.912l-3.068-4.439h9.883A5.757 5.757 0 00128 91.01V23.016a5.756 5.756 0 00-5.75-5.75zM19.689 106.122a2.582 2.582 0 01-2.122 1.112 2.58 2.58 0 01-2.123-4.046l4.443-6.428h6.271zm92.867-2.934a2.58 2.58 0 01-2.123 4.046 2.585 2.585 0 01-2.123-1.112l-6.468-9.362h6.271zM124.5 91.01a2.253 2.253 0 01-2.25 2.25H5.75a2.253 2.253 0 01-2.25-2.25V23.016a2.253 2.253 0 012.25-2.25h116.5a2.253 2.253 0 012.25 2.25z" />
                                                <path d="M118.25 25.266H9.75A1.749 1.749 0 008 27.016V87.01a1.75 1.75 0 001.75 1.75h108.5a1.75 1.75 0 001.75-1.75V27.016a1.749 1.749 0 00-1.75-1.75zM116.5 85.26h-105V28.766h105z" />
                                                <path d="M41.375 47.922h7.3v19.932a1.75 1.75 0 003.5 0V47.922h7.3a1.75 1.75 0 000-3.5h-18.1a1.75 1.75 0 000 3.5zM75.963 68.527a1.749 1.749 0 003.23 0l9.047-21.681a1.75 1.75 0 10-3.23-1.346l-7.432 17.809L70.146 45.5a1.75 1.75 0 10-3.23 1.348z" />
                                            </svg>
                                        )}
                                        {movie.title || movie.name}
                                    </li>
                                );
                            })}
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
        movies: state.moviesPage.searchedMovies
    };
}
function mapDispatchToProps(dispatch) {
    return {
        updateText: (text) => dispatch(updateText(text)),
        getSearchResults: (text) => dispatch(getSearchResults(text)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);