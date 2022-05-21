import React from "react"
import headerCSS from "../Styling/Header.module.css"
import logo from "../Images/logo.svg"
import hamburgerImg from "../Images/icon-hamburger.svg"
import close from "../Images/icon-close.svg"



export default function Header () {

    const [navImg, setNavImg] = React.useState(hamburgerImg);

    function toggleNavImage () {
        setNavImg(currImg => currImg === hamburgerImg? close : hamburgerImg)
    }

    function closeMobileNav () {
        setNavImg(hamburgerImg);
    }
    
    return (
        <section className = {headerCSS.container} >
           <div tabindex = "1">
              <img src = {logo} alt = ""  className = {headerCSS.logo}/>
           </div>

           <nav>
              <ul 
              className = {navImg === close? `${headerCSS.navigation__open} ${headerCSS.navigation__mobile}`: `${headerCSS.navigation__open}`}

              >
                <li onClick = {closeMobileNav}  ><a href = "#">Home</a></li>
                <li onClick = {closeMobileNav}  ><a href = "#" >About</a></li>
                <li onClick = {closeMobileNav}  ><a href = "#" >Contact</a></li>
                <li onClick = {closeMobileNav}  ><a href = "#" >Blog</a></li>
                <li onClick = {closeMobileNav} ><a href = "#" >Careers</a></li>
              </ul>
           </nav>

           <button className = {headerCSS.btn__invite}>Request Invite</button>

           <div className = {headerCSS.hamburger} >
              <img 
              src = {navImg}  
              alt = "" 
              onClick = {toggleNavImage}/>  
           </div>

        </section>
    )
}