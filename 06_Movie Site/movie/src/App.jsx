import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Main from "./components/MainPage/Main";
import Movie from "./components/MoviePage/Movie";
import Tv from "./components/TvPage/Tv";
import { Loader } from "./components/UI/Loader/Loader";
import { MainWrap } from "./components/UI/Main/Main";
import { autoLogin, requestSessionId } from "./store/reducers/authReducer";

const SearchPage = lazy(() => import("./components/SearchPage/SearchPage"));
const CatalogPage = lazy(() => import("./components/CatalogPage/CatalogPage"));

const App = ({ requestSessionId, autoLogin }) => {
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
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route
                        path="/movie/:id?/:page?/:pageId?"
                        component={Movie}
                    />
                    <Route path="/tv/:id?/:page?/:pageId?" component={Tv} />
                    <Route
                        path="/catalog/:format/:id"
                        component={CatalogPage}
                    />
                    <Route
                        path="/search/:format/:page?/:pageId?"
                        component={SearchPage}
                    />
                </Switch>
            </Suspense>
        </MainWrap>
    );
};

export default connect(null, { requestSessionId, autoLogin })(App);
