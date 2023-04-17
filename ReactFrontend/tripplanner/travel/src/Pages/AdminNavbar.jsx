import React,{useState}  from "react";
import '../Components/Navbar/navbar.css';
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const AdminNavbar = () =>{
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
                            <a href="/AddedPackages" className="navLink">View All Packages</a>
                        </li>

                        <li className="navItem">
                            <a href="/BookedTrips" className="navLink"><center>View All Booking Details</center></a>
                        </li>

                        <li className="navItem"><center>
                            <a href="/UpdatePackages" className="navLink"><center>Update Packages</center></a>
                            </center>
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

export default AdminNavbar