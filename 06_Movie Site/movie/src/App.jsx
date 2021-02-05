import React from "react";
import { Route, Switch } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Tv from "./components/Tv/Tv";
import Header from "./components/UI/Header/Header";
import { MainWrap } from "./components/UI/Main/Main";
import { Main } from "./components/Main/Main";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import { SearchPage } from "./components/SearchPage/SearchPage";

function App() {
    return (
        <>
            <Header />
            <MainWrap>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/movie/:id?/:page?/:pageId?" component={Movie} />
                    <Route path="/tv/:id?/:page?/:pageId?" component={Tv} />
                    <Route path="/catalog/:format/:id" component={CatalogPage} />
                    <Route path="/search" component={SearchPage} />
                </Switch>
            </MainWrap>
        </>
    );
}

export default App;
