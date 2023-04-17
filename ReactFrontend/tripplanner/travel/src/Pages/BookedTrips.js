import React, { Component } from 'react'
import AdminNavbar from './AdminNavbar'
import BookingService from '../Services/BookingService'


var stylingObject = {
    section: {
        padding:"30px",
        margin:"20px"
    }
}

export default class BookedTrips extends Component {ipconfig
    
    constructor(props){
        super(props)
        this.state = {
            trips:[]
        }
    }

componentDidMount(){
    BookingService.getBookedTrips().then((res) =>{
        this.setState({trips: res.data});
    });
}

  render() {
    return (
        <div>
            <AdminNavbar></AdminNavbar>
            <section style={stylingObject.section}>
            <center>
            <br/><br/>
            <h1 className="heading-title">All Booked Trips</h1>
            <br/>
            </center>

            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Telephone Number</th>
                            <th>Address</th>
                            <th>Package ID</th>
                            <th>No of Adults</th>
                            <th>No of childern</th>
                            <th>Arrival Date</th>
                            <th>Leaving Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.trips.map(
                                trip =>
                                <tr key = {trip.id}>
                                    <td>{trip.name}</td>
                                    <td>{trip.email}</td>
                                    <td>{trip.phone}</td>
                                    <td>{trip.address}</td>
                                    <td>{trip.location}</td>
                                    <td>{trip.guestA}</td>
                                    <td>{trip.guestC}</td>
                                    <td>{trip.arrivals}</td>
                                    <td>{trip.leavedate}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </section>
        </div>
    )
  }
}