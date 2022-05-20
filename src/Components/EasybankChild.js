import React from "react"
import easy from "../Styling/EasybankChild.module.css"

export default function EasybankChild (props) {
    return (
        <div className = {easy.container}>
           <img alt = "" src = {props.image}/>
           <h4>{props.heading}</h4>
           <span>{props.text}</span>
        </div>
    )
}