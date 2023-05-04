
import './App.css';
import Header from './partials/header';
//import Modal from "./partials/modal";
import BodyInfo1 from "./partials/body_info_1";
import BodyInfo2 from "./partials/body_info_2";
import LastOrders from "./partials/lastOrders_main";
import OrangeSetTask from "./partials/orangeSetTask";


function App() {
  return (
    <div className="App">
      <Header/>
      <BodyInfo1/>
      <BodyInfo2/>
      <LastOrders/>
      <OrangeSetTask/>
    </div>
  );
}

export default App;
