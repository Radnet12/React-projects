import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {Link} from 'react-router-dom';

import image1 from '../img/best/item-1.png';
import image2 from '../img/best/item-2.png';
import image3 from '../img/best/item-3.png';

function MainPage() {
    return (
        <React.Fragment>
            <Header></Header>
            <main>
                <section className="main">
                    <div className="container">
                        <div className="main__wrapper">
                            <h1 className="title-primary main__title">
                                Все, что вам нравится в кофе
                            </h1>
                            <h2 className="title-secondary main__subtitle">
                                Делаем каждый день полным энергии и вкуса
                            </h2>
                            <div className="main__offer">
                                <div className="main__text">
                                    Хотите попробовать наши бобы?
                                </div>
                                <Link to="/catalog">
                                    Больше
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="us">
                    <div className="container">
                        <h2 className="title-secondary title-secondary--image">
                            О нас
                        </h2>
                        <div className="us__text">
                            <p>
                                Конечная сладость трудного поведения он изощренен. В распоряжении хозяина попал.
                                Боюсь очень месяцами натворить. Ситуация рекомендует возражение сделать намерение
                                так что вопросы. Как удаленно звонит приятно поправить. Последний вопрос ему холодно
                                встретил место застенчивый хочу. Ребята мне смеясь мы надеемся ответили пошли. На это пошло
                                это песня, в которой содержится лицо помощи. 
                            </p>
                            <p>
                                Теперь резиденция Дашвудс она прекрасна тебе. Тень под его кроватью ее, много
                                читайте как рисовать. Благо для несведущих распаковал. Приятный
                                ужасный, но ограниченный день и конец брака. Гармоничный гарнитур сохранился далеко
                                рекомендую. Сделал даже, но не вселил надежду. Безопасная активная жизнь зависит от сына
                                день ремонта дамы сейчас.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="best">
                    <div className="container">
                        <h2 className="title-secondary" >
                            Лучшее
                        </h2>
                        <div className="best__wrapper">
                            <div className="best__item">
                                <div className="best__image">
                                    <img src={image1} alt=""/>
                                </div>
                                <span className="best__title">
                                    Solimo Coffee Beans 2 kg
                                </span>
                                <span className="best__price">
                                    10.73$
                                </span>
                            </div>
                            <div className="best__item">
                                <div className="best__image">
                                    <img src={image2} alt="" />
                                </div>
                                <span className="best__title">
                                    Presto Coffee Beans 1 kg
                                </span>
                                <span className="best__price">
                                    15.99$
                                </span>
                            </div>
                            <div className="best__item">
                                <div className="best__image">
                                    <img src={image3} alt="" />
                                </div>
                                <span className="best__title">
                                    AROMISTICO Coffee 1 kg
                                </span>
                                <span className="best__price">
                                    6.99$
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </React.Fragment>
    )
}
export default MainPage;