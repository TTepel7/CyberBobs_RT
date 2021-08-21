import React from 'react';
import ReactDOM from 'react-dom';

import {Select} from '@design-system-rt/rtk-ui-kit';
import {InputText} from '@design-system-rt/rtk-ui-kit';
import {ThemeProvider} from '@design-system-rt/rtk-ui-kit';

function ToolBarBlock({object, changeCallback}) {

    return (
        <div className="tool-bar-scroll">
            <ThemeProvider themeName="light">
                {Object.entries(object).map(([key, value]) => {
                    if (key === 'title' || key === 'subtitle') {
                        return (
                            <div key={key}>
                                <h3>Заголовок</h3>
                                <div className='p-3'>
                                    <Select label="Цвет"
                                            options={[
                                                {
                                                    key: 'main',
                                                    value: 'main'
                                                },
                                                {
                                                    key: 'info',
                                                    value: 'info'
                                                },
                                                {
                                                    key: 'warning',
                                                    value: 'warning'
                                                },
                                                {
                                                    key: 'success',
                                                    value: 'success'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].color = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className='p-3'>
                                    <Select label="Размер"
                                            options={[
                                                {
                                                    key: 'description',
                                                    value: 'description'
                                                },
                                                {
                                                    key: 'caption',
                                                    value: 'caption'
                                                },
                                                {
                                                    key: 'mega',
                                                    value: 'mega'
                                                },
                                                {
                                                    key: 'h1',
                                                    value: 'h1'
                                                },
                                                {
                                                    key: 'h2',
                                                    value: 'h2'
                                                },
                                                {
                                                    key: 'h3',
                                                    value: 'h3'
                                                },
                                                {
                                                    key: 'h4',
                                                    value: 'h4'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].variant = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className="p-3">
                                    <InputText label="Текст"
                                               onChange={() => {
                                                   object[key].text = event.target.value;
                                                   changeCallback(object);
                                               }}></InputText>
                                </div>
                            </div>
                        );
                    } else if (key === 'form') {
                        return (
                            <div key={key}>
                                <h3>Платежная форма</h3>
                                <div className='p-3'>
                                    <Select label="Отступ формы"
                                            options={[
                                                {
                                                    key: 's',
                                                    value: 's'
                                                },
                                                {
                                                    key: 'm',
                                                    value: 'm'
                                                },
                                                {
                                                    key: 'l',
                                                    value: 'l'
                                                },
                                                {
                                                    key: 'xl',
                                                    value: 'xl'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].box.spacing = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className='p-3'>
                                    <Select label="Тень формы"
                                            options={[
                                                {
                                                    key: 'bottomS',
                                                    value: 'bottomS'
                                                },
                                                {
                                                    key: 'bottomM',
                                                    value: 'bottomM'
                                                },
                                                {
                                                    key: 'bottomL',
                                                    value: 'bottomL'
                                                },
                                                {
                                                    key: 'bottomXL',
                                                    value: 'bottomXL'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].box.shadow = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className='p-3'>
                                    <Select label="Сгругление углов формы"
                                            options={[
                                                {
                                                    key: 'xs',
                                                    value: 'xs'
                                                },
                                                {
                                                    key: 's',
                                                    value: 's'
                                                },
                                                {
                                                    key: 'm',
                                                    value: 'm'
                                                },
                                                {
                                                    key: 'l',
                                                    value: 'l'
                                                },
                                                {
                                                    key: 'xl',
                                                    value: 'xl'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].box.cornersRounding = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className='p-3'>
                                    <Select label="Цвет заголовка"
                                            options={[
                                                {
                                                    key: 'main',
                                                    value: 'main'
                                                },
                                                {
                                                    key: 'info',
                                                    value: 'info'
                                                },
                                                {
                                                    key: 'warning',
                                                    value: 'warning'
                                                },
                                                {
                                                    key: 'success',
                                                    value: 'success'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].title.color = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className='p-3'>
                                    <Select label="Размер заголовка"
                                            options={[
                                                {
                                                    key: 'description',
                                                    value: 'description'
                                                },
                                                {
                                                    key: 'caption',
                                                    value: 'caption'
                                                },
                                                {
                                                    key: 'mega',
                                                    value: 'mega'
                                                },
                                                {
                                                    key: 'h1',
                                                    value: 'h1'
                                                },
                                                {
                                                    key: 'h2',
                                                    value: 'h2'
                                                },
                                                {
                                                    key: 'h3',
                                                    value: 'h3'
                                                },
                                                {
                                                    key: 'h4',
                                                    value: 'h4'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].title.variant = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className="p-3">
                                    <InputText label="Текст заголовка"
                                               onChange={() => {
                                                   object[key].title.text = event.target.value;
                                                   changeCallback(object);
                                               }}></InputText>
                                </div>
                                <div className='p-3'>
                                    <Select label="Цвет ввода эмаейла"
                                            options={[
                                                {
                                                    key: 'primary1',
                                                    value: 'primary1'
                                                },
                                                {
                                                    key: 'primary2',
                                                    value: 'primary2'
                                                },
                                                {
                                                    key: 'secondary1',
                                                    value: 'secondary1'
                                                },
                                                {
                                                    key: 'secondary2',
                                                    value: 'secondary2'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].email.color = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className='p-3'>
                                    <Select label="Скругление ввода эмаейла"
                                            options={[
                                                {
                                                    key: 'geometric',
                                                    value: 'geometric'
                                                },
                                                {
                                                    key: 'rounded',
                                                    value: 'rounded'
                                                },
                                                {
                                                    key: 'circular',
                                                    value: 'circular'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].email.shape = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className="p-3">
                                    <InputText label="Текст ввода эмайла"
                                               onChange={() => {
                                                   object[key].email.text = event.target.value;
                                                   changeCallback(object);
                                               }}></InputText>
                                </div>
                                <div className='p-3'>
                                    <Select label="Цвет ввода цифр"
                                            options={[
                                                {
                                                    key: 'primary1',
                                                    value: 'primary1'
                                                },
                                                {
                                                    key: 'primary2',
                                                    value: 'primary2'
                                                },
                                                {
                                                    key: 'secondary1',
                                                    value: 'secondary1'
                                                },
                                                {
                                                    key: 'secondary2',
                                                    value: 'secondary2'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].amount.color = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className='p-3'>
                                    <Select label="Скругление ввода цифр"
                                            options={[
                                                {
                                                    key: 'geometric',
                                                    value: 'geometric'
                                                },
                                                {
                                                    key: 'rounded',
                                                    value: 'rounded'
                                                },
                                                {
                                                    key: 'circular',
                                                    value: 'circular'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].amount.shape = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className="p-3">
                                    <InputText label="Текст ввода суммы"
                                               onChange={() => {
                                                   object[key].amount.text = event.target.value;
                                                   changeCallback(object);
                                               }}></InputText>
                                </div>
                                <div className='p-3'>
                                    <Select label="Цвет кнопки"
                                            options={[
                                                {
                                                    key: 'primary1',
                                                    value: 'primary1'
                                                },
                                                {
                                                    key: 'primary2',
                                                    value: 'primary2'
                                                },
                                                {
                                                    key: 'secondary1',
                                                    value: 'secondary1'
                                                },
                                                {
                                                    key: 'secondary2',
                                                    value: 'secondary2'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].btn.color = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className='p-3'>
                                    <Select label="Скругление кнопки"
                                            options={[
                                                {
                                                    key: 'geometric',
                                                    value: 'geometric'
                                                },
                                                {
                                                    key: 'rounded',
                                                    value: 'rounded'
                                                },
                                                {
                                                    key: 'circular',
                                                    value: 'circular'
                                                }
                                            ]}
                                            onChange={(s_v) => {
                                                object[key].btn.shape = s_v;
                                                changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className="p-3">
                                    <InputText label="Текст кнопки"
                                               onChange={() => {
                                                   object[key].btn.text = event.target.value;
                                                   changeCallback(object);
                                               }}></InputText>
                                </div>
                            </div>
                        )
                    } else if (key === 'box') {
                        return (<div key={key}>
                            <h3>Форма информации</h3>
                            <div className='p-3'>
                                <Select label="Отступ формы"
                                        options={[
                                            {
                                                key: 's',
                                                value: 's'
                                            },
                                            {
                                                key: 'm',
                                                value: 'm'
                                            },
                                            {
                                                key: 'l',
                                                value: 'l'
                                            },
                                            {
                                                key: 'xl',
                                                value: 'xl'
                                            }
                                        ]}
                                        onChange={(s_v) => {
                                            object[key].box.spacing = s_v;
                                            changeCallback(object);
                                        }}
                                ></Select>
                            </div>
                            <div className='p-3'>
                                <Select label="Тень формы"
                                        options={[
                                            {
                                                key: 'bottomS',
                                                value: 'bottomS'
                                            },
                                            {
                                                key: 'bottomM',
                                                value: 'bottomM'
                                            },
                                            {
                                                key: 'bottomL',
                                                value: 'bottomL'
                                            },
                                            {
                                                key: 'bottomXL',
                                                value: 'bottomXL'
                                            }
                                        ]}
                                        onChange={(s_v) => {
                                            object[key].box.shadow = s_v;
                                            changeCallback(object);
                                        }}
                                ></Select>
                            </div>
                            <div className='p-3'>
                                <Select label="Сгругление углов формы"
                                        options={[
                                            {
                                                key: 'xs',
                                                value: 'xs'
                                            },
                                            {
                                                key: 's',
                                                value: 's'
                                            },
                                            {
                                                key: 'm',
                                                value: 'm'
                                            },
                                            {
                                                key: 'l',
                                                value: 'l'
                                            },
                                            {
                                                key: 'xl',
                                                value: 'xl'
                                            }
                                        ]}
                                        onChange={(s_v) => {
                                            object[key].box.cornersRounding = s_v;
                                            changeCallback(object);
                                        }}
                                ></Select>
                            </div>
                            <div className='p-3'>
                                <Select label="Цвет заголовка"
                                        options={[
                                            {
                                                key: 'main',
                                                value: 'main'
                                            },
                                            {
                                                key: 'info',
                                                value: 'info'
                                            },
                                            {
                                                key: 'warning',
                                                value: 'warning'
                                            },
                                            {
                                                key: 'success',
                                                value: 'success'
                                            }
                                        ]}
                                        onChange={(s_v) => {
                                            object[key].title.color = s_v;
                                            changeCallback(object);
                                        }}
                                ></Select>
                            </div>
                            <div className='p-3'>
                                <Select label="Размер заголовка"
                                        options={[
                                            {
                                                key: 'description',
                                                value: 'description'
                                            },
                                            {
                                                key: 'caption',
                                                value: 'caption'
                                            },
                                            {
                                                key: 'mega',
                                                value: 'mega'
                                            },
                                            {
                                                key: 'h1',
                                                value: 'h1'
                                            },
                                            {
                                                key: 'h2',
                                                value: 'h2'
                                            },
                                            {
                                                key: 'h3',
                                                value: 'h3'
                                            },
                                            {
                                                key: 'h4',
                                                value: 'h4'
                                            }
                                        ]}
                                        onChange={(s_v) => {
                                            object[key].title.variant = s_v;
                                            changeCallback(object);
                                        }}
                                ></Select>
                            </div>
                            <div className="p-3">
                                <InputText label="Текст заголовка"
                                           onChange={() => {
                                               object[key].title.text = event.target.value;
                                               changeCallback(object);
                                           }}></InputText>
                            </div>
                            <div className='p-3'>
                                <Select label="Цвет контента"
                                        options={[
                                            {
                                                key: 'main',
                                                value: 'main'
                                            },
                                            {
                                                key: 'info',
                                                value: 'info'
                                            },
                                            {
                                                key: 'warning',
                                                value: 'warning'
                                            },
                                            {
                                                key: 'success',
                                                value: 'success'
                                            }
                                        ]}
                                        onChange={(s_v) => {
                                            object[key].content.color = s_v;
                                            changeCallback(object);
                                        }}
                                ></Select>
                            </div>
                            <div className='p-3'>
                                <Select label="Размер заголовка"
                                        options={[
                                            {
                                                key: 'description',
                                                value: 'description'
                                            },
                                            {
                                                key: 'caption',
                                                value: 'caption'
                                            },
                                            {
                                                key: 'mega',
                                                value: 'mega'
                                            },
                                            {
                                                key: 'h1',
                                                value: 'h1'
                                            },
                                            {
                                                key: 'h2',
                                                value: 'h2'
                                            },
                                            {
                                                key: 'h3',
                                                value: 'h3'
                                            },
                                            {
                                                key: 'h4',
                                                value: 'h4'
                                            }
                                        ]}
                                        onChange={(s_v) => {
                                            object[key].content.variant = s_v;
                                            changeCallback(object);
                                        }}
                                ></Select>
                            </div>
                            <div className="p-3">
                                <InputText label="Текст заголовка"
                                           onChange={() => {
                                               object[key].title.text = event.target.value;
                                               changeCallback(object);
                                           }}></InputText>
                            </div>
                        </div>)
                    } 
                })}
            </ThemeProvider>
        </div>
    );
}

export default ToolBarBlock;

if (document.getElementById('ToolBarBlock')) {
    ReactDOM.render(
        <ToolBarBlock
            object={{
                form: {
                    box: {},
                    title: {},
                    email: {},
                    amount: {}
                }
            }}
        ></ToolBarBlock>, document.getElementById('ToolBarBlock'));
}
