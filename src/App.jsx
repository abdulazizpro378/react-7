import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/layout/Layout'

import CardP from "./pages/CardP";
import HomeP from "./pages/HomeP";

function App() {
  return (
  <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomeP />} />
          <Route path="cart" element={<CardP />} />
   
        </Route>

      </Routes>
    </BrowserRouter>
 
  </div>
  );
}

export default App;
