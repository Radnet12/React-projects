import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import image from '../img/item-page/image1.jpg';

function ItemPage({match, state}) {
    return (
        <React.Fragment>
            <Header></Header>
            <main>
                <section className="coffee">
                    <h1 className="title-primary coffee__title">
                        Coffee
                    </h1>
                </section>
                <section className="goods">
                    <div className="container">
                        <div className="goods__wrapper">

                            {
                                (state.cards.length === 0) ? ''
                                : 
                                <React.Fragment>
                                    <div className="goods__image">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="goods__text">
                                        <h2 className="title-secondary title-secondary--image">
                                            О товаре
                                        </h2>
                                        <div className="goods__country">
                                            <span>Country: </span>{state.cards[match.params.id - 1].country}
                                        </div>
                                        <div className="goods__descr">
                                            <span>Description: </span> {state.cards[match.params.id - 1].text}
                                        </div>
                                        <div className="goods__price">
                                            <span>Price: </span>{state.cards[match.params.id - 1].price}
                                        </div>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </React.Fragment>
    )
}
export default ItemPage;