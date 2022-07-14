import "./App.css";
import Escena from "./components/escena/Escena";
import textos from "./textos";
import { ButStyle } from "./styled";
import { useState } from "react";

function App() {
  const [posicion, setPosicion] = useState(0);
  const textItems = textos.map((escena, index) => {
    const selected = posicion === index
    return <Escena selected={selected} texto={escena.texto} />;
  }); 

    function cambiarPosicion(i) {
      setPosicion((prePosition) => {
        if (prePosition + i > textos.length -1 || prePosition + i < 0) return prePosition;
        return prePosition + i;
      });
    }
  
  return (
    <div>
      <div className="header">
        <ButStyle onClick={()=>cambiarPosicion(-1)}>Anterior</ButStyle>
        <ButStyle onClick={()=>cambiarPosicion(1)}>Següent</ButStyle>
      </div>
      <div>{textItems}</div>
    </div>
  );
}

export default App;
