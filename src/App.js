import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import List from "./containers/List";
import Login from "./containers/Login";
import Qrscan from "./containers/Qrscan";

function App() {

  const [conected,SetConected] = useState(false);

  const access = (state) => {
    SetConected(state);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={conected ? <Home />  : <Login access={access}/>} />
          <Route path="/Inicio" exact element={<Home />} />
          <Route path="/QrScan" exact element={<Qrscan />} />
          <Route path="/Listado" exact element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
