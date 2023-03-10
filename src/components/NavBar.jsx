import React from "react";

const NavBar = () => {
  return (
    <div className = "navbar__container">
        <header className = "navbar__header">
            
            <nav className = "navbar__info-container">
                <section className = "navbar__logo-container">
                    <img src="images/Diseño_sin_título-removebg-preview.png" alt="logo" />
                    <span>felosct7</span>
                </section>
                <h1>Backend Developer</h1>
                <ul>
                    <li>
                        <a href="">Technologies</a>
                    </li>
                    <li>
                        <a href="">Skills</a>
                    </li>
                    <li>
                        <a href="">Projects</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>

            <div className = "felipao-image__container">
                <img src="images/Felipao.png" alt="author_photo"/>
            </div>

        </header>
    </div>
)
};

export default NavBar;
