import React, { useEffect, useState } from "react";
import { Container } from "../UI/Container/Container";
import { CatalogDetails } from "./CatalogDetails/CatalogDetails";
import { CatalogMain } from "./CatalogMain/CatalogMain";
import s from "./CatalogPage.module.scss";
import { CatalogSidebar } from "./CatalogSidebar/CatalogSidebar";

export const CatalogPage = () => {
    const [film, setFilm] = useState([]);
    console.log(film);
    useEffect(() => {
        fetch(
            // "https://api.themoviedb.org/3/configuration?api_key=5daf90e431960f20b1aca24657c54316"
            "https://api.themoviedb.org/3/movie/775996?api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU"
            // "https://api.themoviedb.org/3/movie/775996/credits?api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU"
        )
            .then((response) => response.json())
            .then((data) => setFilm(data));
    }, []);
    return (
        <>
            <CatalogMain film={film}/>
            <div className={s.bottom}>
                <Container>
                    <div className={s.bottom__wrapper}>
                        <CatalogDetails/>
                        <CatalogSidebar/>
                    </div>
                </Container>
            </div>
        </>
    );
};
