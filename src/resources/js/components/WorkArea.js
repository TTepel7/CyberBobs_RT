import * as React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { InputText, Button } from '@design-system-rt/rtk-ui-kit';

import BlockFirst from "./blocks/block1"
import BlockSecond from "./blocks/block2"
import BlockThird from "./blocks/block3"

import CardsBlock from './blocks/CardsBlock';



function WorkArea({ sender, input_change }) {
    const [blocks, setBlocks] = React.useState([])
    if (sender.length > 0)
        addBlock(sender.pop())

    function addBlock(value) {
        let item = {}

        if (value === "CardsBlock") {
            let id = blocks.length;
            item.name = value;
            item.id = id;
            item.element = <div key={id}>

                <CardsBlock
                    //key={id}
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
                ></CardsBlock>
                <Button onClick={(e) => {
                    console.log("id", id)
                    blocks.splice(id, 1)
                    setBlocks( blocks )
                }}>Delete</Button>
            </div>

        }
        blocks.push(item)

        // setBlocks(blocks)
    }
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

    console.log(blocks)
    return (

        <div className="container work-area">

            <ThemeProvider themeName="light">
                {blocks.map((block, index) => { return block.element })}
            </ThemeProvider>
        </div>
    );
}

export default WorkArea;


