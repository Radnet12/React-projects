import React from 'react';
import { Container } from '../UI/Container/Container';
import { SearchDetails } from './SearchDetails/SearchDetails';
import s from './SearchPage.module.scss';
import { SearchSidebar } from './SearchSidebar/SearchSidebar';
import { SearchTop } from './SearchTop/SearchTop';

export const SearchPage = () => {
    return (
        <section className={s.search}>
            <Container>
                <SearchTop/>
                <div className={s.search__wrapper}>
                    <SearchSidebar/>
                    <SearchDetails/>
                </div>
            </Container>
        </section>
    );
};