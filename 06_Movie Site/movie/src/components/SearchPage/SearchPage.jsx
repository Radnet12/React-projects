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
    results,
    isFetchingResults,
    loadSearchResults,
    currentPage,
    totalPages,
    match: {
        params: {format, pageId}
    }
}) => {

    useEffect(() => {
        if (searchText.length !== 0) {
            loadSearchResults(searchText, format, pageId);
        }
    }, [format, pageId]);


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
                <SearchTop searchText={searchText} itemsCount={format === "movie" ? `${totalPages * 20} фильмов` : `${totalPages * 20} сериалов`}/>
                <div className={s.search__wrapper}>
                    <>
                        <SearchSidebar />
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
    };
};
export default connect(mapStateToProps, { loadSearchResults })(SearchPage);
