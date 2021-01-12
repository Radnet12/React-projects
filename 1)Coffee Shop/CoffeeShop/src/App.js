import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from './pages/MainPage';
import CoffeePage from './pages/CoffeePage';
import PleasurePage from './pages/PleasurePage';
import ItemPage from './pages/ItemPage';

function App({state}) {
    return (
        <div className="wrapper">
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/catalog">
                    <CoffeePage state={state}/>
                </Route>
                <Route path="/pleasure">
                    <PleasurePage state={state}/>
                </Route>
                <Route path="/catalog/:id" render={(props) => <ItemPage {...props} state={state}/>}/>
            </Switch>
        </div>
    );
}
export default App;