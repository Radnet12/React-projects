import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadSearchResults } from "../../store/actions/mainSearch";
import { Container } from "../UI/Container/Container";
import { Loader } from "../UI/Loader/Loader";
import { SearchDetails } from "./SearchDetails/SearchDetails";
import s from "./SearchPage.module.scss";
import { SearchSidebar } from "./SearchSidebar/SearchSidebar";
import { SearchTop } from "./SearchTop/SearchTop";

const SearchPage = ({
    searchText,
    results: {
        movies: {total_results: movieQuantity, results: movies, total_pages: moviePages},
        tvs: {total_results: tvQuantity, results: tvss, total_pages: tvPages},
        keywords: {total_results: keywordQuantity, results: keywords, total_pages: keywordPages},
        persons: {total_results: personQuantity, results: persons, total_pages: personPages},
    },
    isFetchingResults,
    loadSearchResults
}) => {
    console.log("render", movies, tvss);
    useEffect(() => {
        loadSearchResults(searchText);
    }, []);
    return (
        <section className={s.search}>
            <Container>
                <SearchTop />
                <div className={s.search__wrapper}>
                    {isFetchingResults === false ? (
                        <>
                            <SearchSidebar
                                quantity={{
                                    movie: movieQuantity,
                                    tv: tvQuantity,
                                    keyword: keywordQuantity,
                                    person: personQuantity,
                                }}
                            />
                            <SearchDetails />
                        </>
                    ) : (
                        <Loader />
                    )}
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
    };
};
export default connect(mapStateToProps, { loadSearchResults })(SearchPage);
