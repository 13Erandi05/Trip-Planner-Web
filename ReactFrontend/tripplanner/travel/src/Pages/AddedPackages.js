import React, { Component } from 'react'
import AdminNavbar from './AdminNavbar'
import PackageService from '../Services/PackageService'

var stylingObject = {
    section: {
        padding:"30px",
        margin:"20px"
    }
}

export default class AddedPackages extends Component {
    constructor(props){
        super(props)
        this.state = {
            tourpacks:[]
        }
        this.editPackage = this.editPackage.bind(this);
        this.deletePackage = this.deletePackage.bind(this);
    }

    viewPackage(id){
        this.props.history(`/view-employee/${id}`)
    }

    deletePackage(id){
        PackageService.delettePackage(id).then(res => {
            this.setState({tourpacks:this.state.tourpacks.filter(tour => tour.id !== id)});
        });
    }

    editPackage(id){
        this.props.history(`/update-packages/${id}`);
    }

    componentDidMount(){
        PackageService.getAddedPackages().then((res) =>{
            this.setState({tourpacks: res.data});
        });
    }

  render() {
    return (
      <div>
            <AdminNavbar></AdminNavbar>
            <section style={stylingObject.section}>
            <center>
            <br/><br/>
            <h1 className="heading-title">All Packages</h1>
            <br/>
            </center>

            <div className='row'>
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>SiteName</th>
                            <th>City</th>
                            <th>Activities</th>
                            <th>Tickets</th>
                            <th>Hotels</th>
                            <th>Restaurants</th>
                            <th>Guids</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tourpacks.map(
                                tour =>
                                <tr key={tour.id}>
                                    <td>{tour.site_name}</td>
                                    <td>{tour.town}</td>
                                    <td>{tour.activities}</td>
                                    <td>{tour.tickets}</td>
                                    <td>{tour.hotels}</td>
                                    <td>{tour.restaurants}</td>
                                    <td>{tour.guide}</td>
                                    <td>
                                        <button onClick={ ()=> this.editPackage(tour.id)} className='btn btn-info'>Update</button>
                                        <button style={{marginLeft:"10px"}} onClick={ ()=> this.deletePackage(tour.id)} className='btn btn-danger'>Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick={ ()=> this.viewPackage(tour.id)} className='btn btn-info'>View</button>
                                    </td>
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
