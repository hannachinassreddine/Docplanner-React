import React from 'react'
import './office.css'


function office({off}){
    return(<div className='offices inner-style'>
        <div className="offices-header">
            <h1>
                Improve the lives of millions.
                Change&nbsp;yours forever
            </h1>
            <p>
                More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.
            </p>
        </div>
        <div className='offices-slider'>
            {off.map(el=><div className='office'><a href='/' className="office-inner">
                    <img src={el.src } alt='img' />
                    <div className="office-desc">
                        {el.text}
                        <span className="btn-small">{el.span}</span>
                    </div>
            </a></div>)}

        </div>

    </div>)
}
export default office