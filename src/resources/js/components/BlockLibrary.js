import React from 'react';
import { useState, useCallback, useMemo, memo } from 'react';
import ReactDOM from 'react-dom';


import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { InputText } from '@design-system-rt/rtk-ui-kit';


function BlockLibrary({ text, input_change }) {


    function dragStartHandler(e, ui) {
        switch (e.target.outerText) {
            case "Блок карточек": {
                input_change("CardsBlock");
                break
            }
            case "Футер": {
                input_change("FooterBlock");
                break
            }
            case "Хедер": {
                input_change("HeaderBlock");
                break
            }
            case "Блок оплаты": {
                input_change("PaymentBlock");
                break
            }
        }
    }
    return (

        <div className="block-library">
            <h3 className="text-center mt-3">Библиотека блоков</h3>
            <hr />
            <div
                draggable={true}
                onDragStart={(e, ui) => dragStartHandler(e, ui)}
                className="library-item"
            >
                Блок карточек
            </div>
            <div
                draggable={true}
                onDragStart={(e, ui) => dragStartHandler(e, ui)}
                className="library-item">
                Футер
            </div>
            <div
                draggable={true}
                onDragStart={(e, ui) => dragStartHandler(e, ui)}
                className="library-item">
                Хедер
            </div>
            <div
                draggable={true}
                onDragStart={(e, ui) => dragStartHandler(e, ui)}
                className="library-item">
                Блок оплаты
            </div>


        </div>
    );
}

export default BlockLibrary;


