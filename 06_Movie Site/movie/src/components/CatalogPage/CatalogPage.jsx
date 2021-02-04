import React, { useEffect } from "react";
import { Container } from "../UI/Container/Container";
import { CatalogDetails } from "./CatalogDetails/CatalogDetails";
import { CatalogMain } from "./CatalogMain/CatalogMain";
import s from "./CatalogPage.module.scss";
import { CatalogSidebar } from "./CatalogSidebar/CatalogSidebar";
import { loadMovieInfo } from "../../store/actions/catalog";
import { Loader } from "../UI/Loader/Loader";
import { connect } from "react-redux";

const CatalogPage = ({
    match: {
        params: { format, id },
    },
    movie,
    loadMovieInfo,
    credits,
    reviews,
    keywords,
    isFetchingMovie,
}) => {
    useEffect(() => {
        loadMovieInfo(format, id);
    }, [format, id]);
    return (
        <>
            {isFetchingMovie === false ? (
                <>
                    <CatalogMain movie={movie} format={format} />
                    <div className={s.bottom}>
                        <Container>
                            <div className={s.bottom__wrapper}>
                                <CatalogDetails
                                    cast={credits.cast}
                                    crew={credits.crew}
                                    reviews={reviews}
                                />
                                <CatalogSidebar movie={movie} keywords={keywords} />
                            </div>
                        </Container>
                    </div>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        movie: state.catalogPage.movie,
        credits: state.catalogPage.credits,
        reviews: state.catalogPage.reviews,
        keywords: state.catalogPage.keywords,
        isFetchingMovie: state.catalogPage.isFetchingMovie,
    };
};
export default connect(mapStateToProps, { loadMovieInfo })(CatalogPage);
