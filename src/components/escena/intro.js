import React from "react"

export default function Intro(props) {
    return (
        <div className="intro">
            <h2 className="intro--text">Benvinguts al primer projecte React, on coneixerem al nostre heroi interplanetari i ens explicarà algunes anècdotes de les seves extraordinàries missions.</h2>
            <button className="intro--button"onClick={() => props.setMostrar(true)}>Començar</button>
        </div>
    )
}   