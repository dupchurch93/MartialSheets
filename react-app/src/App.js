import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./components/AboutPage/AboutPage"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Footer from "./components/Footer/Footer"
import { authenticate } from "./services/auth";
import { useDispatch } from "react-redux"
import { restoreUserThunk } from "./store/session"
import SplashPageMain from "./components/SplashPage/SplashPageMain";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        dispatch(restoreUserThunk())
      }
      setLoaded(true);
    })();
  }, [dispatch]);

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
        <div className="pageItem flex justify-center mt-10">
          <Switch>
            <Route path="/login" exact={true}>
              <LoginForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>
            <Route path="/sign-up" exact={true}>
              <SignUpForm
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
            </Route>
            <Route path="/about">
              <AboutPage></AboutPage>
            </Route>
            <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
              <SplashPageMain></SplashPageMain>
            </ProtectedRoute>
            <Route>
              <h1>Resource Not Found. Please Try Again.</h1>
            </Route>
          </Switch>
        </div>
        <Footer className="pageItem"></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
