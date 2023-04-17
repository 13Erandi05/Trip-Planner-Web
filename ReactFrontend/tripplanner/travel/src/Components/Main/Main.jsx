import React, {useEffect}  from "react";
import './main.css';
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img1 from '../../Assets/img(1).jpg'
import img2 from '../../Assets/img(2).jpg'
import img3 from '../../Assets/img(3).jpg'
import img4 from '../../Assets/img(4).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
    id: 1,
    imgSrc: img1,
    destTitle: 'Sigiriya',
    location: 'Mathale',
    grade: 'CULTURAL RELAX',
    fees:'Rs. xxx',
    description: "Sigiriya istruly a spectacular sight to behold. This is one of the most breathtaking natural landmarks with the sheer-sided outcrop of reddish gneiss rising 200 metres above the surrounding plains. "
    },

    {
    id: 2,
    imgSrc: img2,
    destTitle: 'Pinnawala',
    location: 'Kegalle',
    grade: 'WILD LIFE',
    fees:'Rs. xxx',
    description: "En-route visit Pinnawala Elephant Orphanage, home to the world’s largest troupe of captive, tamed and trained elephants."
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Temple of Tooth Relic',
        location: 'Kandy',
        grade: 'PILGRIM',
        fees:'Rs. xxx',
        description: "The Temple of the Sacred Tooth Relic or Sri Dalada Maligawa, is a Buddhist temple in Kandy, Sri Lanka. It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha."
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Ella Rock',
        location: 'Badulla',
        grade: 'ADVENTURE & RELAX',
        fees:'Rs. xxx',
        description: "The Ella Rock Hike in Sri Lanka is a well known spot, with breathtaking views."
    },
]

const Main = () =>{
    
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return(
        <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-up" className="title">
                    Most Visited Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle}/>
                                </div>

                                <div className="cardInfo">
                                    <h4 className="destTitle">{destTitle}</h4>
                                    <span className="continent flex">
                                        <HiOutlineLocationMarker className="icon"/>
                                        <span className="name">{location}</span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>{grade}<small>+1</small></span>
                                        </div>
                                        <div className="price">
                                            <h5>{fees}</h5>
                                        </div>
                                    </div>

                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        DETAILS
                                        <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main