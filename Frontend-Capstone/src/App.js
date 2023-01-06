import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Confirmation from "./pages/Confirmation";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/booking' element={<Booking />}></Route>
          <Route path='/confirmation' element={<Confirmation />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
