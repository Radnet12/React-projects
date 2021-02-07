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
        movies: {total_results: movieQuantity, total_pages: moviePages},
        tvs: {total_results: tvQuantity, total_pages: tvPages},
        keywords: {total_results: keywordQuantity, total_pages: keywordPages},
        persons: {total_results: personQuantity, total_pages: personPages},
    },
    results,
    isFetchingResults,
    loadSearchResults,
    match: {
        params: {format}
    }
}) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (isFetchingResults === false) {
            Object.entries(results).forEach((item) => {
                if (item[0].indexOf(format) > -1) {
                    setItems(item[1].results);
                }
            });
        }
    }, [format, isFetchingResults]);
    useEffect(() => {
        if (searchText.length !== 0) {
            loadSearchResults(searchText);
        }
    }, []);
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
                        <SearchDetails items={items} />
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
    };
};
export default connect(mapStateToProps, { loadSearchResults })(SearchPage);
