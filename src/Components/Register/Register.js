import React from "react";
//using the tachyons library, set up a simple form with onClick functions that is linked back to the homepage to direct users to the given page
const Register = ({onRouteChange}) => {
    return(
        <article style={{border: "1px solid #212121"}} className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4">
            <div className="measure " style={{color: "#212121"}}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend style={{color: "#00754a"}} className="f1 fw6 ph0 mh0" >Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name-address">Name</label>
                    <input className="pa2 input-reset ba bg-transparent  hover-black w-100" type="text" name="name"  id="name"/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bg-transparent  hover-black w-100" type="email" name="email-address"  id="email-address"/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" type="password" name="password"  id="password"/>
                </div>
                </fieldset>
                <div className="">
                    <input onClick= {()=>onRouteChange('home')} className="b ph3 pv2 input-reset ba black b--black bg-transparent grow pointer f6 dib" type="submit" value="Register"/>
                </div>
            </div>
        </main>
        </article>
    )
}

export default Register;