
import './App.css';
import Footer from "./Components/Footer"


import Nav from './Components/Navbar';

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
