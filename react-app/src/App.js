import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SplashPageMain from "./components/SplashPage/SplashPageMain"
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./services/auth";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <div className="pageContainer grid grid-rows-3">
        <div className="pageItem">
          <NavBar
            setAuthenticated={setAuthenticated}
            authenticated={authenticated}
          />
        </div>
        <div className="pageItem">
          <Switch>
            <Route path="/" exact={true} authenticated={authenticated} setAuthenticated={setAuthenticated}>
              <SplashPageMain></SplashPageMain>
            </Route>
            <Route>Looks like you have gotten lost in the woods traveler. Please try another path.</Route>
          </Switch>
        </div>
        <div className="pageItem">Footer Here</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
