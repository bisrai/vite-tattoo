import React from 'react'
import "./Work.css"
import work1 from "../../assets/work-1.jpg"
import work2 from "../../assets/work-2.jpg"
import work3 from "../../assets/work-3.jpg"
import work4 from "../../assets/work-4.jpg"
import work5 from "../../assets/work-5.jpg"
import work6 from "../../assets/work-6.jpg"

function Work() {
    return (
        <div className="work">
            <h1>OUR WORK</h1><br />
            <div className="work-cards">
                <img src={work1} alt="" />
                <img src={work2} alt="" />
                <img src={work3} alt="" />
                <img src={work4} alt="" />
                <img src={work5} alt="" />
                <img src={work6} alt="" />
            </div>
        </div>
    )
}

export default Work