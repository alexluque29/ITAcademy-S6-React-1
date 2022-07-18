import "./App.css";
import Escena from "./components/escena/Escena";
import textos from "./textos";
import Intro from "./components/escena/intro";
import { ButStyle } from "./styled";
import { useState } from "react";

function App() {
  const [posicion, setPosicion] = useState(0);
  const [mostrar, setMostrar] = useState(false);
  const textItems = textos.map((escena, index) => {
    const selected = posicion === index;
    return <Escena selected={selected} texto={escena.texto} />;
  });

  function cambiarPosicion(i) {
    setPosicion((prePosition) => {
      if (prePosition + i > textos.length - 1 || prePosition + i < 0)
        return prePosition;
      return prePosition + i;
    });
  }

  function EntrarApp() {
    if (!mostrar) {
      return <Intro setMostrar={setMostrar} />;
    }
    return (
      <div principal>
        <div className="header">
          <ButStyle onClick={() => cambiarPosicion(-1)}>Anterior</ButStyle>
          <ButStyle onClick={() => cambiarPosicion(1)}>Següent</ButStyle>
        </div>
        <div>{textItems}</div>
      </div>
    );
  }

  return (
    <div>
      <EntrarApp />
    </div>
  );
}

export default App;
