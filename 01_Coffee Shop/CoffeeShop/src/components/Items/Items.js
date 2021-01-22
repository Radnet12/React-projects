import React from 'react';
import Item from '../Item/Item';

function Items({state}) {
    return state.map((card, id) => {
            return (
                <Item key={id} id={(id + 1)} img={card.img} text={card.text} country={card.country} price={card.price}/>
            )
        })
}
export default Items;