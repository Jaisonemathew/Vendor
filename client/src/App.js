import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter as Router
import Add from './Add';
import Home from './Home';
import Mainhome from './Mainhome';
//import Navbar from './ui-component/Navbar';

import Login from './Login';

function App() {
  return (
    <div>
      
      <Router> {/* Wrap Routes in Router */}
        <Routes>
          <Route exact path='/' element={<Mainhome />} />
          <Route path='Home'
            element={<Home />} />
            <Route path='Add'
            element={<Add />} />
            
        </Routes>
      </Router>
    </div>
  );
}

export default App;