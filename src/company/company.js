import React from 'react'
import './company.css'


function company({comp}){
return(
<div className='about-company inner-style'>
    <h1>We are a global company<br/>with local culture</h1>
    <ul className='brands__logos'>{
        comp.map(el=><li><a path={el.path} target='_blank'>
            <svg xmlns={el.svg} viewBox='0 0 195 32'><path d={el.d}/></svg></a></li>)
    }

    </ul>

</div>

)}

export default company