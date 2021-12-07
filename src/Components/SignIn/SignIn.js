import React from "react";
import axios from "axios";

const Signin = ({onRouteChange}) => {
    const handleSignIn = async (event) => {
        event.preventDefault()
        const url = "https://brewers-backend.herokuapp.com/users/login"
        let signin_form = {
            "email": "matt@499.com",
            "pw": "aA1234!"
        }
        let { data } = await axios.post(url, signin_form);
        let res = data.data;
        onRouteChange('home', res.token, res.user)
    };

    return(
        <article style={{border: "1px solid #212121"}} className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4">
            <form className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0" style={{color: "#00754a"}}>Sign In</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" style={{color: "#212121"}} htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent hover-black w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" style={{color: "#212121"}} htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="">
                <input onClick= {handleSignIn} className="b ph3 pv2 input-reset ba black b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                {/* <p onClick= {()=>onRouteChange('register')} className="f6 link dim black db pointer">Register</p> */}
                </div>
            </form>
        </main>
        </article>
    )
}

export default Signin;