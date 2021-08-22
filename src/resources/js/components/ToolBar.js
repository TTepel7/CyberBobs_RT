import React from 'react';
import ReactDOM from 'react-dom';


import WorkArea from "./WorkArea";
import download from 'downloadjs'
import domtoimage from 'dom-to-image';
import {Switch, RadioGroup, RadioButton, Button} from '@design-system-rt/rtk-ui-kit';


function ToolBar({ThemeChange}) {
    const [option, setOption] = React.useState({
        text: 'Проверка'
    });

    function export_work() {
        // let canvas = html2canvas(document.querySelector(".work-area"), {
        //     useCORS: true, removeContainer: false
        // }).then(canvas => {
        //     let img = canvas.toDataURL();
        //     download(img, 'test_img')
        // });
        domtoimage.toPng(document.querySelector(".work-area"))
            .then(function (dataUrl) {
                console.log(dataUrl)
                download(dataUrl, 'test_img')
            })
    }

    function export_html() {
        var content = document.querySelector(".work-area").innerHTML;
        download(content, 'site.html')
    }


    function get_input_change(value) {
        setOption({text: value})
    }

    return (
        <div className="tool-bar">
            <Switch
                color="primary2"
                defaultChecked={false}
                onChange={(v) => {
                    ThemeChange(v)
                }}
                shape="circular"
                text="Тёмная тема"
                textPosition="right"
                textStyle={{
                    paddingRight: '1rem'
                }}
            />
            <RadioGroup
                onChange={function noRefCheck() {
                }}
                value="key1"
                style={{
                    display: 'none'
                }}
            >
                <RadioButton
                    name="rb1"
                    value="key1"
                    style={{
                        top: '-0.75rem',
                        paddingRight: '1rem'
                    }}
                >
                    Геометрический
                </RadioButton>
                <RadioButton

                    name="rb2"
                    value="key2"
                    style={{
                        top: '-0.75rem',
                        paddingRight: '1rem'
                    }}
                >
                    Скруглённый
                </RadioButton>
                <RadioButton
                    name="rb3"
                    value="key3"
                    style={{
                        top: '-0.75rem',
                        paddingRight: '1rem'
                    }}
                >
                    Круглый
                </RadioButton>
            </RadioGroup>

            <a href="/" className="brand">Графический редактор Athena</a>
            <Button onClick={export_work}
                    style={{cssFloat: "right", paddingRight: "1rem", marginLeft: 'auto', marginTop: '-0.75rem'}}
                    shape="circular">Экспорт PNG</Button>
            <Button onClick={export_html} className="exportHTML"
                    style={{cssFloat: "right", paddingRight: "1rem", marginLeft: '1rem', marginTop: '-0.75rem'}}
                    shape="circular">Экспорт HTML</Button>
        </div>
    );
}

export default ToolBar;
