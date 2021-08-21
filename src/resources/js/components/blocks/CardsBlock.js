import React from 'react';
import ReactDOM from 'react-dom';

import {Box} from '@design-system-rt/rtk-ui-kit';
import {Typography} from '@design-system-rt/rtk-ui-kit';
import {ThemeProvider} from '@design-system-rt/rtk-ui-kit';

function CardsBlock() {

    return (
        <ThemeProvider themeName="light">
            <div className="row justify-content-center">


                <div className="col-3 p-3">
                    <Box
                        cornersRounding="m"
                        shadow="bottomM"
                        spacing="m"
                        spacingBottom="s"
                    >
                        <img className="card-img-top mb-3" src="https://ekt.rt.ru/sites/default/files/b2c/special/Knigi_467%E2%95%A4%D0%95264px.jpg" alt="Card image cap">
                        </img>
                        <Typography
                            color="main"
                            variant="h2"
                        >
                            Заголовок
                        </Typography>
                        <Typography
                            color="caption"
                            variant="caption"
                            spacingBottom="s"
                        >
                            dasdasdasd dasdasdasd  dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd dasdasdasd
                        </Typography>
                        <Typography variant="bodyM">
                            <a
                                href="/?path=/docs/base-and-styles-spacing--inner-spacing"
                                target="_blank"
                            >
                                Подробнее
                            </a>
                        </Typography>
                    </Box>
                </div>


            </div>
        </ThemeProvider>
    );
}

export default CardsBlock;

if (document.getElementById('CardsBlock')) {
    ReactDOM.render(<CardsBlock/>, document.getElementById('CardsBlock'));
}
