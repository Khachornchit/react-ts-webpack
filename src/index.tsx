import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { number } from "prop-types";
import Favicon from "react-favicon";

export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <div>
      <Favicon url="http://oflisback.github.io/react-favicon/public/img/react.ico" />
      <h1>Todo List</h1>
      <form>
          <input type="text" required />
          <button type="submit" >Add Todo</button>
      </form>
    </div>
  );
}

const root = document.getElementById("app-root");

ReactDOM.render(<App />, root);
