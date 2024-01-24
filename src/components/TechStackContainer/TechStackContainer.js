import React from 'react'
import "./TechStackContainer.css"
function TechStackContainer({name,  image, altProperty}) {
  return ( 
    <div className='tecstack_icons'>
        <img src= {image} alt= {altProperty}/>
        <p>{name}</p>
    </div>
 );
}
export default TechStackContainer