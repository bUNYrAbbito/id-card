import image from './images/unnamed.png';
import React from 'react';


function Nav(){
    return(
        <div>
            <img src={image}  alt="profile image"/>
            <h1>prasant singh</h1>
            <p>I Am a full stack developer working on various projects, including React, Angular, and a simplified web application for note-taking. If there's anything more you'd like to add or if you need help with any specific aspect of your projects, feel free to let me know!</p>
            <button>contect</button>
        </div>
    )
}

export default Nav;