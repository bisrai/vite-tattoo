import React from 'react'
import "./Footer.css"

function Footer() {
    return (

        <div className="footer">
            <section className="footerInfo">
                © ALL RIGHTS RESERVED. 2024 Amandeep
            </section>
            <section className="socialIcons">
                <a href=""><i class="fa-brands fa-instagram"></i></a>
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-twitter"></i></a>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
                <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
            </section>
        </div>
    )
}

export default Footer