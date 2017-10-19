import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./prop-passing/App";
// import App from "./state-lifting/App";
// import App from "./props-state-forking/App";
import App from "./reduxing/App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
