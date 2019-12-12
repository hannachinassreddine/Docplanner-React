import React from 'react'
import './footer.css'

function footer({foo}){
    return(<div className='main-footer'>
            <div className="inners-style">
                    <p>We are leaders in 10 countries:
                         
                       { foo.map(el=><a href={el.href} target="_blank"> {el.country} </a>)}
                        and
                        <a href="http://www.doctoralia.cl" target="_blank">Chile</a>
                    </p>
                    <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.</p>
                    www.docplannner.com © 2019
                </div>
    
    </div>)
}
export default footer