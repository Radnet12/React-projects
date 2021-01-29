import React, {useState} from 'react';
import styles from "./Pagination.module.scss";

export const Pagination = ({totalPages, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

    const pages = [];
    // const pagesCount = Math.ceil(totalPages / pageSize);
    const pagesCount = totalPages;

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;


    return <div className={styles.paginator}>
        { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map((page) => {
            return <span
                        key={page}
                        onClick={(e) => {
                            console.log(e);
                            // onPageChanged(page);
                        }}>{page}</span>
        })}

        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>
};