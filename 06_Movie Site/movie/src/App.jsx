import React from "react";
import { Cards } from "./components/UI/Cards/Cards";
import { Container } from "./components/UI/Container/Container";
import { Header } from "./components/UI/Header/Header";
import { Main } from "./components/UI/Main/Main";
import { MainTemplate } from "./components/UI/MainTemplate/MainTemplate";
import { Sidebar } from "./components/UI/Sidebar/Sidebar";

function App(props) {
    const movies = async () => {
        const response = await fetch(
            "https://api.themoviedb.org/3/movie/550?api_key=5daf90e431960f20b1aca24657c54316&language=en-US"
        );
        const data = await response.json();

        console.log(data);
    };

    movies();

    return (
        <>
            <Header />
            <Main>
                <Container>
                    <MainTemplate>
                        <Sidebar />
                        <Cards/>
                    </MainTemplate>
                </Container>
            </Main>
        </>
    );
}

export default App;
