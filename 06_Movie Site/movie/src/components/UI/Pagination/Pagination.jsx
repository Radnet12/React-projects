import React, {useState} from 'react';
import s from "./Pagination.module.scss";
import {Link} from 'react-router-dom';

export const Pagination = ({totalPages, currentPage, changePage, rangeOfItems = 10, genreFormat, url }) => {
    const pages = [];
    // const pagesCount = Math.ceil(totalPages / pageSize);
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    };

    const defineRange = (rangesCount, rangeOfItems, currentPage) => {
        for (let i = 0; i <= rangesCount; i++) {
            if (((i - 1) * rangeOfItems + 1) <= currentPage && currentPage <= (i * rangeOfItems)) {
                return i;
            }
        }
    };

    const rangesCount = Math.ceil(totalPages / rangeOfItems);
    const [rangeIndex, setRangeIndex] = useState(defineRange(rangesCount, rangeOfItems, currentPage));
    const startRangeIndex = (rangeIndex - 1) * rangeOfItems + 1;
    const endRangeIndex = rangeIndex * rangeOfItems;

    return (
        <ul className={s.pagination}>
            {rangeIndex > 1 && (
                <li
                    className={s.pagination__item}
                    onClick={() => {
                        setRangeIndex(rangeIndex - 1);
                    }}
                >
                    Prev
                </li>
            )}

            {pages
                .filter(
                    (page) => page >= startRangeIndex && page <= endRangeIndex
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
                                to={`/${genreFormat}${
                                    url === "" ? "" : `/${url}`
                                }/page/${page}`}
                                onClick={(e) => {
                                    changePage(
                                        genreFormat,
                                        url,
                                        e.target.innerHTML
                                    )
                                }}
                            >
                                {page}
                            </Link>
                        </li>
                    );
                })}

            {rangesCount > rangeIndex && (
                <li
                    className={s.pagination__item}
                    onClick={() => {
                        setRangeIndex(rangeIndex + 1);
                    }}
                >
                    Next
                </li>
            )}
        </ul>
    );
};