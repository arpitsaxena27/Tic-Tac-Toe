import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Grid from "./components/Grid.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
            <div className="flex justify-center items-center flex-col">
                  <h1 className="text-yellow-400 text-7xl mb-12">
                        Tic-Tac-Toe
                  </h1>
                  <Grid num={9}></Grid>
            </div>
      </React.StrictMode>
);
