import React from 'react';
import ReactDOM from 'react-dom';

import {Box} from '@design-system-rt/rtk-ui-kit';
import {Typography} from '@design-system-rt/rtk-ui-kit';
import {ThemeProvider} from '@design-system-rt/rtk-ui-kit';

function CardsBlock({title, cards}) {

    return (
        <div>
            <Typography
                className="ml-4"
                color={title.color || "main"}
                variant={title.variant || "mega"}
            >
                {title.text || "Главный заголовок"}
            </Typography>
            <div className="row justify-content-center">

                {cards.map((card, i) => {
                    return (
                        <div className="col-3 p-3" key={i}>
                            <Box
                                cornersRounding={card.box.cornersRounding || "m"}
                                shadow={card.box.shadow || "bottomM"}
                                spacing={card.box.spacing || "m"}
                                spacingBottom={card.box.spacingBottom || "s"}
                            >
                                <div className="cards-blocks-img">
                                    <img className="card-img-top mb-3 rounded cards-blocks-img"
                                         src={card.img || "https://ekt.rt.ru/sites/default/files/b2c/special/Knigi_467%E2%95%A4%D0%95264px.jpg"}
                                         alt="Card image cap"/>
                                </div>
                                <Typography
                                    color={card.title.color || "main"}
                                    variant={card.title.variant || "h2"}
                                >
                                    {card.title.text || "Заголовок"}
                                </Typography>
                                <Typography
                                    color={card.caption.color || "caption"}
                                    variant={card.caption.variant || "caption"}
                                    spacingBottom="s"
                                >
                                    {card.caption.text || "Описание"}
                                </Typography>
                                <Typography variant="bodyM">
                                    <a
                                        href={card.link.href || "#"}
                                        target="_blank"
                                    >
                                        {card.link.text || "Подробнее"}
                                    </a>
                                </Typography>
                            </Box>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default CardsBlock;

if (document.getElementById('CardsBlock')) {
    ReactDOM.render(
        <CardsBlock
            title={{
                text: "Главный заголовок",
                color: "main",
                variant: "mega"
            }}
            cards={[
                {
                    box: {
                        cornersRounding: "m",
                        shadow: "bottomM",
                        spacing: "m",
                        spacingBottom: "s"
                    },
                    img: null,
                    title: {
                        text: "Заголовок",
                        color: "main",
                        variant: "h2"
                    },
                    caption: {
                        text: "Описание",
                        color: "caption",
                        variant: "caption"
                    },
                    link: {
                        text: "Подробнее",
                        href: "#"
                    }
                },
                {
                    box: {
                        cornersRounding: "m",
                        shadow: "bottomM",
                        spacing: "m",
                        spacingBottom: "s"
                    },
                    img: null,
                    title: {
                        text: "Заголовок",
                        color: "main",
                        variant: "h2"
                    },
                    caption: {
                        text: "Описание",
                        color: "caption",
                        variant: "caption"
                    },
                    link: {
                        text: "Подробнее",
                        href: "#"
                    }
                },
                {
                    box: {
                        cornersRounding: "m",
                        shadow: "bottomM",
                        spacing: "m",
                        spacingBottom: "s"
                    },
                    img: null,
                    title: {
                        text: "Заголовок",
                        color: "main",
                        variant: "h2"
                    },
                    caption: {
                        text: "Описание",
                        color: "caption",
                        variant: "caption"
                    },
                    link: {
                        text: "Подробнее",
                        href: "#"
                    }
                },
                {
                    box: {
                        cornersRounding: "m",
                        shadow: "bottomM",
                        spacing: "m",
                        spacingBottom: "s"
                    },
                    img: "https://klike.net/uploads/posts/2019-09/1568528411_3.jpg",
                    title: {
                        text: "Заголовок",
                        color: "main",
                        variant: "h2"
                    },
                    caption: {
                        text: "Описание",
                        color: "caption",
                        variant: "caption"
                    },
                    link: {
                        text: "Подробнее",
                        href: "#"
                    }
                }
            ]}
        ></CardsBlock>, document.getElementById('CardsBlock'));
}
