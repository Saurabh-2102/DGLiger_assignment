import React, { useState} from 'react';
import './login.css'
import Register from './Register';
import { useForm } from 'react-hook-form';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function Login(props) {

    const { register, handleSubmit, errors } = useForm({
        mode: "onChange"
    });

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const onSubmit = (e) => {
      e.preventDefault();
        const LoginData = {
            email: inputs.email,
            password: inputs.password

        }
        // console.log(LoginData);
        console.log(errors);
    }

    const handleInput = (e) => {
        // e.persist();
        // console.log(e.target.value);
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
    }
    return (
      <>
      <div className='header'>
          <div className='digi'><h1>Digi</h1><h1 className='comp'>Comp+</h1></div>
          <div className='heading_left'><p>New User?</p><span><h4><NavLink id='Login_l' to="/"> JoinDigiComp+</NavLink></h4></span>  </div>
      </div>
      <div >
          <div >
             <div className="form_insider">
             <form onSubmit={handleSubmit(onSubmit)}  className='reg_form'>
              <div><p className='from_heading'>WELCOME TO</p></div>
              <div><div className='digi'><h1>Digi</h1><h1 className='comp'>Comp+</h1></div></div>
              <div className='form_insider_2'>  
                  <div className='input_ele'>
                      <div>
                      <input type="text" 
                      placeholder="UserName/Email ID*"
                     
                      // value={inputs.email}
                     
                      />
                      </div>
                      <div>
                      <input type="password" placeholder="Email Id*" />
                      </div>
                    </div>
                    <div className='remember_'>
                      <div >
                        <input id='checkbox' type="checkbox" /><label style={{color: "rgb(119, 116, 116)"}} htmlFor="checkbox">Remember me</label>
                      </div>
                      <div id='forgot_pass'>
                        <a id='forgot_pass1' href="#">Forgot Password?</a>
                      </div>
                    </div>
          </div>
          <div className='login_now' ><button className='login_button' type='submit'>LOG IN</button></div>
          
          <div className='heading_left'><p>New User?</p><span><h4 ><NavLink id='Login_l' to="/"> JoinDigiComp+</NavLink></h4></span></div>
  
  
  
              </form>
             </div>
          </div>
          <div className='img_div'>
          <img className='img_cargo' src="https://aquio.com.au/wp-content/uploads/2021/05/food-grade-shipping-containers-aquio-1000x500.jpg" alt="Cargo" />
          </div>
      </div>
      </>
    )
}
export default Login;
