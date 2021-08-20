import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;
import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { Button } from '@design-system-rt/rtk-ui-kit';
if (document.getElementById('example')) {
    ReactDOM.render(<ThemeProvider themeName="light"><Button   onClick={()=>alert('Хана')}>Конец</Button></ThemeProvider>, document.getElementById('example'));
}
