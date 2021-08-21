import * as React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { InputText, Button } from '@design-system-rt/rtk-ui-kit';

import BlockFirst from "./blocks/block1"
import BlockSecond from "./blocks/block2"
import BlockThird from "./blocks/block3"

import CardsBlock from './blocks/CardsBlock';

import { v4 as uuidv4 } from 'uuid';


function WorkArea({ sender, input_change }) {
    const [blocks, setBlocks] = React.useState([])

    const [currentBlock, setCurrentBlock] = React.useState(null)
    if (sender.length > 0) {
        addBlock(sender.pop())
    }

    // setBlocks(blocks.filter(item => item.id !== e.)
    function removeBlock(order) {
        console.log("?????????????")
        setBlocks(blocks.filter(item => { return item.order !== order }))
        for (var i = order; i < blocks.length; i++) {
            blocks[i].order--;
        }
    }

    function dragStartHandler(e, block) {
        console.log("drag", block);
        setCurrentBlock(block)

    }
    function dragLeaveHandler(e) {

    }

    function dragEndHandler(e) {

    }

    function dragOverHandler(e) {
        e.preventDefault()

    }

    function dropHandler(e, block) {
        console.log("drop", block)
        e.preventDefault()
        console.log(block.id, currentBlock.id)
        if (block.id !== currentBlock.id) {
            setBlocks(blocks.map(c => {
                if (c.id === block.id) {
                    return { ...c, order: currentBlock.order }
                }
                if (c.id === currentBlock.id) {
                    return { ...c, order: block.order }
                }
                return c
            }))
        }

    }
    const sortBlocks = (a, b) => {
        if (a.order > b.order) {
            return 1
        } else {
            return -1
        }
    }

    function addBlock(value) {
        let item = {}

        if (value === "CardsBlock") {
            let id = uuidv4();
            let order = blocks.length + 1;
            item.name = value;
            item.id = id;
            item.order = order;
        }
        let newArray = blocks;

        newArray.push(item)

        setBlocks(newArray)
    }

    return (
        <div className="container work-area">
            <ThemeProvider themeName="light">
                {blocks.sort(sortBlocks).map((block, index) => {
                    console.log(block)
                    switch (block.name) {
                        case "CardsBlock": {
                            let id = block.id;
                            return <div key={id} draggable={true}
                                onDragStart={(e) => dragStartHandler(e, block)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, block)}>

                                <CardsBlock

                                    title={{
                                        text: "Главный заголовок" + id,
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
                                <Button id={"blockDelete_" + id} onClick={(e) => removeBlock(block.order)}>Delete</Button>
                            </div >
                        }
                    }
                })}
            </ThemeProvider>
        </div>
    );
}

export default WorkArea;


