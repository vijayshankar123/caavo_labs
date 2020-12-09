import './App.css';
import React from "react"
import {BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Home from './components/Home';
import Navbar from './components/Navbar';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <Router>
      <div>
          <Navbar />
       </div>
       <Switch>
         <Route exact path="/" component={Home} />
       </Switch>
       <ToastContainer position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick />
    </Router>
    
  );
}

export default App;
