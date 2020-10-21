import React from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Body } from "./components/Card/Body/Body";
import { FooterSocial } from "./components/Card/FooterSocial/FooterSocial";
import { ButtonSocial } from "./components/Buttons/ButtonSocial";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card name="Jose">
          <Body texts={["Párrafo 1", "Párrafo 2"]}></Body>
        </Card>
        <FooterSocial></FooterSocial>
        <ButtonSocial icon="linkedin"></ButtonSocial>
      </header>
    </div>
  );
}

export default App;
