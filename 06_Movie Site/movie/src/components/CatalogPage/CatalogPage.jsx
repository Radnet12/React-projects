import React, { useEffect } from "react";
import { Container } from "../UI/Container/Container";
import { CatalogDetails } from "./CatalogDetails/CatalogDetails";
import { CatalogMain } from "./CatalogMain/CatalogMain";
import s from "./CatalogPage.module.scss";
import { CatalogSidebar } from "./CatalogSidebar/CatalogSidebar";
import {loadMovie} from '../../store/actions/catalog';
import {connect} from 'react-redux';

const CatalogPage = (props) => {
    useEffect(() => {
        props.loadMovie(props.match.params.format, props.match.params.id);
    }, []);
    return (
        <>
            <CatalogMain movie={props.movie} format={props.match.params.format}/>
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
        movie: state.catalogPage.movie
    }
};
export default connect(mapStateToProps, {loadMovie})(CatalogPage);
