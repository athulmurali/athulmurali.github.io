import React from "react";
import {TECH_STACK} from '../../data'

const TechStack = () => (<div className="row text-center">
    <div className="col-12 left-header">
        Tech Stack
    </div>
    <i className="col-12  fa fa-code fa-3x"/>
    <ul className=" col-12 left-sub-text col-md-12 ">
        {TECH_STACK.map((tech ,index)=><li className="row-header" key={index}> {tech}</li>)}
    </ul>
</div>);

export default TechStack;
