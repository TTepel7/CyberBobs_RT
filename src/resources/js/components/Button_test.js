import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { Button } from '@design-system-rt/rtk-ui-kit';

function Button_test({options}) {
    return (
        <div className="container">
            <ThemeProvider themeName="dark">
                <Button>{options.text}</Button>
            </ThemeProvider>
        </div>
    );
}

export default Button_test;


