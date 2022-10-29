import "../Styles/header.css"
import { FaCartPlus } from "react-icons/fa"
import { RiOmega } from "react-icons/ri"


export function Header() {
    return (
        <>
            <body>
                <div id="divHeader">
                    <button id="cart"><FaCartPlus /></button>
                    <h3 id="nombre"> Ohm'Site</h3>
                    <button id="omega"><RiOmega /></button>
                    <nav class="navMenu">
                        <a href="#">Home</a>
                        <a href="#">Blog</a>
                        <a href="#">Work</a>
                        <a href="#">About</a>
                        <div class="dot"></div>
                    </nav>
                </div>
            </body>
        </>
    )
}