import React from 'react';
import {Link} from "react-router-dom"
import { useState } from 'react';
import "./Asad.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import imgasadour from "./ourwork.png"
import testimonialh from "./asadtesti.png"
import testiel from "./testiel.png";
import manthink from "./manthink.png";
import asadlogofoot from "./asadlogofoot.png"
function Asad(props) {
   let [qiym, setQiym] = useState("");
    return (
        <div>
            <section className="asad-1 mt-5">
                <div className="container container-fluid">
                    <h2 className="text-danger mt-5">OUR WORK</h2>
                    <h1 className="mt-4 mb-5">See Our Recent Case Studies</h1>
                    <nav className='d-flex justify-content-between'>
                        <ul className='d-flex w-800 justify-content-betweeen'>
                          <li><Link to="/" className="asad-nav-link  ">UI/UX</Link></li>
                          <li><Link to="/" className="asad-nav-link  ">Development</Link></li>
                          <li><Link to="/" className="asad-nav-link  ">Graphic Design</Link></li>
                          <li><Link to="/" className="asad-nav-link  ">Motion</Link></li>
                          <li><Link to="/" className="asad-nav-link  ">Branding</Link></li>
                          <li><Link to="/" className="asad-nav-link  ">Business Development</Link></li>
                        
                          
                        </ul>
                        <a href="#" className="text-decoration-none text-dark">Explore all</a>
                    </nav>
                    <img src={imgasadour} className="img-fluid mt-5" alt="" />
                </div>
            </section>
            <section>
                <div className="container container-fluid">
                    <h2 className="text-danger mt-5 text-uppercase">testimonial</h2>
                    <h1 className="mt-4 mb-5 text-capitalize">What Our Customer Say 
                    About Us</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 mt-5 pt-5">
                            <img src={testimonialh} className="img-fluid" alt="" /> 
                            <p className='text-muted mt-4'>Our website is working well for us. Our website was <br />    developed beautifully by the proxylab team. We really <br /> appreciated the prompt responses and delivery of exactly <br /> what we requested, as per our expectations.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={testiel} className="img-fluid" alt="" />
                        </div>

                    </div>
                </div>
            </section>
            <section>
                <div className="container container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <img src={manthink} className="img-fluid" alt="" />
                        </div>
                        <div className="col-6 mt-5 pt-5">
                            <h1 className='text-capitalize mt-5 pt-4'>Have A Project In Mind? <br />
                            Let's Get To Work.</h1>
                            <button className='getbtngg mt-5'>Get in touch</button>
                        </div >
                    </div>
                </div>
            </section>
            <footer className='mt-5 pt-5 border-bottom pb-4'>
                <div className="container container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-auto">
                            <img src={asadlogofoot} className="img-fluid" alt="" />
                            <p className='mt-4'>Dhaka, Bangladesh</p>
                            <p>0943833399</p>
                            <p>support@proxylab.com</p>
                        </div>
                        <div className="col-auto">
                            <p>Service</p>
                            <p>UI UX Design</p>
                            <p>Mobile Design</p>
                            <p>Motion Graphic</p>
                            <p>Web Development</p>
                            <p>Digital Marketing</p>
                            <p>Business Development</p>
                        </div>
                        <div className="col-auto">
                     
                            <p>Company</p>
                            <p>Service</p>
                            <p>Features</p>
                            <p>Our Team</p>
                            <p>Portfolio</p>
                            <p>Blog</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="col-auto">
                            <p>Our Social Media</p>
                            <p>Dribbble</p>
                            <p>Behance</p>
                            <p>Medium</p>
                            <p>Instagram</p>
                            <p>Facebook</p>
                            <p>Twitter</p>
                        </div>
                        <div className="col-auto">
                            <p>Join a Newsletter </p>
                            <label>Your Email: </label><br />
                            <input type="email" onInput={evenf => setQiym(evenf.target.value)}  className='border-1 bg-white'/><br />
                            <button className='getbtngg mt-5 '>Subscribe</button>
                        </div>
                    </div>
                </div>
            </footer>
            <section className='mt-5 mb-3'>
                <div className="container container-fluid">
                    <div className='d-flex justify-content-between'>
                     <p>© 2021 proxylab - All rights reserved.</p>
                     <div className='d-flex footer-under '>
                        <p>Privacy </p>
                        <p>Security </p>
                        <p>Terms </p>

                     </div>
                    </div>
                </div>
            </section>
              </div>
    )
}
export default Asad;