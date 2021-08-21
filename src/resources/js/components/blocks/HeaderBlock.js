import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from '@design-system-rt/rtk-ui-kit';
import {ThemeProvider} from '@design-system-rt/rtk-ui-kit';

function HeaderBlock() {

    return (
        <div>
            <Header />
        </div>
    );
}

export default HeaderBlock;

if (document.getElementById('HeaderBlock')) {
    ReactDOM.render(
        <HeaderBlock />, document.getElementById('HeaderBlock'));
}
