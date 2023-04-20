import Home from "./components/home/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Mezuniyyet from "./components/mezuniyyet/Mezuniyyet";
import Staj from "./components/staj/Staj";
import SonHesab from "./components/sonhesab/SonHesab";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path={'/'} exact element={<Home />} />
          <Route path='/mezuniyyet' element={<Mezuniyyet />} />
          <Route path='/staj' element={<Staj />} />
          <Route path='/sonhesab' element={<SonHesab />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
