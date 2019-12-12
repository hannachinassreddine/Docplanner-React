import React from 'react'
import './services.css'

function services({ser}){
    return(
        <div className='sevices-section inner-style'>{
            ser.map(el=>
                <div className={el.class}>
                    <h2>{el.titelh2}</h2>
                    <h1>{el.titelh1}</h1>
                    <div>
                        <div className="select-country-option">{el.select&& <select data-id="domain-switcher">{el.select.map(el=><option>{el}</option>)}</select>}</div>
                        <img  src={el.imgsrc} alt='img'/>
                    </div>
                </div>
            )
            }
        </div>

    )
}

export default services