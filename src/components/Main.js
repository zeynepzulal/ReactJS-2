import React from "react";

import "./Main.css";

function main(){
    return(
        <main>
            <h1 className="main--title">Fun Facts About React</h1>
            <ul className="main--list">
                <li>Was first realesed 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K starts on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps,including mobile apps</li>
            </ul>
        </main>
    )
}

export default main;