import React,{Component} from 'react'
import AdminNavbar from './AdminNavbar'
import PackageService from '../Services/PackageService';

var stylingObject = {
    section: {
        padding:"30px",
        margin:"20px"
    },
    form:{
        padding:"5px"
    }, div: {
        margin: "10px"
    }, span: {
        display: "inline-block",
        width: "150px"
    }
}

export default class AddPackages extends Component{
    constructor(props){
        super(props);
        this.state = {
            site_name:'',
            town: '',
            actvities: '',
            tickets: '',
            hotels: '',
            restaurants: '',
            guide: ''
        }
        this.changeSiteHandler = this.changeSiteHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeActivityHandler = this.changeActivityHandler.bind(this);
        this.changeTicketsHandler = this.changeTicketsHandler.bind(this);
        this.changeHotelHandler = this.changeHotelHandler.bind(this);
        this.changeRestHandler = this.changeRestHandler.bind(this);
        this.changeGuidHandler = this.changeGuidHandler.bind(this);

        this.saveTrip = this.saveTrip.bind(this);
    }

    saveTrip = (e) => {
        e.preventDefault();

        let tourpack = {
            site_name:this.state.site_name,
            town: this.state.town,
            actvities: this.state.activities,
            tickets: this.state.tickets,
            hotels: this.state.hotels,
            restaurants: this.state.restaurants,
            guide: this.state.guide
        };
        console.log('Tour Packages =>' + JSON.stringify(tourpack));
        PackageService.createpackage(tourpack).then(res =>{
            this.props.history.push("/AddesdPackages");
        });
    }

    changeSiteHandler(event){
        this.setState(state => ({site_name: event.target.value}));
    }

    changeCityHandler(event){
        this.setState(state => ({town: event.target.value}));
    }

    changeActivityHandler(event){
        this.setState(state => ({activities: event.target.value}));
    }

    changeTicketsHandler(event){
        this.setState(state => ({tickets: event.target.value}));
    }

    changeHotelHandler(event){
        this.setState(state => ({hotels: event.target.value}));
    }

    changeRestHandler(event){
        this.setState(state => ({restaurants: event.target.value}));
    }

    changeGuidHandler(event){
        this.setState(state => ({guide: event.target.value}));
    }

    cancel(){
        this.props.history.push("/AddesdPackages");
    }

    render(){
    return (
        <div>
        <AdminNavbar></AdminNavbar>
        <section class="Addpackages" style={stylingObject.section}>
        <center>
        <br/><br/>
        <h1 className="heading-title">Add New Packages</h1>
        <br />
        <form style={stylingObject.form}>

            <div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Site Name :</span>
                    <input type="text" placeholder="enter site name" name="site_name" 
                    value={this.state.site_name} onChange={this.changeSiteHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>City :</span>
                    <input type="text" placeholder="enter location" name="city"
                    value={this.state.town} onChange={this.changeCityHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Activities :</span>
                    <input type="text" placeholder="enter site Activities" name="activity"
                    value={this.state.activities} onChange={this.changeActivityHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Tickets :</span>
                    <input type="text" placeholder="enter prefernce of tickets" name="tickets"
                    value={this.state.tickets} onChange={this.changeTicketsHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}>
                    <span style={stylingObject.span}>Hotels :</span>
                    <input type="text" placeholder="place to stay" name="hotels"
                    value={this.state.hotels} onChange={this.changeHotelHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}> 
                    <span style={stylingObject.span}>Restuarants :</span>
                    <input type="text" placeholder="Restuarants" name="restuarants"
                    value={this.state.restaurants} onChange={this.changeRestHandler}/>
                </div>
                <div class="inputBox" style={stylingObject.div}> 
                    <span style={stylingObject.span}>Guide :</span>
                    <input type="text" placeholder="availability of guides" name="guides"
                    value={this.state.guide} onChange={this.changeGuidHandler}/>
                </div>
            </div>
            <br/>
            <button className="btn btn-success" onClick={this.saveTrip}>Save</button>
            <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft:"10px"}}>Cancel</button>
        

        </form>
        </center>
        </section>
        </div>
    )
    }
}