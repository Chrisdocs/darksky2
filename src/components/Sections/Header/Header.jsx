import React from "react"
import "./styles.css";


function Header() {
    return (
        <div>
            <section id="main-nav">
                <nav>
                    <div>
                        <img id="header-icon"></img> 
                        <a className="nav-link"><p>World Map</p></a>
                        <a className="nav-link"><p>About Valoria</p></a>
                        <a className="nav-link"><p> DM Notes</p></a>
                    </div>
                    <div>
                        <a><p>Login</p></a>
                        <a><p>My Notes</p></a>
                    </div>
                </nav>
            </section>
        </div>
    );
}

export default Header;