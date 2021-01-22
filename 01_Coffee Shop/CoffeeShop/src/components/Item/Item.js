import React from 'react';
import {Link} from 'react-router-dom';

function Item({img, text, country, price, id}) {
    return (
        <div className="catalog__item">
            <Link to={"/catalog/" + id}>
                <div className="catalog__image">
                    <img src={img} alt="" />
                </div>
                <div className="catalog__title">
                    {text}
                </div>
                <div className="catalog__info">
                    {country}
                </div>
                <div className="catalog__info">
                    {price}
                </div>
            </Link>
        </div>
    )
}
export default Item;