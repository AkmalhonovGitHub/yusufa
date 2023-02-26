import React from 'react';
import {Link} from "react-router-dom"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import logo from "./asadlogofoot.png"
import "./Yusuf.css"
import flat from "./yusuf1 (1).png"
import about from "./About us image.png"
import company from "./Company.png"
import strela from "./strela.png"
import uxui from "./uxui.png"
import oxirgiui from "./oxirgiui.png"
import twostrela from "./twostrela.png"

function Yusuf(props) {
   
    return (
        <div>
            
            <header>
                <nav class="navbar navbar-expand-lg bg-light">
                <div class="container container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} className="img-fluid" alt="" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">  
                        <li class="nav-item">            
                         <Link to="/" class="nav-link">Features</Link>                      
                        </li>
                        <li class="nav-item">
                         <Link to="/" class="nav-link">Pricing & Plans</Link>                      
                        </li>
                        <li class="nav-item">
                         <Link to="/" class="nav-link">Support</Link>                                
                        </li>
                        <li class="nav-item">
                         <Link to="/" class="nav-link">About Us</Link>                      
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <button class="btn" type="submit">Contact Us</button>
                    </form>
                    </div>
                </div>
                </nav>
            </header>
            <section>
                <div className="container container-fluid">
                    <div className="row mt-5">
                        <div className="col-12 col-md-6 mt-5">
                            <h1 class="sc-1-h1">Best <span className='sc-1-h1-red'>Marketing</span> <br /> Digital Agency</h1>
                            <p className='sc-1-p mt-4'>Various versions have evolved over the years, sometimes by accident, sometimes on purpose</p>
                            <div class="d-flex align-items-center">

                                <button class="btn">Get Started</button>
                               
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mt-5">
                            <img src={flat} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container container-fluid">
                    <p className='sc-1-p text-center'>OUR TRUSTED CLIENTS</p>
                    <img src={company} class="img-fluid mt-4 mb-5" alt="" />
                </div>
            </section>
            <section className='mt-5 '>
                <div className="container container-fluid">
                    <div className="row mt-5">
                        <div className="col-12 col-md-6 mt-5 pt-5">
                            <h3 className='text-danger'>WHAT WE DO</h3>
                            <h1 class="mt-3 mb-4">We Are Here To Help You <br /> Build Your Business</h1>
                            <p class="sc-1-p">Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta.</p>
                            <button className="btn mt-4">Explore all service</button>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="row">
                         

                                <div className="col-6 text-center">
                                    <img src={strela} className="img-fluid" alt="" />
                                    <h3 className='text-center mt-3'>Digital Marketing</h3>
                                    <p className='text-muted text-center mt-4'>That is the simply dummy text the printing and typesetting industry. </p>
                                  <Link to="/" className='text-dark text-decoration-none' >Read More</Link>
                                    
                                </div>
                                <div className="col-6 text-center">
                                <img src={twostrela} className="img-fluid" alt="" />
                                <h3 className='text-center mt-3'>SEO</h3>
                                    <p className='text-muted text-center mt-4'>That is the simply dummy text the printing and typesetting industry.  </p>
                                  <Link to="/" className='text-dark  text-decoration-none' >Read More</Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 text-center mt-5">
                                    <img src={uxui} className="img-fluid" alt="" />
                                <h3 className='text-center mt-3'>UI UX Design</h3>
                                    <p className='text-muted text-center mt-4'>That is the simply dummy text the printing and typesetting industry.  </p>
                                  <Link to="/" className='text-dark  text-decoration-none' >Read More</Link>
                                </div>
                                <div className="col-6 text-center mt-5">
                                <img src={oxirgiui} className="img-fluid" alt="" />

                                <h3 className='text-center mt-3'>Web Development</h3>
                                    <p className='text-muted text-center mt-4'>That is the simply dummy text the printing and typesetting industry.  </p>
                                  <Link to="/" className='text-dark  text-decoration-none' >Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5 mb-5 pb-5 '>
                <div className="container container-fluid">
                    <div className="row mt-5">
                        <div className="col-12 col-md-6 mt-5 pt-5">
                            <h3 className='text-danger'>About Us</h3>
                            <h1 class="mt-3 mb-4">We're More Than Digital <br /> Agency in the World</h1>
                            <p class="sc-1-p">Sed ut perspiciatis unde omnis iste natus error sit of the voluptatem accusantium lorem sit doloremque, totam rem aperiam, eaque ipsa quae ab illo invento veritatis quasi architecto beatae vitae dicta.</p>
                            <button className="btn mt-4">Get in touch</button>
                        </div>
                        <div className="col-12 col-md-6">
                           <img src={about} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Yusuf;