import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import the App component
import "./index.css"; // Optional, if you have global styles
import { BrowserRouter } from "react-router-dom"; // Correct import for Routes and Route

import { StoreProvider } from "easy-peasy";    /* StoreProvider (Easy Peasy): Provides a global state to the app using Easy Peasy. */
import store from "./store";                   /*  This is where your global state is defined */


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>  {/* storeProv=Without this, components won’t be able to access the global state.
                                       store={store}> here 1st store is a keyword and 2nd is the store.js */}
      <BrowserRouter>              {/* global state is stored inside the store;Instead of keeping state inside individual components, it's stored in a centralized store. */}
        <App />
      </BrowserRouter>
    </StoreProvider>
  </React.StrictMode>
);
