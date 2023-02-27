import Home from "./home/Home";
import { HashRouter, Routes, Route } from "react-router-dom";
import Mezuniyyet from "./mezuniyyet/Mezuniyyet";
import Staj from "./staj/Staj";

function App() {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path={'/'} exact element={<Home />} />
          <Route path='/mezuniyyet' element={<Mezuniyyet />} />
          <Route path='/staj' element={<Staj />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
