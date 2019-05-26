import React from "react";
import {TECH_STACK} from '../../data'

const TechStack = ()=>(<div className="row">
        <div className="col-md-12 left-header">
            Tech Stack
        </div>
        <i className="fa fa-code fa-3x fa-align-center"></i>
        <ul className="left-sub-text" >
            {TECH_STACK.map((tech ,index)=><li className="row-header" key={index}> {tech}</li>)}
        </ul>
    </div>
);
export default TechStack;
