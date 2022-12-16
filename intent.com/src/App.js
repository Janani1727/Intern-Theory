
import './App.css';
import Footer from "./Components/Footer"
import BackgroundImage from './Routes/Home';

import Nav from './Components/Navbar';
import Internship from './Routes/Internship';
import AllRoutes from './Routes/AllRoutes';
function App() {
  return (
    <div className="App">
   
      <Nav />
      <AllRoutes />
      <Footer />

     
    </div>
  );
}

export default App;
