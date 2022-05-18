import React from "react"
import mockups from "../Images/image-mockups.png"
import hero from "../Styling/Hero.module.css"

export default function Hero () {
    return (
        <section className = {hero.section}>
            <div>
                <h1>Next generation <br/>digital banking</h1>
                <p>Take your financial life online. Your Easybank account will be your one-stop-shop for your 
                spending, saving, budgeting, investing, and much more. </p>
                <button>Request Invite</button>
            </div>
            <div>
               <div>
                  <img src = {mockups} alt = "" />
               </div>
            </div>
        </section>
        
    )
}
