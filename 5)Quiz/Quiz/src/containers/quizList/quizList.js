import React, { Component } from 'react';
import './quizList.css';
import {NavLink} from 'react-router-dom';
import Loader from '../../components/UI/loader/loader';
import { connect } from 'react-redux';
import {fetchQuizes} from '../../store/actions/quiz';

class QuizList extends Component {



    renderQuizes() {
        return this.props.quizes.map(quiz => {
            return (
                <li key={quiz.id}>
                    <NavLink to={'/quiz/' + quiz.id} >
                        {quiz.name}
                    </NavLink>
                </li>
            )
        });
    }

    componentDidMount() {
        this.props.fetchQuizes()
    }

    render() {
        return (
            <div className='quiz__list'>
                <div>
                    <h1>Список тестов</h1>
                    {this.props.loading && this.props.quizes.length !== 0
                    ? <Loader/>
                    :
                        <ul>
                            {this.renderQuizes()}
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return {
        quizes: state.quiz.quizes,
        loading: state.quiz.loading
    }
}

function mapDispatchtoProps(dispatch) {
    return {
        fetchQuizes: () => dispatch(fetchQuizes())
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(QuizList)