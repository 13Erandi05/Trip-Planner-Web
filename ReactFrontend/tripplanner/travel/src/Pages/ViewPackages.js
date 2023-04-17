import React, { Component } from 'react'
import AdminNavbar from './AdminNavbar'
import PackageService from '../Services/PackageService'

export default class ViewPackages extends Component {
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            pack : {}
        }
    }

    componentDidMount(){
        PackageService.getPackageById(this.state.id).then( res =>{
            this.setState({pack: res.data});
        })
    }

  render() {
    return (
      <div>
        <AdminNavbar></AdminNavbar>
        <br/><br/>
        <h1 className="heading-title"><center>View Package</center></h1>
        <br />
        <div className='card col-md-6 offset-md-3'>
            <div className="card-body">
                <div className='row'>
                    <label>Site Name</label>
                    <div>{this.state.pack.site_name}</div>
                </div>
                <div className='row'>
                    <label>City</label>
                    <div>{this.state.pack.city}</div>
                </div>
                <div className='row'>
                    <label>Activity</label>
                    <div>{this.state.pack.activity}</div>
                </div>
                <div className='row'>
                    <label>Tickets</label>
                    <div>{this.state.pack.tickets}</div>
                </div>
                <div className='row'>
                    <label>Hotels</label>
                    <div>{this.state.pack.hotels}</div>
                </div>
                <div className='row'>
                    <label>Restaurants</label>
                    <div>{this.state.pack.restaurants}</div>
                </div>
                <div className='row'>
                    <label>Guide</label>
                    <div>{this.state.pack.guide}</div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
