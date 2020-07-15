import React from "react";
import "./App.css";
// import { AnimatePresence } from "framer-motion";
import { useLocation, withRouter } from "react-router-dom";
import { MenuPage, CardPage, Credits } from "./pages/";
import { useDispatch } from "react-redux";
import { fetchData } from "./redux/game/gameActions";
import {
  AnimatedRoutes,
  RouteTransition,
} from "./components/RoutingTransition/RoutingTransition";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <section className='desktop_wrapper'>
      <div className='App'>
        <AnimatedRoutes exitBeforeEnter initial={false}>
          <RouteTransition exact path='/card/:cardId'>
            <CardPage />
          </RouteTransition>
          <RouteTransition path='/credits'>
            <Credits />
          </RouteTransition>
          <RouteTransition exact path='/'>
            <MenuPage />
          </RouteTransition>
        </AnimatedRoutes>
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

export default withRouter(App);
