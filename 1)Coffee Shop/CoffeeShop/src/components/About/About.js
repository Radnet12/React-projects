import React from 'react';


function About({img, title, text}) {
    return (
        <section className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__image">
                        <img src={img} alt=""/>
                    </div>
                    <div className="about__text">   
                        <h2 className="title-secondary title-secondary--image">
                            {title}
                        </h2>
                        {text.map((text, id) => {
                            return (
                                <p key={id} className="about__paragraph">
                                    {text}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;