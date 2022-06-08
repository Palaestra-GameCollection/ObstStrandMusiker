import "./app.css";

import { applyMiddleware, compose, createStore } from "redux";

import { AppProps } from "next/app";
import { Provider } from "react-redux";
import React from "react";
import createSagaMiddleware from "redux-saga";
import { offline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import { rootReducer } from "../redux/reducer";
import rootSaga from "../redux/sagas";

// import * as serviceWorker from "../serviceWorker";












export default function App({ Component, pageProps }: AppProps) {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    typeof window === "object" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
    offline(offlineConfig)
    // other store enhancers if any
  );

  const store = createStore(rootReducer /* preloadedState, */, {}, enhancer);

  sagaMiddleware.run(rootSaga);
  // serviceWorker.register();

  return (
    <Provider store={store}>
      <section className="desktop_wrapper">
        <div className="App">
          <Component {...pageProps} />
        </div>

        <aside className="desktop_wrapper__sidebar">
          <img className="desktop_wrapper__logo" src="img/logo.svg" alt="" />
          <img
            className="desktop_wrapper__pencil"
            src="img/yoann-siloine-dyaxQ-aoGWY-unsplash_gedreht.jpg"
            alt=""
          />
        </aside>
      </section>
    </Provider>
  );
}
