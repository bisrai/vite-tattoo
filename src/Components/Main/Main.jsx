import React from 'react'
import "./Main.css"
import main from "../../assets/main.jpg";

function Main() {
    return (
        <div className="container"  style={{ backgroundImage: `url("${main}")` }}>
            <section className="main">
                <h1>CUSTOM TATTOO <br />STUDIO</h1>
                <p>Unleash your creativity and wear your story on your skin.
                    <br />Find your perfect tattoo today!
                </p>
                <a href="#">Make an Appointment!</a>
            </section>
        </div>

    )
}

export default Main