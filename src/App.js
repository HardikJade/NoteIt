import React from "react";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { Navbar} from "./components/Navbar";
import { Home} from "./components/Home";
import { About} from "./components/About";
import NoteState from "./context/Notes/NoteState";
import { Modal } from "./components/Modal";
import ModalState from "./context/Modal/ModalState";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";
function App() {
  return (
    <div className="App">
        <NoteState>
          <ModalState>
          <Router>
            <Navbar/>
              <div className="container">
                <Modal/>
                <Switch>
                  <Route exact path="/">
                    <Home/>
                  </Route>
                  <Route exact path="/about"><About /></Route>
                  <Route exact path="/login">
                    <Login/> 
                  </Route>
                  <Route exact path="/sign-up"><SignUp /></Route>
                </Switch>
              </div>
          </Router>
          </ModalState>
        </NoteState>
      </div>
  );
}

export default App;
