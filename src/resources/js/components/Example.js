import React from 'react';
import ReactDOM from 'react-dom';
import Button_test from './Button_test';
import Input_test from "./input_test";

import Context from '../context'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { Car, ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import ToolBar from "./ToolBar";
import WorkArea from "./WorkArea";
import BlockLibrary from './BlockLibrary';
import ToolBarBlock from './blocks/ToolBarBlock';


import CardsBlock from './blocks/CardsBlock';

function Example() {

    const [sender, setSender] = React.useState([])

    const [object, setObject] = React.useState({})

    const [propObj, setPropObj] = React.useState({})

    function get_input_change(value) {
        setSender([value])
    }


    //setTimeout(athenaMeeting, 30000)
    function getBlockForProps(value) {
        setObject(value)
    }

    function gettingObject(value) {
        let newData = value;
        setPropObj({ ...value })
    }

    const [ThemeName, setThemeName] = React.useState({ theme: 'light' });
    const [ThemeClass, setThemeClass] = React.useState({ class: 'bg-light' })
    function themeChange(v) {
        setThemeName({ theme: v ? 'dark' : 'light' });
        setThemeClass({ class: v ? 'bg-dark' : 'bg-light' });
    }

    return (
        <ThemeProvider themeName="dark">
            <div className="cyber-app">
                <ToolBar className='tool-bar-radio' text="Тёмная тема" textStyle="color: white" ThemeChange={themeChange}></ToolBar>
                <div className="cyber-content">
                    <BlockLibrary input_change={get_input_change}></BlockLibrary>
                    <WorkArea sender={sender} click_change={getBlockForProps} propObj={propObj} ThemeName={ThemeName} ThemeClass={ThemeClass}></WorkArea>
                    <ToolBarBlock object={object} changeCallback={gettingObject} ></ToolBarBlock>
                </div>
            </div>

        </ThemeProvider>


    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
