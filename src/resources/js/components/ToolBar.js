import React from 'react';
import ReactDOM from 'react-dom';

import WorkArea from "./WorkArea";

import { Switch } from '@design-system-rt/rtk-ui-kit';



function ToolBar() {
    const [option, setOption] = React.useState({
        text: 'Проверка'
    });

    function get_input_change(value) {
        setOption({ text: value })
    }
    return (
        <div className="tool-bar" >
            <Switch
                color="primary2"
                defaultChecked
                onChange={function noRefCheck(){}}
                shape="circular"
                text="Автообновление"
                textPosition="right"
                />
        </div>
    );
}

export default ToolBar;
