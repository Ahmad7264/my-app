import React from 'react';
import "./TechStack.css";
import TechStackContainer from '../TechStackContainer/TechStackContainer';
function TechStack() {
    const techstackData = [
        {
            iconName: "C++",
            iconImage: "https://img.icons8.com/badges/48/c-plus-plus-logo.png",
            iconAltProperty: "cimage",
        },
        {
            iconName: "Js",
            iconImage: "https://img.icons8.com/arcade/64/javascript.png",
            iconAltProperty: "Jsimage",
        },
        {
            iconName: "React",
            iconImage: "https://img.icons8.com/bubbles/50/react.png",
            iconAltProperty: "Reactimage",
        }
    ];
  return (
    <div className='techstack_container'>
        <p className='techstack_title'>Tech Stack</p>
        <div className='techstack_icon_container'>{
        
        
        techstackData.map((item, index) => {

            return(
                <TechStackContainer 
                image={item.iconImage}
                altProperty={item.iconAltProperty}
                name={item.iconName}
                />
            )
        })
        
        
        }
        </div>
        </div>
  );
}  

export default TechStack;