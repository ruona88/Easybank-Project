import React from "react"
import EasybankChild from "./EasybankChild"
import easybank from "../Styling/Easybank.module.css"
import api from "../Images/icon-api.svg"
import online from "../Images/icon-online.svg"
import budget from "../Images/icon-budgeting.svg"
import fast from "../Images/icon-onboarding.svg"

export default function Easybank () {
    return (
        <section className = {easybank.container}>
           <h1>Why choose Easybank?</h1>
           <p>
               We leverage Open Banking to turn your bank account into your financial hub.
               <span>Control your finances like never before</span>
            </p>
            <div>
               <EasybankChild 
                  image = {online}
                  heading = {"Online Banking"}
                  text = {"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"}
               />

               <EasybankChild 
                  image = {budget}
                  heading = {"Simple Budgeting"}
                  text = {"See excatly where your money goes each month. Receive notificatiosn when you are close to hitting your limites"}
               />

               <EasybankChild 
                  image = {fast}
                  heading = {"Fast Onboarding"}
                  text = {"We don't do branches. Open your account in minutes online and start taking control of your finnces right away"}
               />

               <EasybankChild 
                  image = {fast}
                  heading = {"Open API"}
                  text = {"Manager your savings, investments, pension and uch more from one account. Tracking your money has never been easier"}
               />
            </div>
        </section>
    )
}
