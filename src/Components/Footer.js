import React from "react"
import logo from '../Images/logo.svg'
import {ReactComponent as IconLogo} from '../Images/logo.svg'
import facebook from '../Images/icon-facebook.svg'
import youtube from '../Images/icon-youtube.svg'
import instagram from '../Images/icon-instagram.svg'
import twitter from '../Images/icon-twitter.svg'
import pinterest from '../Images/icon-pinterest.svg'
import footer from "../Styling/Footer.module.css"

export default function Footer () {
    return (
        <section className = {footer.footer__container}>
           <div className = {footer.footer__logo__SM} >
              <IconLogo  className = {footer.footer__logo} alt = ""/>
              <div className = {footer.footer__SM} >
                <img src = {facebook} alt = "" title = "facebook"/>
                <img src = {youtube} alt = "" title = "youtube"/>
                <img src = {twitter} alt = "" title = "twitter"/>
                <img src = {pinterest} alt = "" title = "pinterest"/>
                <img src = {instagram} alt = "" title = "instagram"/>
              </div>
            </div>

            <div className = {footer.footer__navigation} >
              <nav>
                <ul>
                  <li><a href = "#">About Us</a></li>
                  <li><a href = "#" >Contact</a></li>
                  <li><a href = "#" >Blog</a></li>
                </ul>
              </nav>
              <nav>
                <ul>
                   <li><a href = "#">Careers</a></li>
                   <li><a href = "#">Support</a></li>
                   <li><a href = "#">Privacy Policy</a></li>
                </ul>
              </nav>
            </div>
            
            <div className = {footer.footer__copyrights} >
             <button>Request Invite</button>
             <span>&copy; Easybank. All rights reserved.</span>
            </div>
        </section>
    )
}
