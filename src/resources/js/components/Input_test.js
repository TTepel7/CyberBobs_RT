import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { InputText } from '@design-system-rt/rtk-ui-kit';

function Input_test({ options, input_change }) {
    return (
        <div className="container">
            <ThemeProvider themeName="light">
                <InputText
                    label="Текст кнопки"
                    onChange={() => { input_change(event.target.value) }}
                />
            </ThemeProvider>
        </div>
    );
}

export default Input_test;


