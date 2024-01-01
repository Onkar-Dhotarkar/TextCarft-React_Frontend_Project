import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import react, { useState } from 'react';
import Alert from './component/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enable", "success");


    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextCraft" mode={mode} toogleMode={toogleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
    
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze "
              mode={mode} />} ></Route>
          </Routes>

          

          
        </div>

      </BrowserRouter>

    </>
  );
}

export default App;
