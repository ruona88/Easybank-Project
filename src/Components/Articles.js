import React from "react"
import article from "../Styling/Articles.module.css"
import ArticleChildComponent from "./ArticleChildComponent"
import recievemoney from "../Images/image-currency.jpg"
import treat from "../Images/image-restaurant.jpg"
import airplane from "../Images/image-plane.jpg"
import confetti from "../Images/image-confetti.jpg"

export default function Articles () {
    return (
        <section className = {article.container} >
           <h3>Lastest Articles</h3>
           <div className = {article.child__container}>
              <ArticleChildComponent
               image = {recievemoney}
               writer = {"Claire Robinson"}
               heading = {"Receive money in any currency with no fees"}
               text = {"The world is getting smaller and we are becoming more mobile. So why should you be forced to receive money in a single..."}
               />
               <ArticleChildComponent
               image = {treat}
               writer = {"Wilson Hutton"}
               heading = {"Treat yourself without worrying about money"}
               text = {"Our simple budgeting feature allows you to seperate out your spending and set realistic limits each month. That means you..."}
               />
               <ArticleChildComponent
               image = {airplane}
               writer = {"Wilson Hutton"}
               heading = {"Take your easybank card wherever you go"}
               text = {"We want you to enjoy your travels. This is why we don't charge any fees on purchases while you are abroad. We eill even show you..."}
               />
               <ArticleChildComponent
               image = {confetti}
               writer = {"Wilson Hutton"}
               heading = {"Our invite-only beta accounts are now live"}
               text = {"After a lot of hardwork by the whole team, we are excited to launch our closed beta. It;s easy to request an invite through the site..."}
               />
           </div>
        </section>
    )
}
