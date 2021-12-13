import axios from "axios";
import React, {useState, useEffect}from "react";

let token = "Random token value"

const BASE_URL = "https://brewers-backend.herokuapp.com";
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Authorization': `Bearer ${token}`
 };

const Signin = ({onRouteChange}) => {
    const [UserEmail, setUserEmail] = useState(0);
    const [UserPassword, setUserPassword] = useState(0);
    const [ReceivedError, setReceivedError] = useState(0);
    const [ReceivedErrorEmail, setReceivedErrorEmail] = useState("");
    const [ReceivedErrorPW, setReceivedErrorPW] = useState("");

    let postUserInformation = async() =>{
        let params = {
            email: UserEmail,
            pw: UserPassword
        }
        try{
            const { data } = await axios.post(`${BASE_URL}/users/login`, params);
            // console.log("posted user info: ", data)
            onRouteChange('home', data.data.token , data.data.user);
        }
        catch(error){
            // console.log(error.response.data.data)
            var errorData = error.response.data.data;

            if("email" in errorData){
                setReceivedErrorEmail(errorData["email"]);
                // console.log("received error email",ReceivedErrorEmail)
            }
            if("pw" in errorData){
                setReceivedErrorPW(errorData["pw"]);
            }

            setReceivedError(1);
        }
    }

    return(
       
        
        <article style={{border: "1px solid #212121"}} className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        
        <main className="pa4">
        <div className="slogan"> <h1>The Brewers</h1>
        <span>Welcome to our RateMyStarbucks app!</span></div>
            <div className="measure" >
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0" style={{color: "#00754a"}}>Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" style={{color: "#212121"}} htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-black w-100" type="email" name="email-address"  id="email-address" onChange={e => setUserEmail(e.target.value)} />
                    {
                        ReceivedErrorEmail !== "" ? <div> {ReceivedErrorEmail} </div> : ""
                    }
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" style={{color: "#212121"}} htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" type="password" name="password"  id="password" onChange={e => setUserPassword(e.target.value)}/>
                    {ReceivedErrorPW !== "" ? <label>{ReceivedErrorPW}</label> : null}
                </div>
                </fieldset>
                <div className="">
                <input onClick= {()=>{postUserInformation()} } className="b ph3 pv2 input-reset ba black b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                {/* <p onClick= {()=>onRouteChange('register')} className="f6 link dim black db pointer">Register</p> */}
                </div>
            </div>
        </main>
        </article>
    )
}

export default Signin;