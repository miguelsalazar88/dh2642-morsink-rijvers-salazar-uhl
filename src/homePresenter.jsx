import { observer } from "mobx-react-lite";
import HomeView from "./views/HomeView.jsx";

export default

observer(
    function HomePresenter(props){
        return(
            <HomeView> </HomeView>
        )
    }
)