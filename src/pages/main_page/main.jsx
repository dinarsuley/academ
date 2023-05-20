import '../../App.css';
import Header from '../../partials/header';
import BodyInfo1 from "./body_info_1";
import BodyInfo2 from "./body_info_2";
import LastOrders from "./lastOrders_main";
import OrangeSetTask from "./orangeSetTask";

const Main = () =>{
    return(
        <div>
            <Header/>
            <BodyInfo1/>
            <BodyInfo2/>
            <LastOrders/>
            <OrangeSetTask/>
        </div>
    )
}

export default Main;