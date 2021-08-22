import * as React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { InputText, Button } from '@design-system-rt/rtk-ui-kit';

import BlockFirst from "./blocks/block1"
import BlockSecond from "./blocks/block2"
import BlockThird from "./blocks/block3"

import CardsBlock from './blocks/CardsBlock';
import HeaderBlock from './blocks/HeaderBlock';
import PaymentBlock from './blocks/PaymentBlock';
import FooterBlock from './blocks/FooterBlock';

import { v4 as uuidv4 } from 'uuid';


function WorkArea({ sender, input_change, click_change, propObj, ThemeName, ThemeClass }) {
    const [blocks, setBlocks] = React.useState([])
    const [currentBlock, setCurrentBlock] = React.useState(null)
    if (sender.length > 0) {
        addBlock(sender.pop())
    }
    let newArr = blocks
    if (propObj && propObj.id) {
        console.log(blocks)
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i].id === propObj.id) {
                newArr[i].propObj = propObj;
            }
        }
    }

    // setBlocks(blocks.filter(item => item.id !== e.)
    function removeBlock(order) {
        setBlocks(newArr.filter(item => { return item.order !== order }))
        for (var i = order; i < newArr.length; i++) {
            newArr[i].order--;
        }
    }

    function dragStartHandler(e, block) {
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
        e.preventDefault()
        if (block.id !== currentBlock.id) {
            setBlocks(newArr.map(c => {
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

        let id = uuidv4();
        let order = blocks.length + 1;
        item.name = value;
        item.id = id;
        item.order = order;

        switch (value) {
            case "CardsBlock": {
                item.propObj = {
                    id: item.id,
                    title: {
                        text: "",
                        color: "",
                        variant: "",
                    },
                    cards: [
                        {
                            box: {
                                cornersRounding: "m",
                                shadow: "bottomM",
                                spacing: "m",
                                spacingBottom: "s"
                            },
                            img: "",
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
                            img: "",
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

                    ]
                }

                break;
            } case "FooterBlock": {
                item.propObj = {
                    id: item.id,
                    text: "Продолжая пользование сайтом, вы соглашаетесь на обработку файлов Cookies и других пользовательских данных, в соответствии с политикой конфиденциальности",
                    copyright: "© 2020 ПАО «Ростелеком». 0+"
                }
                break;
            } case "HeaderBlock": {

                item.propObj = { id: item.id, }
                break;
            } case "PaymentBlock": {

                item.propObj = {
                    id: item.id,
                    title: {
                        text: "Главный заголовок",
                        color: "main",
                        variant: "mega"
                    },
                    subtitle: {
                        text: "Подзоголовок",
                        color: "main",
                        variant: "h2"
                    },
                    form: {
                        box: {
                            cornersRounding: "m",
                            shadow: "bottomM",
                            spacing: "m",
                            spacingBottom: "s"
                        },
                        title: {
                            text: "Оплата",
                            color: "main",
                            variant: "h2"
                        },
                        email: {
                            label: 'Email',
                            color: 'primary1',
                            shape: 'geometric'
                        },
                        amount: {
                            label: 'Сумма',
                            color: 'primary1',
                            shape: 'geometric'
                        },
                        btn: {
                            text: 'Оплата',
                            color: 'primary1',
                            shape: 'rounded'
                        }
                    },
                    box: {
                        box: {
                            cornersRounding: "m",
                            shadow: "bottomM",
                            spacing: "m",
                            spacingBottom: "s"
                        },
                        title: {
                            text: "Заголовок",
                            color: "main",
                            variant: "h2"
                        },
                        content: {
                            color: "main",
                            variant: "caption",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                        }
                    }
                }
                break;
            }
        }

        let newArray = blocks;

        newArray.push(item)

        setBlocks(newArray)
    }

    return (


        <div className={"container work-area " + ThemeClass.class}>
            <ThemeProvider themeName={ThemeName.theme}>


                {newArr.sort(sortBlocks).map((block, index) => {
                    switch (block.name) {
                        case "CardsBlock": {
                            let id = block.id;
                            return <div className="block-component" key={id} draggable={true}
                                onClick={(e) => { click_change(block.propObj) }}
                                onDragStart={(e) => dragStartHandler(e, block)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, block)}>

                                <CardsBlock

                                    title={{
                                        text: block.propObj.title.text,
                                        color: block.propObj.title.color,
                                        variant: block.propObj.title.variant
                                    }}
                                    cards={[
                                        {
                                            box: {
                                                cornersRounding: block.propObj.cards[0].box.cornersRounding,
                                                shadow: block.propObj.cards[0].box.shadow,
                                                spacing: block.propObj.cards[0].box.spacing,
                                                spacingBottom: block.propObj.cards[0].box.spacingBottom
                                            },
                                            img: block.propObj.cards[0].img,
                                            title: {
                                                text: block.propObj.cards[0].title.text,
                                                color: block.propObj.cards[0].title.color,
                                                variant: block.propObj.cards[0].title.variant
                                            },
                                            caption: {
                                                text: block.propObj.cards[0].caption.text,
                                                color: block.propObj.cards[0].caption.color,
                                                variant: block.propObj.cards[0].caption.variant
                                            },
                                            link: {
                                                text: block.propObj.cards[0].link.text,
                                                href: block.propObj.cards[0].link.href,
                                            }
                                        },
                                        {
                                            box: {
                                                cornersRounding: block.propObj.cards[0].box.cornersRounding,
                                                shadow: block.propObj.cards[0].box.shadow,
                                                spacing: block.propObj.cards[0].box.spacing,
                                                spacingBottom: block.propObj.cards[0].box.spacingBottom
                                            },
                                            img: block.propObj.cards[0].img,
                                            title: {
                                                text: block.propObj.cards[0].title.text,
                                                color: block.propObj.cards[0].title.color,
                                                variant: block.propObj.cards[0].title.variant
                                            },
                                            caption: {
                                                text: block.propObj.cards[0].caption.text,
                                                color: block.propObj.cards[0].caption.color,
                                                variant: block.propObj.cards[0].caption.variant
                                            },
                                            link: {
                                                text: block.propObj.cards[0].link.text,
                                                href: block.propObj.cards[0].link.href,
                                            }
                                        },
                                        {
                                            box: {
                                                cornersRounding: block.propObj.cards[0].box.cornersRounding,
                                                shadow: block.propObj.cards[0].box.shadow,
                                                spacing: block.propObj.cards[0].box.spacing,
                                                spacingBottom: block.propObj.cards[0].box.spacingBottom
                                            },
                                            img: block.propObj.cards[0].img,
                                            title: {
                                                text: block.propObj.cards[0].title.text,
                                                color: block.propObj.cards[0].title.color,
                                                variant: block.propObj.cards[0].title.variant
                                            },
                                            caption: {
                                                text: block.propObj.cards[0].caption.text,
                                                color: block.propObj.cards[0].caption.color,
                                                variant: block.propObj.cards[0].caption.variant
                                            },
                                            link: {
                                                text: block.propObj.cards[0].link.text,
                                                href: block.propObj.cards[0].link.href,
                                            }
                                        }
                                    ]}
                                ></CardsBlock>
                                <Button className="deleteButton" onClick={(e) => removeBlock(block.order)}>Удалить</Button>
                            </div >
                        }
                        case "FooterBlock": {
                            let id = block.id;
                            return <div className="block-component" key={id} draggable={true}
                                onClick={(e) => { click_change(block.propObj) }}

                                onDragStart={(e) => dragStartHandler(e, block)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, block)}>
                                <FooterBlock
                                    text={block.propObj.text}
                                    copyright={block.propObj.copyright}
                                ></FooterBlock>
                                <Button className="deleteButton" onClick={(e) => removeBlock(block.order)}>Удалить</Button>
                            </div>

                        }
                        case "HeaderBlock": {
                            let id = block.id;
                            return <div className="block-component" key={id} draggable={true}
                                onClick={(e) => { click_change(block.propObj) }}
                                onDragStart={(e) => dragStartHandler(e, block)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, block)}>
                                <HeaderBlock />
                                <Button className="deleteButton" onClick={(e) => removeBlock(block.order)}>Удалить</Button>
                            </div>

                        }
                        case "PaymentBlock": {
                            let id = block.id;
                            return <div className="block-component" key={id} draggable={true}
                                onClick={(e) => { click_change(block.propObj) }}
                                onDragStart={(e) => dragStartHandler(e, block)}
                                onDragLeave={(e) => dragLeaveHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, block)}>


                                <PaymentBlock
                                    title={{
                                        text: block.propObj.title.text,
                                        color: block.propObj.title.color,
                                        variant: block.propObj.title.variant
                                    }}
                                    subtitle={{
                                        text: block.propObj.subtitle.text,
                                        color: block.propObj.subtitle.color,
                                        variant: block.propObj.subtitle.variant
                                    }}
                                    form={{
                                        box: {
                                            cornersRounding: block.propObj.form.box.cornersRounding,
                                            shadow: block.propObj.form.box.shadow,
                                            spacing: block.propObj.form.box.spacing,
                                            spacingBottom: block.propObj.form.box.spacingBottom
                                        },
                                        title: {
                                            text: block.propObj.form.title.text,
                                            color: block.propObj.form.title.color,
                                            variant: block.propObj.form.title.variant
                                        },
                                        email: {
                                            label: block.propObj.form.email.label,
                                            color: block.propObj.form.email.color,
                                            shape: block.propObj.form.email.shape
                                        },
                                        amount: {
                                            label: block.propObj.form.amount.label,
                                            color: block.propObj.form.amount.color,
                                            shape: block.propObj.form.amount.shape
                                        },
                                        btn: {
                                            text: block.propObj.form.btn.text,
                                            color: block.propObj.form.btn.color,
                                            shape: block.propObj.form.btn.shape
                                        }
                                    }}
                                    box={{
                                        box: {
                                            cornersRounding: block.propObj.box.box.cornersRounding,
                                            shadow: block.propObj.box.box.shadow,
                                            spacing: block.propObj.box.box.spacing,
                                            spacingBottom: block.propObj.box.box.spacingBottom
                                        },
                                        title: {
                                            text: block.propObj.box.title.text,
                                            color: block.propObj.box.title.color,
                                            variant: block.propObj.box.title.variant
                                        },
                                        content: {
                                            color: block.propObj.box.content.color,
                                            variant: block.propObj.box.content.variant,
                                            text: block.propObj.box.content.text
                                        }
                                    }}
                                ></PaymentBlock>
                                <Button className="deleteButton" onClick={(e) => removeBlock(block.order)}>Удалить</Button>
                            </div>

                        }
                    }
                })}
            </ThemeProvider>
        </div>
    );
}

export default WorkArea;


