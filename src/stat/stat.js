import React from 'react'
import './stat.css'


function stat({stats}){
    return(
        <div className='stat'>
            <div className='inner-style stat-inner-style'>
                <div className="stat-left">
                    <div className="stat-left-header">
                        <h1>{"The world's"}<br/>biggest healthcare platform</h1>
                        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                    </div>
                    <div class="background-stat"></div>
                </div>
                <div className='stat-right'>
                {stats.map(el=><div className={el.class}>{el.items.map(el=><div className='stat-item'>
                    <img src={el.src} alt='img' />
                    <h3>{el.h3}</h3>
                    <p>{el.p}</p>
                </div>)

                }

                </div>)}


                </div>
            </div>

        </div>
    )
}


export default stat