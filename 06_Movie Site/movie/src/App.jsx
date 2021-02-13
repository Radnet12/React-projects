import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CatalogPage from "./components/CatalogPage/CatalogPage";
import Main from "./components/MainPage/Main";
import Movie from "./components/MoviePage/Movie";
import SearchPage from "./components/SearchPage/SearchPage";
import Tv from "./components/TvPage/Tv";
import { MainWrap } from "./components/UI/Main/Main";
import { autoLogin, requestSessionId } from './store/reducers/authReducer';

function App({ requestSessionId, autoLogin }) {
    useEffect(() => {
        const token = localStorage.getItem("token");
        const session = localStorage.getItem("sessionId");
        if (!!token) {
            requestSessionId(token);
            localStorage.removeItem("token");
        } else if (!!session) {
            autoLogin(session);
        }
    }, [autoLogin, requestSessionId]);
    return (
        <MainWrap>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/movie/:id?/:page?/:pageId?" component={Movie} />
                <Route path="/tv/:id?/:page?/:pageId?" component={Tv} />
                <Route path="/catalog/:format/:id" component={CatalogPage} />
                <Route
                    path="/search/:format/:page?/:pageId?"
                    component={SearchPage}
                />
            </Switch>
        </MainWrap>
    );
}

export default connect(null, { requestSessionId, autoLogin })(App);