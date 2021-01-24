import React, { useEffect, useState } from "react";
import { api } from "./api/api";
import { Cards } from "./components/UI/Cards/Cards";
import { Container } from "./components/UI/Container/Container";
import { Header } from "./components/UI/Header/Header";
import { Main } from "./components/UI/Main/Main";
import { MainTemplate } from "./components/UI/MainTemplate/MainTemplate";
import { Sidebar } from "./components/UI/Sidebar/Sidebar";

function App() {
    const [movies, setMovies] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const getMovies = async () => {
        try {
            const list = await api.getLists("tv");
            setMovies(list);
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetching(false);
        }
    };
    useEffect(() => {
        getMovies()
    }, []);
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <MainTemplate>
                        <Sidebar />
                        {isFetching === false ? <Cards movies={movies} /> : null}
                    </MainTemplate>
                </Container>
            </Main>
        </>
    );
}

export default App;
