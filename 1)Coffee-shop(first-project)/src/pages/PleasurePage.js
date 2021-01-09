import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Items from '../components/Items/Items';

import aboutImage from '../img/about/about-2.jpg';

function PleasurePage({state}) {
    return (
        <React.Fragment>
            <Header></Header>
            <main>
                <section className="pleasure">
                    <h1 className="title-primary pleasure__title">
                        Для вашего удовольствия
                    </h1>
                </section>
                <About
                    img={aboutImage}
                    title="О наших товарах"
                    text={[
                        'Крайняя сладость трудного поведения он изощренен. В распоряжении хозяина попал.',
                        'Боюсь очень месяцами натворить. Ситуация рекомендует возражение сделать намерение так что вопросы.',
                        'Как удаленно звонить приятно поправить. Последний вопрос ему холодно встретил место застенчивый хочу.Ребята мне смеясь мы надеемся ответили пошли.На это пошло это песня, в которой содержится лицо помощи.'
                    ]}
                />
                <section className="catalog">
                    <div className="container">
                        <div className="catalog__wrapper pleasure__catalog">
                            <Items state={state.cards}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </React.Fragment>
    )
}
export default PleasurePage;