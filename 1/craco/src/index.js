import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./example";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// 소스를 저장하면 테스트 중이던 페이지를 리로드하지 않고 바로 적용된다!
