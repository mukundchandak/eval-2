import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./Routes/Navbar";
import Routes from "./Routes/Routes";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Provider>
     </BrowserRouter>
  );
}

export default App;
