import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./comps/Login";
import Register from "./comps/Register";
import UserProfile from "./comps/UserProfile";
import ResetPass from "./comps/ResetPass";
import ProtectedRoute from "./comps/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      //decode jwt
      const user = jwtDecode(jwt);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {" "}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reset-password" component={ResetPass} />
          <ProtectedRoute path="/" component={UserProfile} />
        </Switch>
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
