import React from "react";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import { MenuPage, CardPage, Credits } from "./pages/";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/game/gameActions";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <section className='desktop_wrapper'>
      <div className='App'>
        <AnimatePresence exitBeforeEnter={false}>
          <Switch location={location} key={location.pathname}>
            <Route path='/card/:cardId'>
              <CardPage />
            </Route>
            <Route path='/credits'>
              <Credits />
            </Route>
            <Route exact path='/'>
              <MenuPage />
            </Route>
          </Switch>
        </AnimatePresence>
      </div>

      <aside className='desktop_wrapper__sidebar'>
        <img className='desktop_wrapper__logo' src='img/logo.svg' alt='' />
        <img
          className='desktop_wrapper__pencil'
          src='img/yoann-siloine-dyaxQ-aoGWY-unsplash_gedreht.jpg'
          alt=''
        />
      </aside>
    </section>
  );
}

export default App;
