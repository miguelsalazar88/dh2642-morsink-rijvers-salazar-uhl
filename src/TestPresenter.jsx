import { observer } from "mobx-react-lite";
import TestView from "./views/TestView";

export default
observer(
    function TestPresenter(props){
        return(
            <TestView   dietLabelOptions={props.model.dietLabelOptions}
                        healthLabelOptions={props.model.healthLabelOptions}
                        mealTypeOptions={props.model.mealTypeOptions}
                        dishTypeOptions={props.model.dishTypeOptions}></TestView>
        )
    }
)