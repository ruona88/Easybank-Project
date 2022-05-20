import React from "react"
import articlechild from "../Styling/ArticleChild.module.css"

export default function ArticleChildComponent (props) {
    return (
        <div className = {articlechild.container}>
           <img alt = "" src = {props.image}/>
           <div className = {articlechild.content} >
               <p className = {articlechild.writer} >By {props.writer}</p>
               <h2>{props.heading}</h2>
               <p className = {articlechild.text} >{props.text}</p>
           </div>
        </div>
    )
}