export default function Intro({ setMostrar }) {
  return (
    <div className="intro">
      <h2 className="intro--text">
        Benvinguts al primer projecte React, on coneixerem al Luis, el nostre
        heroi interplanetari i ens explicarà algunes anècdotes de les seves
        extraordinàries missions.
      </h2>
      <button className="intro--button" onClick={() => setMostrar(true)}>
        Començar
      </button>
    </div>
  );
}