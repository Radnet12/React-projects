import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useMediaQuery } from "../../api/useMediaQuery";
import { loadMovieInfo } from "../../store/reducers/catalogReducer";
import { Container } from "../UI/Container/Container";
import { Loader } from "../UI/Loader/Loader";
import { CatalogDetails } from "./CatalogDetails/CatalogDetails";
import { CatalogMain } from "./CatalogMain/CatalogMain";
import s from "./CatalogPage.module.scss";
import { CatalogRecomend } from "./CatalogRecomend/CatalogRecomend";
import { CatalogSidebar } from "./CatalogSidebar/CatalogSidebar";

const CatalogPage = ({
    match: {
        params: { format, id },
    },
    movie,
    loadMovieInfo,
    credits,
    reviews,
    keywords,
    recommend,
    isFetchingMovie,
}) => {
    const isSidebarShown = useMediaQuery("(min-width: 769px)", true);
    useEffect(() => {
        loadMovieInfo(format, id);
        window.scrollTo(0, 0);
    }, [format, id, loadMovieInfo]);

    return (
        <>
            {isFetchingMovie === false ? (
                <>
                    <CatalogMain movie={movie} format={format} />
                    <div className={s.bottom}>
                        <Container>
                            <div className={s.bottom__wrapper}>
                                <div className={s.bottom__main}>
                                    <CatalogDetails
                                        cast={credits.cast}
                                        crew={credits.crew}
                                        reviews={reviews}
                                        seasons={movie.seasons}
                                    />
                                    {recommend.length > 0 && (
                                        <CatalogRecomend
                                            movies={recommend}
                                            format={format}
                                        />
                                    )}
                                </div>
                                {isSidebarShown && (
                                    <CatalogSidebar
                                        movie={movie}
                                        keywords={keywords}
                                    />
                                )}
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
        recommend: state.catalogPage.recommend,
        isFetchingMovie: state.catalogPage.isFetchingMovie,
    };
};
export default connect(mapStateToProps, { loadMovieInfo })(CatalogPage);
