import React from "react";
import ReactDOM from "react-dom/client";

import App from "/App.jsx"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./stateManager/store.jsx";
import BackEndDataCatalog from "./BackEndCatalogs/BackEndDataCatalog.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BackEndDataCatalog>
            <App />{" "}
          </BackEndDataCatalog>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
