// import logo from './logo.svg';
// import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'
// import About from './components/About'
import React, { useState } from 'react'

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, SetAlert] = useState(null);
  const showAlert = (msg, type) => {
    SetAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      SetAlert(null)
    }, 1500)

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'gray'
      showAlert('Dark Mode Enable', 'success')
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light Mode Enable', 'success')
    }
  }
  return (
    <>
      {/* <Router> */}

        <Navbar text='Rahul' mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />
        <div className='container'>
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
            {/* </Route> */}

            {/* <Route exact path="/" element={<Textform heading="Analyze" mode={mode} showAlert={showAlert} />}> */}
            <Textform heading="Analyze" mode={mode} showAlert={showAlert}/>
            {/* </Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>


  );
}

export default App;
