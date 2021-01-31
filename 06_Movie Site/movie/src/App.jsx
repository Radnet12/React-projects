import React from "react";
import { Route, Switch } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Tv from "./components/Tv/Tv";
import Header from "./components/UI/Header/Header";
import { MainWrap } from "./components/UI/Main/Main";
import { Main } from "./components/Main/Main";
import { MainTemplate } from "./components/UI/MainTemplate/MainTemplate";

function App() {
    return (
        <>
            <Header />
            <MainWrap>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <MainTemplate>
                            <Route path="/movie" component={Movie} />
                            <Route path="/tv" component={Tv} />
                    </MainTemplate>
                </Switch>
            </MainWrap>
        </>
    );
}

export default App;
