import React from 'react'
import "./About.css"
import about1 from "../../assets/about-1.jpg"
import about2 from "../../assets/about-2.jpg"

function About() {
    return (
        <div className="about">
            <h1>About</h1>
            <div className="card-wrapper">

                <div className="card">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src={about1} alt="" className="card-img" />
                        </div>
                    </div>
                    <div className="card-content">
                        <h2 className="name">
                            devid hell

                            <p>
                                Founder
                            </p>
                        </h2>

                        <p className="description">
                            Let me introduce you to the amazing person who started it all – the founder
                            of our tattoo studio. They're a true tattoo enthusiast with a burning passion
                            for art and self-expression. They've poured their heart and soul into creating
                            a space where creativity flourishes and incredible tattoos come to life. With
                            their artistic vision and dedication, they've assembled a team of talented
                            artists who share their passion. Together, they're making waves in the tattoo
                            world, one stunning design at a time. So come on over and experience the magic
                            that our founder and their team have created!
                        </p>
                        <button className="button">View more</button>
                    </div>
                </div>

                <div className="card">
                    <div className="image-content">
                        <span className="overlay"></span>

                        <div className="card-image">
                            <img src={about2} alt="" className="card-img" />
                        </div>
                    </div>
                    <div className="card-content">
                        <h2 className="name">
                            Tim carter

                            <p>
                                Tattoo Designer
                            </p>
                        </h2>
                        <p className="description">
                            They are a true artist,
                            with a passion for creating unique and personalized tattoo designs. With their
                            creative flair and attention to detail, they bring your ideas to life in the
                            most beautiful and meaningful ways. Whether you're looking for a small and
                            delicate design or a bold and intricate masterpiece, our tattoo designer will
                            work closely with you to ensure your vision becomes a reality. They understand
                            that a tattoo is not just a piece of art, but a reflection of your individuality
                            and story. So get ready to collaborate with our talented tattoo designer and let
                            them create a design that you'll cherish forever.
                        </p>
                        <button className="button">View more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About