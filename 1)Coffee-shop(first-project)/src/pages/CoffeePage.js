import React, { useState } from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Button from '../components/Button/Button';
import Footer from '../components/Footer/Footer';
import Items from '../components/Items/Items';

import aboutImage from '../img/about/about-1.jpg';


function CoffeePage({state}) {
    const [searchArr, setSearchArr] = useState(state.cards);

    function search(value, country, items) {
        if (value !== '' && country === '') {
            return items.filter((item) => {
                return item.text.toLowerCase().indexOf(value.toLowerCase()) > -1
            })
        } else if (value === '' && country !== '') {
            return items.filter((item) => {
                return item.country === country ? item : null
            })
        } else {
            return items
        }
    }
    
    return (
        <React.Fragment>
            <Header></Header>
            <main>
                <section className="coffee">
                    <h1 className="title-primary coffee__title">
                        Coffee
                    </h1>
                </section>
                <About 
                    img={aboutImage} 
                    title="О наших бобах"
                    text={[
                        'Крайняя сладость трудного поведения он изощренен. В распоряжении хозяина попал.',
                        'Боюсь очень месяцами натворить. Ситуация рекомендует возражение сделать намерение так что вопросы.',
                        'Как удаленно звонить приятно поправить. Последний вопрос ему холодно встретил место застенчивый хочу.Ребята мне смеясь мы надеемся ответили пошли.На это пошло это песня, в которой содержится лицо помощи.'
                    ]}
                />
                <section className="search">
                    <div className="container">
                        <div className="search__wrapper">
                            <div className="search__input">
                                <label htmlFor="search">Напишите</label>
                                < input type = "text"
                                id = "search"
                                placeholder = "Начните что-то писать..."
                                onChange = {
                                    (e) => {
                                        setSearchArr(search(e.target.value,'', state.cards))
                                    }
                                }
                                />
                            </div>
                            <div className="search__filter">
                                <span>Или отфильтруйте</span>
                                <Button 
                                    text="Brazil"
                                    onCustomClick={(e) => {setSearchArr(search('',e.target.innerHTML, state.cards))}}
                                />
                                <Button 
                                    text="Kenya"
                                    onCustomClick={(e) => {setSearchArr(search('',e.target.innerHTML, state.cards))}}    
                                />
                                <Button 
                                    text="Columbia"
                                    onCustomClick={(e) => {setSearchArr(search('',e.target.innerHTML, state.cards))}}    
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="catalog">
                    <div className="container">
                        <div className="catalog__wrapper">
                            <Items state={searchArr}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </React.Fragment>
    )
}
export default CoffeePage;