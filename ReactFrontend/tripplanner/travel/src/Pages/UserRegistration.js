import {  useState } from "react";
 
import axios from "axios";
 
function UserRegistration() {
  
    const [user_name, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
 
    async function register(event){
        navigate('/Login');

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/v1/user/save", {
          user_name: user_name,
          email: email,
          password: password,
          });
          alert("User Registation Successfully");
 
        } catch (err) {
          alert(err);
        }
      }
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>User Registation</h1>
    
    <form>
        <div class="form-group">
          <label>User name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={user_name}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />
 
        </div>
 
        <div class="form-group">
          <label>E mail</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
        </div>
 
        <div class="form-group">
            <label>Password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
 
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
        <button type="submit" class="btn btn-info" style={{marginLeft:"10px"}} onClick={register} >Log in</button>
      
      </form>
    </div>
    </div>
     </div>
    );
    }
  }
  
  export default UserRegistration;