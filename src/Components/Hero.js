import React from "react"
import mockups from "../Images/image-mockups.png"
import hero from "../Styling/Hero.module.css"

export default function Hero () {
    return (
        <section className = {hero.container}>
            <div className = {hero.text__div} >
                <h1>Next generation <br/>digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be your one-stop-shop for your 
                spending, saving, budgeting, investing, and much more. </p>
                <button>Request Invite</button>
            </div>
            
            <div className = {hero.hero__img__container} >
              <img src = {mockups} alt = "" className = {hero.hero__img}/>
            </div>
        </section>
        
    )
}

