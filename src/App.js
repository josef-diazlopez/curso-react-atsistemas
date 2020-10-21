import React from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Body } from "./components/Card/Body/Body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card name="Jose">
          <Body texts={["Párrafo 1", "Párrafo 2"]}></Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
