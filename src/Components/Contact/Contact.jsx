import React from 'react'
import "./Contact.css"

function Contact() {
    return (
        <section className="contact">
            <div className="content">
                <h2>Contact us</h2>
            </div>

            <div className="contact-container">

                <div className="contactForm">
                    <form action="">
                        <h2>Send Message</h2>

                        <div className="inputBox">
                            <input type="text" required />
                            <span>Full Name</span>
                        </div>

                        <div className="inputBox">
                            <input type="text" required />
                            <span>Email</span>
                        </div>

                        <div className="inputBox">
                            <textarea required name="" id=""></textarea>
                            <span>Type your message...</span>
                        </div>

                        <div className="inputBox">
                            <input type="submit" value="send" />
                        </div>
                    </form>
                </div>


                <div className="contactInfo">
                    <div className="box">
                        <div className="icon">
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>123, Main Street, <br />Anytown, ST 12345</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+91 12345 54321</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div class="text">
                            <h3>Email</h3>
                            <p>demo@gmail.com</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <i class="fa-regular fa-clock"></i>
                        </div>
                        <div className="text">
                            <h3>Working Hours</h3>
                            <p>Monday - Friday 9:00 - 9:00 <br />
                                Sunday - 9:00 - 5:00</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Contact