import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import AboutPage from "./components/AboutPage/AboutPage"
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Footer from "./components/Footer/Footer";
import CharacterPage from "./components/CharacterPage/CharacterPage";
import CharacterCreate from "./components/CharacterCreate/CharacterCreate"
import { useDispatch } from "react-redux"
import { restoreUserThunk } from "./store/session"
import { loadCharactersThunk } from "./store/character"
import SplashPageMain from "./components/SplashPage/SplashPageMain";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      const user = await dispatch(restoreUserThunk())
      if (!(user.id === undefined)) {
        setAuthenticated(true)
        await dispatch(loadCharactersThunk())
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
        <div className="pageItem mx-10 flex justify-center mt-10">
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
            <ProtectedRoute path="/characters/:characterId" exact={true} authenticated={authenticated}>
              <CharacterPage></CharacterPage>
            </ProtectedRoute>
            <ProtectedRoute path="/characters/create" exact={true} authenticated={authenticated}>
              <CharacterCreate></CharacterCreate>
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
