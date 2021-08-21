import React from 'react';
import ReactDOM from 'react-dom';

import {Box} from '@design-system-rt/rtk-ui-kit';
import {Typography} from '@design-system-rt/rtk-ui-kit';
import {InputEmail} from '@design-system-rt/rtk-ui-kit';
import {InputAmount} from '@design-system-rt/rtk-ui-kit';
import {Button} from '@design-system-rt/rtk-ui-kit';
import {ThemeProvider} from '@design-system-rt/rtk-ui-kit';

function PaymentBlock({title, subtitle, form, box}) {

    return (
        <div>
            <Typography
                className="ml-4 mb-2"
                color={title.color || "main"}
                variant={title.variant || "mega"}
            >
                {title.text || "Главный заголовок"}
            </Typography>
            <Typography
                className="ml-4"
                color={subtitle.color || "main"}
                variant={subtitle.variant || "h2"}
            >
                {subtitle.text || "Подзоголовок"}
            </Typography>
            <div className="row justify-content-center">

                <div className="col-6 p-3">
                    <Box
                        cornersRounding={form.box.cornersRounding || "m"}
                        shadow={form.box.shadow || "bottomM"}
                        spacing={form.box.spacing || "m"}
                        spacingBottom={form.box.spacingBottom || "s"}
                    >
                        <div className="pl-3 pt-3">
                            <Typography
                                color={form.title.color || "main"}
                                variant={form.title.variant || "h2"}
                            >
                                {form.title.text || "Оплата"}
                            </Typography>
                        </div>
                        <div className="p-3">
                            <InputEmail
                                label={form.email.label || "Email"}
                                color={form.email.color || "primary1"}
                                shape={form.email.shape || "geometric"}
                                style={{width: '100%'}}
                            ></InputEmail>
                        </div>
                        <div className="p-3">
                            <InputAmount
                                label={form.amount.label || '1000'}
                                color={form.amount.color || "primary1"}
                                shape={form.amount.shape || "geometric"}
                                style={{width: '100%'}}
                            ></InputAmount>
                        </div>
                        <div className="p-3">
                            <Button
                                color={form.btn.color || "primary1"}
                                shape={form.amount.shape || "rounded"}
                            >{form.btn.text || "Оплатить"}</Button>
                        </div>
                    </Box>
                </div>

                <div className="col-6 p-3">
                    <Box
                        cornersRounding={box.box.cornersRounding || "m"}
                        shadow={box.box.shadow || "bottomM"}
                        spacing={box.box.spacing || "m"}
                        spacingBottom={box.box.spacingBottom || "s"}
                    >
                        <div className="pl-3 pt-3">
                            <Typography
                                color={box.title.color || "main"}
                                variant={box.title.variant || "h2"}
                            >
                                {box.title.text || "Заголовок"}
                            </Typography>
                        </div>
                        <div className="pl-3 pt-3">
                            <Typography
                                color={box.content.color || "main"}
                                variant={box.content.variant || "caption"}
                            >
                                {box.content.text || ""}
                            </Typography>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default PaymentBlock;

if (document.getElementById('PaymentBlock')) {
    ReactDOM.render(
        <PaymentBlock
            title={{
                text: "Главный заголовок",
                color: "main",
                variant: "mega"
            }}
            subtitle={{
                text: "Подзоголовок",
                color: "main",
                variant: "h2"
            }}
            form={{
                box: {
                    cornersRounding: "m",
                    shadow: "bottomM",
                    spacing: "m",
                    spacingBottom: "s"
                },
                title: {
                    text: "Оплата",
                    color: "main",
                    variant: "h2"
                },
                email: {
                    label: 'Email',
                    color: 'primary1',
                    shape: 'geometric'
                },
                amount: {
                    label: 'Сумма',
                    color: 'primary1',
                    shape: 'geometric'
                },
                btn: {
                    text: 'Оплата',
                    color: 'primary1',
                    shape: 'rounded'
                }
            }}
            box={{
                box: {
                    cornersRounding: "m",
                    shadow: "bottomM",
                    spacing: "m",
                    spacingBottom: "s"
                },
                title: {
                    text: "Заголовок",
                    color: "main",
                    variant: "h2"
                },
                content: {
                    color: "main",
                    variant: "caption",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
                }
            }}
        ></PaymentBlock>, document.getElementById('PaymentBlock'));
}
