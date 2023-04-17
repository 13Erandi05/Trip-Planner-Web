import React, {Component} from "react";
import Navbar from "../Components/Navbar/Navbar";
import BookingService from "../Services/BookingService";

var stylingObject = {
    form:{
        padding:"5px"
    }, div: {
        margin: "10px"
    }, span: {
        display: "inline-block",
        width: "180px"
    }
}

export default class BookNow extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: '',
            location: '',
            guestA: '',
            guestC: '',
            arrivals: '',
            leavedate: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeLocationHandler = this.changeLocationHandler.bind(this);
        this.changeGuestAHandler = this.changeGuestAHandler.bind(this);
        this.changeGuestCHandler = this.changeGuestCHandler.bind(this);
        this.changeArrHandler = this.changeArrHandler.bind(this);
        this.changeLeaveHandler = this.changeLeaveHandler(this);

        this.saveTrip = this.saveTrip.bind(this);
    }

    saveTrip = (e) => {
        e.preventDefault();

        let trip = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            location: this.state.location,
            guestA: this.state.guestA,
            guestC: this.state.guestC,
            arrivals: this.state.arrivals,
            leaving: this.state.leavedate
        };
        console.log('trip =>' + JSON.stringify(trip));
        BookingService.createbookind(trip);
    }

    changeNameHandler(event){
        this.setState(state => ({name: event.target.value}));
    }

    changeEmailHandler(event){
        this.setState(state => ({email: event.target.value}))
    }

    changePhoneHandler(event){
        this.setState(state =>({phone: event.target.value}))
    }

    changeAddressHandler(event){
        this.setState(state => ({address: event.target.value}))
    }

    changeGuestAHandler(event){
        this.setState(state =>({guestA: event.target.value}))
    }

    changeGuestCHandler(event){
        this.setState(state =>({guestC: event.target.value}))
    }

    changeLocationHandler(event){
        this.setState(state => ({location: event.target.value}))
    }

    changeArrHandler(event){
        this.setState(state =>({arrivals: event.target.value}))
    }

    changeLeaveHandler(event){
        this.setState(state => ({leavedate: event.target.value}))
    }

    cancel(){
        this.props.history.push("/BookedTrips");
    }

    render(){
    return(
        <div>
            <Navbar></Navbar>
            <section class="booking">
        <center>
        <br/><br/>
        <h1 class="heading-title">book your trip!</h1>
        <br />
        <form style={stylingObject.form}>

            <div>
                <div className="form-group" style={stylingObject.div}>
                    <span style={stylingObject.span}>Name :</span>
                    <input type="text" placeholder="enter your name" name="name" value={this.state.name}
                    onChange={this.changeNameHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Email :</span>
                    <input type="email" placeholder="enter your email" name="email" value={this.state.email}
                    onChange={this.changeEmailHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Tele phone No :</span>
                    <input type="number" placeholder="enter your number (xxx xxx xxxx)" name="phone" 
                    value={this.state.phone} onChange={this.changePhoneHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Address :</span>
                    <input type="text" placeholder="enter your address" name="address" value={this.state.address}
                    onChange={this.changeAddressHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Package id :</span>
                    <input type="text" placeholder="place you want to visit" name="location"
                    value={this.state.location} onChange={this.changeLocationHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}> 
                    <span style={stylingObject.span}>No of Adults :</span>
                    <input type="number" placeholder="number of adult guests" name="guestsA"
                    value={this.state.guestA} onChange={this.changeGuestAHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}> 
                    <span style={stylingObject.span}>No of Children :</span>
                    <input type="number" placeholder="number of child guests" name="guestsC"
                    value={this.state.guestC} onChange={this.changeGuestCHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Arrivals :</span>
                    <input type="date" name="arrivals" value={this.state.arrivals} onChange={this.changeArrHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Leaves :</span>
                    <input type="date" name="leavedate" value={this.state.leavedate} onChange={this.changeLeaveHandler}/>
                </div>
            </div>

            <button className="btn btn-success" onClick={this.saveTrip}>Save</button>
            <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10px"}}>Cancel</button>
           

        </form>
        </center>
        </section>
        </div>
    )
    }
}