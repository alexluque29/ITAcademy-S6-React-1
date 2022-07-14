import React from "react"
import { Border } from '../../styled';


export default function Escena(props) {

    return (
        <Border selected={props.selected}>
        <p>{props.texto} {props.posicion} </p>
        </Border>
    )
}   