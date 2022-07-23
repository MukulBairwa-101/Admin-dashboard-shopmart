import React,{useEffect,useContext,useState} from 'react';
import {BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

// components
import Landingpage from './pages/Landingpage';
import Dashboard  from "./Components/Dashboard";
import Users from "./pages/Users";
import Auth from "./pages/Auth";
import {AppContext} from "./Context/AppContext";


// assets
import './App.css';
import "./pages/auth.css";
import "./Components/PagesComponents/users/users.css";

function App() {

  const appContext = useContext(AppContext);

  const {adminUser,isLoggedIn} = appContext;
  const [logStatus,setLogStatus]=useState({}); 
  let session = {}
  useEffect(()=>{
    if(!localStorage.getItem('Admin')){
      localStorage.setItem('Admin',JSON.stringify(adminUser));
    }
    if(!sessionStorage.getItem('LOGGEDIN-SESSION'))
    {
      sessionStorage.setItem('LOGGEDIN-SESSION',JSON.stringify(isLoggedIn));
    }
    else {

      let session =JSON.parse(sessionStorage.getItem('LOGGEDIN-SESSION'));
      // console.log(session,isLoggedIn);
      // if(session == isLoggedIn){
      //   alert('yes ... you are')
        
      // }
      setLogStatus(session);
    }
    
  },[])

  // console.log(logStatus)

  return (
    <div className="App">
   
      <Router>
        {/* {window.location.pathname === "/" ?null :<Dashboard />  } */}
             
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/admin/signin" element={<Auth />} />
          <Route path="/admin/dashboard" element={ <Dashboard />} />
          <Route path="/admin/users" element={ <Dashboard />} />
          <Route path="/admin/users/adduser" element={ <Dashboard />} />
          <Route path="/admin/products" element={ <Dashboard />} />
          <Route path="/admin/products/addproduct" element={ <Dashboard />} />
          {/* <Route path="/admin/dashboard" element={logStatus.status ? <Dashboard /> : <Navigate to="/admin/signin" /> } /> */}
          {/* <Route path="/admin/users" element={logStatus.status ? <Dashboard /> : <Navigate to="/admin/signin" /> } /> */}
          {/* <Route path="/admin/users/adduser" element={logStatus.status ? <Dashboard /> :<Navigate to="/admin/signin" />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;



