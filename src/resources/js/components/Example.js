import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from '@design-system-rt/rtk-ui-kit';
import { Button, InputText, SettingsAdjust } from '@design-system-rt/rtk-ui-kit';
class ToolBar extends React.Component {
    render() {
        return (
            <div className="tool-bar">
                <p>Test title</p>
            </div>
        )
    }
}

class BlocksLibrary extends React.Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

class PropsBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputLabel: ""
        }
    }

    render() {
        return (

            <div className="props-bar">
                <InputText
                    label="Label"
                    icon={<SettingsAdjust />}
                    value={this.state.inputLabel}
                    onBlur={function noRefCheck() { }}
                    onChange={() => {
                        this.props.updateData(this.state.inputLabel)
                        console.log("done")
                    }}
                    onClickIcon={function noRefCheck() { }}
                    onFocus={function noRefCheck() { }}
                    onInputClick={function noRefCheck() { }}
                    onInputKeyDown={function noRefCheck() { }}
                    onInvalid={function noRefCheck() { }}
                />
            </div>
        )
    }
}

class WorkArea extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonLabel: ""
        }
    }

    updateData = (value) => {
        this.setState({ buttonLabel: value })
    }

    render() {
        const label = this.state.buttonLabel
        return (
            <div>
                <Button color="primary1">{label}</Button>
            </div>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(
        <ThemeProvider themeName="light">
            <WorkArea></WorkArea>
            <PropsBar></PropsBar>
        </ThemeProvider>, document.getElementById('example'));
}
