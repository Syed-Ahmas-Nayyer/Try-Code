import React, { useState } from 'react'
import './EC.css';
import EC1 from './EC1';
const EC = () => {
    const [ecLeft, setEcLeft] = useState([
        {title: "EC College", description: "joadhoasdnaspidnpasidnpasnpasd", imgUrl:""},
        {title: "EC College", description: "joadhoasdnaspidnpasidnpasnpasd", imgUrl:""},
        {title: "EC College", description: "joadhoasdnaspidnpasidnpasnpasd", imgUrl:""},
    ])
    return (
        <div className='container'>
            <div className="row">
                <div className="col-4">
                    {ecLeft?.map(dt => (<EC1 title={dt.title} description={dt.description} imgUrl={dt.imgUrl} />))}
                </div>
                <div className="col-4">
                    <div className="outer-1">
                    <div className="inner-1"></div>
                    <div className="inner-2">
                        <img src='https://ec.com.pk/assets/img/logo-in-circle.png'  style={{position: 'relative', margin: 'auto',left: 20,top: '30%', width: 141, height: 61}} />
                    </div>
                    </div>
                   
                </div>
                <div className="col-4"></div>
            </div>
            <div className='abacada'>
                <div className='daba'></div>
                <div className='haga'></div>
            </div>
        </div>
    )
}


export default EC;