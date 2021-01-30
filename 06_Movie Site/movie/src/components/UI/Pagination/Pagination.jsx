import React, {useState} from 'react';
import s from "./Pagination.module.scss";
import {Link} from 'react-router-dom';

export const Pagination = ({totalPages, pageSize, currentPage, changePage, portionSize = 10, genreFormat, url }) => {
    const pages = [];
    // const pagesCount = Math.ceil(totalPages / pageSize);

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(totalPages / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return (
        <ul className={s.pagination}>
            {portionNumber > 1 && (
                <li
                    className={s.pagination__item}
                    onClick={() => {
                        setPortionNumber(portionNumber - 1);
                    }}
                >
                    Prev
                </li>
            )}

            {pages
                .filter(
                    (page) =>
                        page >= leftPortionPageNumber &&
                        page <= rightPortionPageNumber
                )
                .map((page) => {
                    return (
                        <li
                            key={page}
                            className={
                                +page === +currentPage
                                    ? `${s.pagination__item} ${s.pagination__item_active}`
                                    : `${s.pagination__item}`
                            }
                        >
                            <Link
                                className={s.pagination__link}
                                to={`/${genreFormat}${url === '' ? '' : `/${url}`}/page/${page}`}
                                onClick={(e) => changePage(genreFormat, url, e.target.innerHTML)}
                            >
                                {page}
                            </Link>
                        </li>
                    );
                })}

            {portionCount > portionNumber && (
                <li
                    className={s.pagination__item}
                    onClick={() => {
                        setPortionNumber(portionNumber + 1);
                    }}
                >
                    Next
                </li>
            )}
        </ul>
    );
};