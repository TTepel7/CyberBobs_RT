import React from 'react';
import ReactDOM from 'react-dom';

import {Footer} from '@design-system-rt/rtk-ui-kit';
import {ThemeProvider} from '@design-system-rt/rtk-ui-kit';

function FooterBlock({copyright, text}) {

    return (
        <div>
            <Footer copyright={copyright || "© 2020 ПАО «Ростелеком». 0+"}>
                {text || "Продолжая пользование сайтом, вы соглашаетесь на обработку файлов Cookies и других пользовательских данных, в соответствии с политикой конфиденциальности"}
            </Footer>
        </div>
    );
}

export default FooterBlock;

if (document.getElementById('FooterBlock')) {
    ReactDOM.render(
        <FooterBlock
            text="Продолжая пользование сайтом, вы соглашаетесь на обработку файлов Cookies и других пользовательских данных, в соответствии с политикой конфиденциальности"
            copyright="© 2020 ПАО «Ростелеком». 0+"
        ></FooterBlock>, document.getElementById('FooterBlock'));
}
