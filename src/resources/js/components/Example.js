import React from 'react';
import ReactDOM from 'react-dom';
import Button_test from './Button_test';
import Input_test from "./input_test";


import WorkArea from "./WorkArea";

function Example() {
    const [option, setOption] = React.useState({
        text: 'Проверка'
    });

    function get_input_change(value) {
        setOption({ text: value })

    }
    return (
        <div className="container-fluid">


            <div className="card">
                <div className="card-header">Example Component {option.text}</div>

                <div className="card-body">I'm an example component!
                    <Button_test options={option}></Button_test>
                    <Input_test input_change={get_input_change}></Input_test>
                    <WorkArea text={option.text}></WorkArea>
                </div>

            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
