import React,{useState}  from "react";
import './navbar.css';
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () =>{
    const [active, setActive] = useState('navBar')

    //function to toggle Navbar
    const showNav = () =>{
        setActive('navBar activeNavbar')
    }

    //function to remove Navbar
    const removeNavbar = () =>{
        setActive('navBar')
    }

    return(
        <section className="navBarSection">
            <header className="header flex">

                <div className="logoDiv">
                <a href="#" className="logo flex">
                <h1><MdOutlineTravelExplore className="icon"/>Trip Planner</h1>
                </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">

                        <li className="navItem">
                            <a href="/" className="navLink">Home</a>
                        </li>

                        <li className="navItem">
                            <a href="/Packages" className="navLink">Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="/About" className="navLink">About</a>
                        </li>

                        <li className="navItem">
                            <a href="/AddPackages" className="navLink">Add Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="/Login" className="navLink">Login</a>
                        </li>

                        <button className="btn">
                            <a href="/BookNow">BOOK NOW</a>
                        </button>
                    </ul>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon"/>
                    </div>
                </div>

                <div onClick={showNav} className="toggleNavbar">
                    <TbGridDots className="icon"/>
                </div>
            </header>
        </section>
    )
}

export default Navbar