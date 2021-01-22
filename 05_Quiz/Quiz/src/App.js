import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Logout from './components/logOut/logout';
import Auth from './containers/auth/auth';
import Quiz from './containers/quiz/quiz';
import QuizCreator from './containers/quizCreator/quizCreator';
import QuizList from './containers/quizList/quizList';
import Layout from './hoc/layout';
import { autoLogin } from './store/actions/auth';

class App extends Component {
    componentDidMount() {
        this.props.autoLogin()
    }
    render() {

        let routes = (
            <Switch>
                <Route path="/auth" component={Auth}/>
                <Route path="/quiz/:id" component={Quiz}/>
                <Route path="/" exact component={QuizList}/>
                <Redirect to='/'/>
            </Switch>
        )

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/quiz-creator" component={QuizCreator}/>
                    <Route path="/quiz/:id" component={Quiz}/>
                    <Route path="/logout" component={Logout}/>
                    <Route path="/" exact component={QuizList}/>
                    <Redirect to='/'/>
                </Switch>
            )
        }

        return (
            <Layout>
                {routes}
            </Layout>
        );
    }
}
function mapStateToProps(state) {
    return {
        isAuthenticated: !!state.auth.token
    }
}
function mapDispatchToProps(dispatch) {
    return {
        autoLogin: () => dispatch(autoLogin())
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
