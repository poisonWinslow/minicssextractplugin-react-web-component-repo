import React from "react";
import ReactDOM from "react-dom";
import * as styles from "./App.module.scss";

const App = () => {
  const shadowRoot = document.querySelector("custom-web-component")?.shadowRoot;
  const reactRoot = shadowRoot?.getElementById("react-root");

  if (reactRoot) {
    ReactDOM.render(
      <React.StrictMode>
        <div id="App">
          <h1 className={styles.someStyle}>This should be red</h1>
          <p>This should be green</p>
        </div>
      </React.StrictMode>,
      reactRoot
    );
  }
};

export default App;
