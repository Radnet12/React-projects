import React from "react";
import { Route, Switch } from "react-router-dom";
import Movie from "./components/MoviePage/Movie";
import Tv from "./components/TvPage/Tv";
import { MainWrap } from "./components/UI/Main/Main";
import Main from "./components/MainPage/Main";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
    return (
            <MainWrap>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/movie/:id?/:page?/:pageId?" component={Movie} />
                    <Route path="/tv/:id?/:page?/:pageId?" component={Tv} />
                    <Route path="/catalog/:format/:id" component={CatalogPage} />
                    <Route path="/search/:format" component={SearchPage} />
                </Switch>
            </MainWrap>
    );
}

export default App;
