import './App.css';
import Escena from './components/escena/Escena';
import textos from './textos';

function App() {
  const textItems = textos.map (escena => {
    return <Escena texto = {escena.texto} />
  })
  return (    
        <div>
          {textItems}
        </div>    
  );
}

export default App;
