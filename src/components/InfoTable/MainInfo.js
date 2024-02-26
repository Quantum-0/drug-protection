import React, { useState, useEffect } from 'react';
import * as ReactDOMClient from 'react-dom/client'
import Information from "./Information"
import Information2 from "./Information2"
import Contact from "../Contact"



function MainInfo() {
    return (
        <div>
            <Contact  />
            <Information id="first" />
            <Information2 />  
        </div>
    )
}

export default MainInfo