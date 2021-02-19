
import React from "react";

function Profile (props) { 
    
    function handleclick (e){
        e.preventDefault ();
        alert(`name of the profile user is $ {props.name}`)
      }
     
    return (
        <div>
            <p>The full name is <span>{props.name}</span> and the bio{props.bio} and profession{props.profession}</p>
            <img src="oprahphoto.jpg" alt="OprahPhoto"/>
            <br/>
            <button onClick= {handleclick}>alert the name</button>
        </div>
    )
}

export default Profile;