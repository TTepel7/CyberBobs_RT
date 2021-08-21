import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { InputText } from '@design-system-rt/rtk-ui-kit';

import BlockFirst from "./blocks/block1"
import BlockSecond from "./blocks/block2"
import BlockThird from "./blocks/block3"

function WorkArea({ text, input_change }) {



    let blockList = [
        {
            name: "BlockFirst",
            element: <BlockFirst key="0" text={text}></BlockFirst>,
            props: {

            }

        },
        {
            name: "BlockSecond",
            element: <BlockSecond key="1"></BlockSecond>
        },
        {
            name: "BlockThird",
            element: <BlockThird key="2"></BlockThird>
        },

    ]

    return (

        <div className="container work-area">
            <ThemeProvider themeName="light">
                {blockList.map((block, index) => { return block.element })}
            </ThemeProvider>
        </div>
    );
}

export default WorkArea;


