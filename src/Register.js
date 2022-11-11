import React from 'react'
import './Register.css'
import Login from './Login';
import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route, Redirect,Navigate
} from "react-router-dom";

function Register() {
  return (
    <>
    <div className='header'>
        <div className='digi'><h1>Digi</h1><h1 className='comp'>comp++</h1></div>
        <div><button className='button_reg'>How to Register</button></div>
    </div>
    <div >
        <div >
           <div className="form_insider">
           <form action="post" className='reg_form_r'>
                <h2 className='from_heading_r'>Register Your company</h2>
                <div className='input_ele_R'>
                    <div>
                    <input id='select' type="text" placeholder="Country*" />
                    </div>
                    <div>
                    <input id='select'  type="text" placeholder="Company Name*" />
                    </div>
                    <div>
                    <select id='select' required>
                    <option value="" disabled selected hidden>
                        Registeration Reference Type*
                    </option>
                    <option>facebook</option>
                    <option>facebook</option>
                    <option>facebook</option>
                    <option>facebook</option>
                    <option>facebook</option>
                    <option>facebook</option>
                    <option>facebook</option>
                    </select>
                    </div>
                    <div>
                    <input id='select' type="text" placeholder="Registeration Number*" />
                    </div>
                    <div>
                    <input id='select' type="text" placeholder="First Name*" />
                    </div>
                    <div>
                    <input id='select' type="text" placeholder="Last Name*" />
                    </div>
                    <div>
                    <input id='select'  type="email" placeholder="Email Id*" />
                    </div>
                    <div>
                    <input id='select'  type="tel" placeholder="Phone Number*" />
                    </div>
        </div>
        <div className='register_now' ><button className='register_button' type='submit'>REGISTER NOW</button></div>
        <div id='div_link_r' ><p>Already Register?</p><NavLink id='Login_r' activeClassName="active_class" to="/Login">Login</NavLink></div>
        



            </form>
           </div>
        </div>
        <div className='img_div'>
        <img className='img_cargo' src="https://aquio.com.au/wp-content/uploads/2021/05/food-grade-shipping-containers-aquio-1000x500.jpg" alt="Cargo" />
        </div>
    </div>
    {/* <Router>
    <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
    </Routes>
  </Router> */}
    </>
  )
}

export default Register
