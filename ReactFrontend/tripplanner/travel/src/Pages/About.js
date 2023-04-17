import React , {useEffect} from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import './style.css';
import aboutimg from "../Pages/images/about-img.jpg"
import pic1 from '../Pages/images/pic-1.png'
import pic2 from "../Pages/images/pic-2.png"
import pic3 from "../Pages/images/pic-3.png"
import pic4 from "../Pages/images/pic-4.png"
import pic5 from "../Pages/images/pic-5.png"
import pic6 from "../Pages/images/pic-6.png"

function About(){
    return(
    <div>
        <Navbar></Navbar>
        <section class="about" style={{margin:"1.5rem"}}>

            <div class="image">
                <img src={aboutimg} alt=""/>
            </div>

            <div class="content">
                <h3>why choose us?</h3>
                <p>Welcome to our Trip Planner website! We are passionate about helping people explore new 
                    destinations, immerse themselves in different cultures, and create unforgettable memories. Our 
                    team of experienced travel experts has curated a range of exciting itineraries to cater to 
                    every type of traveler, whether you're seeking adventure, relaxation, or a bit of both. 
                    We believe that travel is not just about seeing new places, but also about 
                    gaining a deeper understanding of the world and its people. That's why we work with local guides 
                    and support sustainable tourism practices wherever we go. Our goal is to make your travel experience 
                    as seamless and enjoyable as possible, from the moment you start planning your trip until the 
                    moment you return home. So let's start exploring together!</p>
                    <div class="icons-container">
                    <div class="icons">
                        <i class="fas fa-map"></i>
                        <span>top destinations</span>
                    </div>
                    <div class="icons">
                        <i class="fas fa-hand-holding-usd"></i>
                        <span>affordable price</span>
                    </div>
                    <div class="icons">
                        <i class="fas fa-headset"></i>
                        <span>24/7 guide service</span>
                    </div>
                </div>
            </div>

            </section>

            <section class="reviews">

            <h1 class="heading-title"><center>clients reviews </center></h1>

            <div class="swiper reviews-slider">

                <div class="swiper-wrapper flex">

                    <div class="swiper-slide slide">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <p>"I just returned from my trip and it was absolutely amazing! I had the opportunity to 
                            immerse myself in a new culture, try delicious local cuisine, and see breathtaking 
                            sights that I will never forget. The tour guide was knowledgeable and made sure we got the 
                            most out of every experience. I also appreciate that the company supports sustainable tourism 
                            practices. Overall, it was an unforgettable adventure and I can't wait to plan my next 
                            trip with them!"</p>
                        <h3>john deo</h3>
                        <span>traveler</span>
                        <img src={pic1} alt=""/>
                    </div>

                    <div class="swiper-slide slide">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <p>"I just returned from my trip and it was absolutely amazing! I had the opportunity to 
                            immerse myself in a new culture, try delicious local cuisine, and see breathtaking 
                            sights that I will never forget. The tour guide was knowledgeable and made sure we got the 
                            most out of every experience. I also appreciate that the company supports sustainable tourism 
                            practices. Overall, it was an unforgettable adventure and I can't wait to plan my next 
                            trip with them!"</p>
                        <h3>john deo</h3>
                        <span>traveler</span>
                        <img src={pic2} alt=""/>
                    </div>

                    <div class="swiper-slide slide">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <p>"I just returned from my trip and it was absolutely amazing! I had the opportunity to 
                            immerse myself in a new culture, try delicious local cuisine, and see breathtaking 
                            sights that I will never forget. The tour guide was knowledgeable and made sure we got the 
                            most out of every experience. I also appreciate that the company supports sustainable tourism 
                            practices. Overall, it was an unforgettable adventure and I can't wait to plan my next 
                            trip with them!"</p>
                        <h3>john deo</h3>
                        <span>traveler</span>
                        <img src={pic3} alt=""/>
                    </div>

                    <div class="swiper-slide slide">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <p>"I just returned from my trip and it was absolutely amazing! I had the opportunity to 
                            immerse myself in a new culture, try delicious local cuisine, and see breathtaking 
                            sights that I will never forget. The tour guide was knowledgeable and made sure we got the 
                            most out of every experience. I also appreciate that the company supports sustainable tourism 
                            practices. Overall, it was an unforgettable adventure and I can't wait to plan my next 
                            trip with them!"</p>
                        <h3>john deo</h3>
                        <span>traveler</span>
                        <img src={pic4} alt=""/>
                    </div>

                    {/*
                    <div class="swiper-slide slide">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <p>"I just returned from my trip and it was absolutely amazing! I had the opportunity to 
                            immerse myself in a new culture, try delicious local cuisine, and see breathtaking 
                            sights that I will never forget. The tour guide was knowledgeable and made sure we got the 
                            most out of every experience. I also appreciate that the company supports sustainable tourism 
                            practices. Overall, it was an unforgettable adventure and I can't wait to plan my next 
                            trip with them!"</p>
                        <h3>john deo</h3>
                        <span>traveler</span>
                        <img src={pic5} alt=""/>
                    </div>

                    <div class="swiper-slide slide">
                        <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        </div>
                        <p>"I just returned from my trip and it was absolutely amazing! I had the opportunity to 
                            immerse myself in a new culture, try delicious local cuisine, and see breathtaking 
                            sights that I will never forget. The tour guide was knowledgeable and made sure we got the 
                            most out of every experience. I also appreciate that the company supports sustainable tourism 
                            practices. Overall, it was an unforgettable adventure and I can't wait to plan my next 
                            trip with them!"</p>
                        <h3>john deo</h3>
                        <span>traveler</span>
                        <img src={pic6} alt=""/>
                    </div>
                    */}

                </div>

            </div>
        </section>
        <Footer></Footer>
    </div>
    )
}

export default About