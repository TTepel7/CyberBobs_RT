import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { InputText, Button } from '@design-system-rt/rtk-ui-kit';

function BlockFirst(props) {

    return (
        <div className="container block1">
            <p>{props.text}</p>
            <Button></Button>
        </div>
    );
}

export default BlockFirst;

