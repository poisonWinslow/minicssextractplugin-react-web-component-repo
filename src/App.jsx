import React from "react";
import * as styles from "./App.module.scss";

const App = () => {
  return (
    <div id="App">
      <h1 className={styles.someStyle}>This should be red</h1>
      <p>This should be green</p>
    </div>
  );
};

export default App;
