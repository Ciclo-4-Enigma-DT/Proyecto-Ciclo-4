import "../Styles/header.css"
import { FaCartPlus } from "react-icons/fa"


export function Header() {
    return (
        <>
            <body>
                <div>
                    <button><FaCartPlus /></button>
                    <h3 id="nombre"> Ohm'Site</h3>
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