import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import M from  'materialize-css/dist/js/materialize.min.js'


export default function SearchProperty() {
    
    useEffect(() => {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});       
    })

    return (
        <div className="row">
            <div className="input-field col s6">
                <select id="typeInp">
                    <option value="" disabled selected>Choose a type</option>
                    <option value="home">Home</option>
                    <option value="office">Office</option>
                </select>
                <label>Property Select</label>
           </div>
            <div className="row">
                <div className="input-field col s12">
                <i className="material-icons prefix">textsms</i>
                <input type="text" id="autocomplete-input" className="autocomplete"/>
                <label htmlFor="autocomplete-input">Town, neighborhood, ZIP...</label>
                </div>
                <div className="row col s12">
                  <Link to='/posts' className="waves-effect waves-light btn"><i className="material-icons left">search</i>search</Link>
                </div>
            </div>  
        </div>   
    )
}