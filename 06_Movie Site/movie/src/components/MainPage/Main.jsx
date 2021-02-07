import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loadSearchResults, updateSearchText, zeroOutSearchResults } from '../../store/actions/mainSearch';
import { Container } from '../UI/Container/Container';
import s from './Main.module.scss';
import { useDebounce} from '../../api/useDebounce';

const Main = ({
    searchText,
    updateSearchText,
    loadSearchResults,
    zeroOutSearchResults,
    results,
}) => {
    console.log(results);
    const history = useHistory();
    const debouncedText = useDebounce(searchText, 1000);

    useEffect(() => {
        if (searchText.length > 0) {
            loadSearchResults(searchText, "multi");
        } else {
            zeroOutSearchResults();
        }
    }, [debouncedText]);

    return (
        <section className={s.main}>
            <Container>
                <div className={s.main__offer}>
                    <h1 className={s.main__title}>
                        Смотрите любимое кино здесь
                    </h1>
                    <div className={s.main__search}>
                        <input
                            type="text"
                            placeholder="Найти фильм или сериал..."
                            value={searchText}
                            onChange={(e) => updateSearchText(e.target.value)}
                        />
                        <button
                            className={s.search__btn}
                            onClick={() => history.push("/search")}
                            aria-label="Начать поиск по введённым символам"
                            disabled={searchText.length !== 0 ? false : true}
                        >
                            Поиск
                            {searchText.length === 0 && (
                                <span className={s.search__btn_tooltip}>
                                    Введите что-то в поиск
                                </span>
                            )}
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};
const mapStateToProps = (state) => {
    return {
        searchText: state.mainSearch.searchText,
        results: state.mainSearch.results,
    };
};
export default connect(mapStateToProps, {
    updateSearchText,
    loadSearchResults,
    zeroOutSearchResults,
})(Main);