import './App.css';
import About from './components/About';
import Navabar from './components/Navabar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    mode === 'light' ? setmode('dark') : setmode('light')
    showAlert(`${mode === 'light' ? 'dark' : 'light'} mode has been enabled`, "success")
  }

  return (
    <>
      <Router>
        <Navabar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
