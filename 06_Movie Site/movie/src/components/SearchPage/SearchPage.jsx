import React, { useEffect, useState } from "react";
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
        movies: {total_results: movieQuantity},
        tvs: {total_results: tvQuantity},
        keywords: {total_results: keywordQuantity},
        persons: {total_results: personQuantity},
    },
    results,
    isFetchingResults,
    loadSearchResults,
    currentPage,
    match: {
        params: {format, pageId}
    }
}) => {
    const [items, setItems] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    useEffect(() => {
        if (isFetchingResults === false) {
            Object.entries(results).forEach((item) => {
                if (item[0].indexOf(format) > -1) {
                    setItems(item[1].results);
                    setTotalPages(item[1].total_pages);

                }
            });
        }
    }, [format, isFetchingResults]);
    useEffect(() => {
        if (searchText.length !== 0) {
            loadSearchResults(searchText, pageId);
        }
    }, [pageId]);
    const returnRelevantAnswer = () => {
        if (searchText.length !== 0) {
            if (isFetchingResults === false) {
                return (
                    <>
                        <SearchSidebar
                            quantity={{
                                movie: movieQuantity,
                                tv: tvQuantity,
                                keyword: keywordQuantity,
                                person: personQuantity,
                            }}
                        />
                        <SearchDetails
                            items={items}
                            format={format}
                            totalPages={totalPages}
                            currentPage={currentPage}
                        />
                    </>
                );
            } else {
                return <Loader />;
            }
        } else {
            return (
                <p>Введите что-нибудь в поисковую строку ещё раз</p>
            );
        }
    };

    return (
        <section className={s.search}>
            <Container>
                <SearchTop />
                <div className={s.search__wrapper}>
                    {returnRelevantAnswer()}
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
        currentPage: state.mainSearch.currentPage
    };
};
export default connect(mapStateToProps, { loadSearchResults })(SearchPage);
