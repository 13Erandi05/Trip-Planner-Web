import React , {useEffect} from "react";
import '../Components/Main/main.css';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img1 from '../Pages/images/img-1.jpg'
import img2 from '../Pages/images/img-2.jpg'
import img3 from '../Pages/images/img-3.jpg'
import img4 from '../Pages/images/img-4.jpg'
import img5 from '../Pages/images/img-5.jpg'
import img6 from '../Pages/images/img-6.jpg'
import img7 from '../Pages/images/img-7.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
    id: 1,
    imgSrc: img1,
    category: 'Historical',
    pid: '01',
    description:"Visit all ancient places built in differnet kingdoms!"
    },
    {
        id: 2,
        imgSrc: img2,
        category: 'Sports',
        pid: '02',
        description:"Spend your vacation with your favourite sports!"
    },
    {
        id: 3,
        imgSrc: img3,
        category: 'Theropatic',
        pid: '03',
        description:"Gain a peaceful mind in your leasure time!"
    },
    {
        id: 4,
        imgSrc: img4,
        category: 'Leasure',
        pid: '04',
        description:"Spend the vacation with your family!"
    },
    {
        id: 5,
        imgSrc: img5,
        category: 'Pilgrim',
        pid: '05',
        description:"Worship the sacred places!"
    },
    {
        id: 6,
        imgSrc: img6,
        category: 'Sea Tour',
        pid: '06',
        description:"Watch the beuty of dolphins!"
    },
    {
        id: 7,
        imgSrc: img7,
        category: 'Adventure & Relax',
        pid: '07',
        description:"Make your vacation more thrilled!"
    },
]

function Packages() {
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return(
        <div>
            <Navbar></Navbar>
            <section className="main container section">
            <div className="secTitle">
                <h3 data-aos="fade-up" className="title">
                    Our Packages
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id,imgSrc,category,pid,description})=>{
                        return(
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={category}/>
                                </div>

                                <div className="cardInfo">
                                    <h2 className="category">{category}</h2>
                                    <h4 className="pid">{pid}</h4>
                                    <div className="desc">
                                        <p>{description}</p>
                                    </div>

                                    <button className="btn flex">
                                        View More
                                        <HiOutlineClipboardCheck className="icon"/>
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
        <Footer></Footer>
        </div>
    )
}

export default Packages