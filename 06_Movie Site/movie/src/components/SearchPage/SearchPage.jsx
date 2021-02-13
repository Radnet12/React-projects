import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDebounce } from "../../api/useDebounce";
import {
    loadSearchResults,
    updateSearchText,
    zeroOutSearchResults,
} from "../../store/reducers/mainSearchReducer";
import { Container } from "../UI/Container/Container";
import { Loader } from "../UI/Loader/Loader";
import { SearchDetails } from "./SearchDetails/SearchDetails";
import s from "./SearchPage.module.scss";
import { MemoizedSearchSidebar } from "./SearchSidebar/SearchSidebar";
import { SearchTop } from "./SearchTop/SearchTop";

const SearchPage = ({
    searchText,
    results,
    isFetchingResults,
    loadSearchResults,
    currentPage,
    totalPages,
    totalResults,
    updateSearchText,
    zeroOutSearchResults,
    match: {
        params: {format, pageId}
    }
}) => {
    const debouncedText = useDebounce(searchText, 400);
    useEffect(() => {
        if (debouncedText.length !== 0) {
            loadSearchResults(debouncedText, format, pageId);
        } else {
            zeroOutSearchResults();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedText, loadSearchResults, zeroOutSearchResults]);


    const returnRelevantAnswer = () => {
        if (searchText.length !== 0) {
            if (isFetchingResults === false) {
                return (
                    <SearchDetails
                        items={results}
                        format={format}
                        totalPages={totalPages}
                        currentPage={currentPage}
                    />
                );
            } else {
                return <Loader />;
            }
        } else {
            return (
                <p style={{marginLeft: "15px", fontSize: "24px"}}>Введите что-нибудь в поисковую строку ещё раз</p>
            );
        }
    };


    return (
        <section className={s.search}>
            <Container>
                <SearchTop
                    searchText={searchText}
                    itemsCount={
                        format === "movie"
                            ? `${totalResults} фильмов`
                            : `${totalResults} сериалов`
                    }
                    updateSearchText={updateSearchText}
                />
                <div className={s.search__wrapper}>
                    <>
                        <MemoizedSearchSidebar />
                        {returnRelevantAnswer()}
                    </>
                </div>
            </Container>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        searchText: state.mainSearch.searchText,
        results: state.mainSearch.results,
        isFetchingResults: state.mainSearch.isFetchingResults,
        currentPage: state.mainSearch.currentPage,
        totalPages: state.mainSearch.totalPages,
        totalResults: state.mainSearch.totalResults,
    };
};
export default connect(mapStateToProps, {
    loadSearchResults,
    updateSearchText,
    zeroOutSearchResults,
})(SearchPage);
