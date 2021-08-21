import React from 'react';
import ReactDOM from 'react-dom';
import Button_test from './Button_test';
import Input_test from "./input_test";

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import ToolBar from "./ToolBar";
import WorkArea from "./WorkArea";

function Example() {


    const [option, setOption] = React.useState({
        text: 'Проверка'
    });

    function get_input_change(value) {
        setOption({ text: value })

    }
    return (
        <ThemeProvider themeName="light">
            <div className="cyber-app">
                <ToolBar ></ToolBar>

                <div className="card">
                    <div className="card-header">Example Component {option.text}</div>

                    <div className="card-body">I'm an example component!
                        <WorkArea text={option.text}></WorkArea>
                    </div>

                </div>
            </div>

        </ThemeProvider>

    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
