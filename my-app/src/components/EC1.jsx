import React from 'react'
import { Link } from 'react-router-dom';
import './EC1.css'

const EC1 = ({link, title, description, imgUrl}) => {
    return (
        <>
            <Link className='ec-container' to={{link}}>
                <div className="left-left">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="left-right">
                    <img src={{imgUrl}} alt="" width={55} height={49} />
                </div>
            </Link>
            
        </>
    )
}

export default EC1;