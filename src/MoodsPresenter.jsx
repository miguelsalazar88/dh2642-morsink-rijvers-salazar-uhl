import { observer } from "mobx-react-lite";
import MoodsView from "./views/MoodsView.jsx";

export default

observer(
    function MoodsPresenter(props){
        return(
            <MoodsView> </MoodsView>
        )
    }
)