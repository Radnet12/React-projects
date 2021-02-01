import React, { useEffect, useState } from "react";
import { Container } from "../UI/Container/Container";
import { CatalogDetails } from "./CatalogDetails/CatalogDetails";
import { CatalogMain } from "./CatalogMain/CatalogMain";
import s from "./CatalogPage.module.scss";
import { CatalogSidebar } from "./CatalogSidebar/CatalogSidebar";

export const CatalogPage = () => {
    const [film, setFilm] = useState([]);
    const [credits, setCredits] = useState([]);
    console.log(film);
    useEffect(() => {
        const loadMovie = () => {
            fetch(
                // "https://api.themoviedb.org/3/configuration?api_key=5daf90e431960f20b1aca24657c54316"
                "https://api.themoviedb.org/3/movie/775996?api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU"
            )
                .then((response) => response.json())
                .then((data) => setFilm(data));
        };
        const loadCredits = () => {
            fetch(
                "https://api.themoviedb.org/3/movie/775996/credits?api_key=5daf90e431960f20b1aca24657c54316&language=ru-RU"
            )
                .then((response) => response.json())
                .then((data) => setCredits(data));
        };
        loadMovie();
        loadCredits();
    }, []);
    return (
        <>
            <CatalogMain film={film}/>
            <div className={s.bottom}>
                <Container>
                    <div className={s.bottom__wrapper}>
                        <CatalogDetails cast={credits.cast} crew={credits.crew}/>
                        <CatalogSidebar/>
                    </div>
                </Container>
            </div>
        </>
    );
};
