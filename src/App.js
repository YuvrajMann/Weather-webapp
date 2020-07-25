import React from "react";
import "./App.css";
import Main from "./Components/MainComponent.js";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Main></Main>
        </header>
      </div>
    </Provider>
  );
}

export default App;
