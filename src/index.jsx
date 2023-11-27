import {createRoot} from "react-dom/client";

import model from "./model";
import { observable } from "mobx";

import TestPresenter from "./TestPresenter";

const reactiveModel = observable(model)

createRoot(document.getElementById('root'))
    .render(
    <div>
        <TestPresenter model={reactiveModel}></TestPresenter>
    </div>
    );  