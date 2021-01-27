import React from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import { Tvs } from "./components/Tvs/Tvs";
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
                            <Route path="/movies" component={Movies} />
                            <Route path="/tvs" component={Tvs} />
                        </Switch>
                    </MainTemplate>
                </Container>
            </Main>
        </>
    );
}

export default App;
