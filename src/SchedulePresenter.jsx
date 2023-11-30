import { observer } from "mobx-react-lite";
import ScheduleView from "./views/ScheduleView.jsx";

export default

observer(
    function SchedulePresenter(props){
        return(
            <ScheduleView> </ScheduleView>
        )
    }
)