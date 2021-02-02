import React, { useEffect } from "react";
import { Container } from "../UI/Container/Container";
import { CatalogDetails } from "./CatalogDetails/CatalogDetails";
import { CatalogMain } from "./CatalogMain/CatalogMain";
import s from "./CatalogPage.module.scss";
import { CatalogSidebar } from "./CatalogSidebar/CatalogSidebar";
import {loadMovie} from '../../store/actions/catalog';
import {Loader} from '../UI/Loader/Loader';
import {connect} from 'react-redux';

const CatalogPage = ({match: {params: {format, id}}, movie, loadMovie, isFetchingMovie}) => {
    console.log("render", isFetchingMovie);
    useEffect(() => {
        loadMovie(format, id);
    }, [format, id]);
    return (
        <>
            {isFetchingMovie === false ? <CatalogMain movie={movie} format={format} /> : <Loader/>}
            <div className={s.bottom}>
                <Container>
                    <div className={s.bottom__wrapper}>
                        {/* <CatalogDetails cast='{credits.cast}' crew='{credits.crew}' feedbacks='{feedbacks}'/>
                        <CatalogSidebar/> */}
                    </div>
                </Container>
            </div>
        </>
    );
};
const mapStateToProps = (state) => {
    return {
        movie: state.catalogPage.movie,
        isFetchingMovie: state.catalogPage.isFetchingMovie
    }
};
export default connect(mapStateToProps, {loadMovie})(CatalogPage);
