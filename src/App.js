import Main from "./pages/main_page/main"
import Library from "./pages/order_library/order_library"
import { Route, Router, BrowserRouter, Routes } from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";
import sorry1 from "./imgs/sorry1.jpg"
import sorry2 from "./imgs/sorry2.jpg"
import "./App.css"

const Error = ()=>{
  return(
      <div className="container">
        <h1>
          ERROR 404
        </h1>
        <h1>
          Не заверстал еще 
        </h1>
        <img src={sorry1} className="error_image"></img>
        <img src={sorry2} className="error_image"></img>
      </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Main />} />
          <Route path="/orders" element={<Library />} />
          <Route path="/*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
