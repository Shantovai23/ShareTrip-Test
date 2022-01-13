import React from 'react'
import bus1 from '../images/bus1.png'
import bus2 from '../images/bus2.png'
const RouteBox = ({routeHead,routeName,routeDate,busNo}) => {
    return (
        <div className='route-box'>
        <div>
         {busNo?<img src={bus1} alt="Bus1" className='bus1'/>:<img src={bus2} alt="Bus2" className='bus1'/>}
        </div>
        <div>
        <p className='route-head'>{routeHead}</p>
        <p className='route-name'>{routeName}</p>
        <p className='route-date'>{routeDate}</p>
        </div>
    </div>
    )
}

export default RouteBox
