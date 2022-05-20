import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import SignupFormPage from "./components/SignupFormPage";
import LoginFormModal from "./components/LoginFormModal";
// import Explore from "./components/SplashPage/ExplorePage/Explore";
import Splash from "./components/SplashPage/Splash";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ImageDetails from "./components/ImageDetailsPage/ImageDetails";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/"><Splash isLoaded={isLoaded} /></Route>
          <Route path="/images/:id"><ImageDetails /></Route>
          <Route path="/signup"><SignupFormPage /></Route>
          <Route path="login"><LoginFormModal /></Route>
          <Route path="*"><h2>Page Not Found</h2></Route>
        </Switch>
      )
      }
    </>
  );
}

export default App;
