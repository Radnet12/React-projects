import React, { useEffect, useState } from "react";
import s from "./Pagination.module.scss";
import { Link } from "react-router-dom";

export const Pagination = ({totalPages,currentPage,changePage, rangeOfItems = 10,genreFormat,url }) => {
    const [itemsRange, setItemsRange] = useState(rangeOfItems);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        const handleTabletChange = () => {
            if (mediaQuery.matches) {
                setItemsRange(4);
            } else {
                setItemsRange(10);
            }
        };
        mediaQuery.addListener(handleTabletChange);
        handleTabletChange(mediaQuery);
        setRangeIndex(defineRange(rangesCount, itemsRange, currentPage));
        return () => {
            mediaQuery.removeListener(handleTabletChange);
        };
    }, [itemsRange]);

    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const defineRange = (rangesCount, rangeOfItems, currentPage) => {
        for (let i = 1; i <= rangesCount; i++) {
            if ( (i - 1) * rangeOfItems + 1 <= currentPage && currentPage <= i * rangeOfItems) {
                return i;
            }
        }
    };

    const rangesCount = Math.ceil(totalPages / itemsRange);
    const [rangeIndex, setRangeIndex] = useState(defineRange(rangesCount, itemsRange, currentPage));
    const startRangeIndex = (rangeIndex - 1) * itemsRange + 1;
    const endRangeIndex = rangeIndex * itemsRange;

    return (
        <div className={s.pagination}>
            <button
                className={
                    rangeIndex > 1
                        ? `${s.pagination__prev}`
                        : `${s.pagination__prev} ${s.pagination__disabled}`
                }
                onClick={() => {
                    setRangeIndex(rangeIndex - 1);
                }}
            ></button>

            {
                <ul className={s.pagination__list}>
                    {pages
                        .filter(
                            (page) =>
                                page >= startRangeIndex && page <= endRangeIndex
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
                                            );
                                        }}
                                    >
                                        {page}
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            }
            <button
                className={
                    rangesCount > rangeIndex
                        ? `${s.pagination__next}`
                        : `${s.pagination__next} ${s.pagination__disabled}`
                }
                onClick={() => {
                    setRangeIndex(rangeIndex + 1);
                }}
            ></button>
        </div>
    );
};
