import React from 'react'
import DP from '../../assets/img/athul_dp.jpg'
import '../../../node_modules/font-awesome/css/font-awesome.css'
import {SOCIAL_BLOG, SOCIAL_EMAIL, SOCIAL_GITHUB, SOCIAL_LINKED_IN, SOCIAL_TWITTER, TITLE} from "../../data";
import Education from "./Education";
import Languages from "./Languages";
import TechStack from "./TechStack";


const Header = () => <div className="container col-sm-2"
                          style={{position: 'relative', height: '100%', textAlign: 'center'}}>

    <div className="row">
        <div className="col-md-12 col-lg-12">
            <h1 className="title-name">
                <span className="first-name">Athul</span>
                <span className="last-name">Muralidharan</span>
            </h1>
        </div>
    </div>
    <div className="row">
        <img alt="profile" className="profile-picture-left img-circle profile-pic" data-no-retina="true" src={DP}/>
    </div>
    <div className="row">
        <div className="col-md-12 left-header">
            {TITLE}
        </div>
    </div>
    <SocialLinks/>
    <hr/>
    <div className="row text-center">
        <a className="left-header col" href={SOCIAL_BLOG}>Blog</a>
    </div>
    <hr/>
    <TechStack/>
    <hr/>
    <Languages/>
    <hr/>
    <Education/>
    <hr/>

</div>


const SocialLinks = () => <div className="social-links">
    <a href={SOCIAL_LINKED_IN} rel="nofollow noopener noreferrer" target="_blank">
        <i className="fa fa"></i>
    </a>&nbsp; &nbsp;&nbsp;
    <a href={SOCIAL_GITHUB} rel="nofollow noopener noreferrer" target="_blank">
        <i className="fa"></i>
    </a>&nbsp;&nbsp;&nbsp;
    <a href={SOCIAL_TWITTER} rel="nofollow noopener noreferrer" target="_blank">
        <i className="fa"></i>
    </a>&nbsp;&nbsp;&nbsp;
    <a href={`mailTo:${SOCIAL_EMAIL}`} rel="nofollow noopener noreferrer" target="_blank">
        <i className="fa fa-envelope"></i>
    </a>&nbsp;&nbsp;&nbsp;
</div>
export default Header
