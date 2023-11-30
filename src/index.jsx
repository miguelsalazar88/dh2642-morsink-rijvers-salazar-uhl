import {createRoot} from "react-dom/client";

import model from "./model";
import { observable } from "mobx";

import HomePresenter from "./homePresenter";
import SchedulePresenter from "./SchedulePresenter";
import MoodsPresenter from "./MoodsPresenter";

const reactiveModel = observable(model)

createRoot(document.getElementById('root'))
    .render(
    <div>
        <HomePresenter model={reactiveModel}> </HomePresenter> <br />
        <SchedulePresenter model={reactiveModel}></SchedulePresenter> <br />
        <MoodsPresenter model = {reactiveModel}></MoodsPresenter>
    </div>

    );  