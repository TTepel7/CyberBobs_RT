import React from 'react';
import ReactDOM from 'react-dom';

import WorkArea from "./WorkArea";
import html2canvas from 'html2canvas';
import download from 'downloadjs'
import {Switch, RadioGroup, RadioButton, Button} from '@design-system-rt/rtk-ui-kit';


function ToolBar() {
    const [option, setOption] = React.useState({
        text: 'Проверка'
    });

    function export_work() {
        let canvas= html2canvas(document.querySelector(".work-area"),{ useCORS: true}).then(canvas => {
                let img=canvas.toDataURL("image/png");
             download(img,'test_img',"image/png")
        });



    }

    function get_input_change(value) {
        setOption({text: value})
    }

    return (
        <div className="tool-bar">
            <Switch
                color="primary2"
                defaultChecked
                onChange={function noRefCheck() {
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
                    display: 'inline'
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
            <Button onClick={export_work}
                    style={{float: "right", paddingRight: "1rem", marginLeft: 'auto', marginTop: '-0.75rem'}}
                    shape="circular">Экспортировать</Button>
        </div>
    );
}

export default ToolBar;
