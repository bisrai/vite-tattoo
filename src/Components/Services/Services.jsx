import React from 'react'
import "./Services.css"
import services1 from "../../assets/services-1.jpg"
import services2 from "../../assets/services-2.jpg"
import services3 from "../../assets/services-3.jpg"
import services4 from "../../assets/services-4.jpg"

function Services() {
    return (
        <div className="servicesSection">
            <h1>Our Services</h1>
            <div className="service">
                <div className="serviceCard">
                    <div className="serviceImg">
                        <img src={services1} alt="" />
                    </div>
                    <div className="serviceContent">
                        <h2 className="serviceTitle">
                            Tattoo and Piercing Services
                        </h2>

                        <p>
                            We have a great pool of artists and tattoo masters! Some of them hold an
                            experience of one too many years.
                        </p>

                    </div>
                </div>

                <div className="serviceCard">
                    <div className=" serviceImg">
                        <img src={services2} alt="" />
                    </div>
                    <div className="serviceContent">
                        <h2 className="serviceTitle">
                            Tattoo Aftercare Services
                        </h2>
                        <p>
                            These are very significant times for your ink. We understand how
                            essential it is for your tattoo to last.
                        </p>

                    </div>
                </div>

                <div className="serviceCard">
                    <div className=" serviceImg">
                        <img src={services3} alt="" />
                    </div>
                    <div className="serviceContent">
                        <h2 className="serviceTitle">
                            Cosmetic Tattoo Services
                        </h2>
                        <p>
                            Cosmetic tattooing is able to enhance the features of the face
                            such as the eyebrows, lips, etc.
                        </p>

                    </div>
                </div>

                <div className="serviceCard">
                    <div className="serviceImg" >
                        <img src={services4} alt="" />
                    </div>
                    <div className="serviceContent">
                        <h2 className="serviceTitle">
                            Tattoo Removal Services
                        </h2>
                        <p>
                            We put tattoo removal into the hands of trained and certified
                            tattoo artists who know their job well.
                        </p>

                    </div>
                </div>

            </div >
        </div >

    )
}

export default Services