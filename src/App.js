import React, { useState } from "react";
import "./App.css";
import Sidebar from "./Sidebar.js";
import Chat from "./Chat";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login.js";
import { useStateValue } from "./StateProvider";

//import { Switch } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
function App() {
  const [{ user }, dispatch] = useStateValue();
  // const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
