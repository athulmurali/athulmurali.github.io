import {LANGUAGES} from "../../data";
import React from "react";

const Languages = () => (<div className="row text-center">
    <div className="col-12 left-header" >
        Languages
    </div>
    <i className="col-12  fa fa-language fa-3x"/>
    <ul className=" col-12 left-sub-text col-md-12 ">
        {LANGUAGES.map((language) => <li>{language}</li>)}
    </ul>

</div>);


export default Languages;
