import React, { useEffect } from "react";
import { Container } from "../UI/Container/Container";
import { CatalogDetails } from "./CatalogDetails/CatalogDetails";
import { CatalogMain } from "./CatalogMain/CatalogMain";
import s from "./CatalogPage.module.scss";
import { CatalogSidebar } from "./CatalogSidebar/CatalogSidebar";
import { loadMovieInfo } from "../../store/actions/catalog";
import { Loader } from "../UI/Loader/Loader";
import { connect } from "react-redux";
import { CatalogRecomend } from "./CatalogRecomend/CatalogRecomend";

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
    console.log(recommend);
    useEffect(() => {
        loadMovieInfo(format, id);
        window.scrollTo(0, 0);
    }, [format, id]);
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
                                <CatalogSidebar
                                    movie={movie}
                                    keywords={keywords}
                                />
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
