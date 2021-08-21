import React from 'react';
import ReactDOM from 'react-dom';

import {Select} from '@design-system-rt/rtk-ui-kit';
import {InputText} from '@design-system-rt/rtk-ui-kit';
import {ThemeProvider} from '@design-system-rt/rtk-ui-kit';

function ToolBarBlock({object, changeCallback}) {

    return (
        <div>
            <ThemeProvider themeName="light">
                {Object.entries(object).map(([key, value]) => {
                    if (key === 'title') {
                        return (
                            <div key={key}>
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
                                                console.log(object);
                                                // changeCallback(object);
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
                                                console.log(object);
                                                // changeCallback(object);
                                            }}
                                    ></Select>
                                </div>
                                <div className="p-3">
                                    <InputText label="Текст"
                                               onChange={() => {
                                                   object[key].text = event.target.value;
                                                   console.log( object[key].text);
                                                   // changeCallback(object);
                                               }}></InputText>
                                </div>
                            </div>
                        );
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
                title: {
                    text: "Главный заголовок",
                    color: "main",
                    variant: "mega"
                }
            }}
        ></ToolBarBlock>, document.getElementById('ToolBarBlock'));
}
