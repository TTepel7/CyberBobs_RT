import React from 'react';
import { useState, useCallback, useMemo, memo }  from 'react';
import ReactDOM from 'react-dom';


import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { InputText } from '@design-system-rt/rtk-ui-kit';


function BlockLibrary({ text, input_change }) {


    function dragStartHandler(e, ui){
        switch(e.target.outerText){
            case "CardsBlock":{
                input_change("CardsBlock");
                break
            }
        }
    }
    return (

        <div className="block-library">
            <h3>Библиотека блоков</h3>
            <hr />
            <div
                draggable={true}
                onDragStart={(e,ui) => dragStartHandler(e,ui)}
                className="library-item">
                CardsBlock
            </div>

        </div>
    );
}

export default BlockLibrary;


