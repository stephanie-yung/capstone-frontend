import React,{ useState } from "react";
import axios from "axios";
//using the tachyons library, set up a simple form with onClick functions that is linked back to the homepage to direct users to the given page
const Register = ({onRouteChange}) => {
    const [fname, setFName] = useState('');
    const [lname, setLName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');
    // const [invalid, setInvalid] = useState(false);
    const [errorPW, setErrorPW] = useState("")
    const [errorEMAIL, setErrorEMAIL] = useState("")
    
    let post_Register = async() => {
        //params to be passed
        let params = {
            fname: `${fname}`,
            lname: `${lname}`,
            email: `${email}`,
            pw: `${password}`,
        };
        try {
            const { data } = await axios.post(`https://brewers-backend.herokuapp.com/users`, params);
            console.log("Signed Up", data.data);
            onRouteChange('home', data.data.token, data.data.user)
        }
        catch(error) {
            console.log(error.response.data.data)
            let errors = error.response.data.data;

            if ("pw" in errors)
                setErrorPW(errors["pw"])
            if ("email" in errors)
                setErrorEMAIL(errors["email"])
        } 
    }
    return(
        <article style={{border: "1px solid #212121"}} className="br3 ba b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4">
            <div className="measure " style={{color: "#212121"}}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend style={{color: "#00754a"}} className="f1 fw6 ph0 mh0" >Register</legend>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name-address">First Name</label>
                    <input className="pa2 input-reset ba bg-transparent  hover-black w-100" type="text" name="name"  id="name" onChange={(e) => setFName(e.target.value)}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="name-address">Last Name</label>
                    <input className="pa2 input-reset ba bg-transparent  hover-black w-100" type="text" name="name"  id="name" onChange={(e) => setLName(e.target.value)}/>
                </div>
                <div className="mt3">
                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                    {errorEMAIL !== "" ? <label>{errorEMAIL}</label> : null}
                    <input className="pa2 input-reset ba bg-transparent  hover-black w-100" type="email" name="email-address"  id="email-address" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="mv3">
                    <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                    {errorPW !== "" ? <label>{errorPW}</label> : null}
                    <input className="b pa2 input-reset ba bg-transparent  hover-black w-100" type="text" name="password"  id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                </fieldset>
                <div className="">
                    <input onClick= {()=>{post_Register()}} className="b ph3 pv2 input-reset ba black b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
                </div>
                {/* {invalid == true ? onRouteChange('register'): onRouteChange('home'), setInvalid(false)} */}
            </div>
        </main>
        </article>
    )
}
export default Register;