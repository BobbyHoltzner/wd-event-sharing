/// <reference path="../typings/index.d.ts" />
import * as React from "react";
import {render} from "react-dom";
import {MetaType} from "./datatypes/index";
import {getMeta} from "./helpers/index";
import Facebook from "./Facebook";
import "./css/styles.css";

type State = {
    meta: MetaType
}

export default class App extends React.Component<{}, State> {
    constructor() {
        super();
        this.state = {
            meta: getMeta()
        };
    }
    render() {
        return (
            <div id="event-sharing-buttons">
                <Facebook meta={this.state.meta}/>
            </div>
        );
    }
}

render(<App />, document.getElementById("event-sharing"));