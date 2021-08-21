import React from 'react';
import ReactDOM from 'react-dom';
import Button_test from './Button_test';
import Input_test from "./input_test";

import {ThemeProvider} from '@design-system-rt/rtk-ui-kit';
import ToolBar from "./ToolBar";
import WorkArea from "./WorkArea";

import HeaderBlock from "./blocks/HeaderBlock";
import CardsBlock from "./blocks/CardsBlock";
import PaymentBlock from "./blocks/PaymentBlock";
import FooterBlock from "./blocks/FooterBlock";

function Example() {


    const [option, setOption] = React.useState({
        text: 'Проверка'
    });

    function get_input_change(value) {
        setOption({text: value})

    }

    const [theme,setTheme]=React.useState({dark:"light"})
    const [bg,setBg]=React.useState({class:"container mt-2 border border-dark"})
    function changeTheme(v) {
        console.log(v)
        setTheme({dark:v?'dark':'light'})
        setBg({class:v?'container mt-2 border border-dark bg-dark':'container mt-2 border border-dark'})
    }
    return (

        <div className="cyber-app">
            <ThemeProvider themeName="dark">
                <ToolBar className='tool-bar-radio' text="Тёмная тема" textStyle="color: white" SwitchCallback={changeTheme}></ToolBar>
            </ThemeProvider>
            <div className={bg.class}>
                <ThemeProvider themeName={theme.dark}>
                    <HeaderBlock></HeaderBlock>
                    <CardsBlock title={{
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
                                ]}></CardsBlock>

                    <PaymentBlock
                        title={{
                            text: "Главный заголовок",
                            color: "main",
                            variant: "mega"
                        }}
                        subtitle={{
                            text: "Подзоголовок",
                            color: "main",
                            variant: "h2"
                        }}
                        form={{
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
                        }}
                        box={{
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
                        }}
                    ></PaymentBlock>
                    <FooterBlock
                        text="Продолжая пользование сайтом, вы соглашаетесь на обработку файлов Cookies и других пользовательских данных, в соответствии с политикой конфиденциальности"
                        copyright="© 2020 ПАО «Ростелеком». 0+"
                    ></FooterBlock>
                </ThemeProvider>
            </div>


        </div>

    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example/>, document.getElementById('example'));
}
