import React from "react";
import { Route, Switch } from "react-router-dom";
import Movie from "./components/Movies/Movie";
import Tv from "./components/Tvs/Tv";
import { Container } from "./components/UI/Container/Container";
import { Header } from "./components/UI/Header/Header";
import { Main } from "./components/UI/Main/Main";
import { MainTemplate } from "./components/UI/MainTemplate/MainTemplate";

function App() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <MainTemplate>
                        <Switch>
                            <Route path="/movie" component={Movie} />
                            <Route path="/tv" component={Tv} />
                        </Switch>
                    </MainTemplate>
                </Container>
            </Main>
        </>
    );
}

export default App;
