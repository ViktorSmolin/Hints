import {useEffect, useRef} from 'react';

import './App.css';


function Ref () {

    // По сути, useRef похож на «коробку», которая может содержать изменяемое значение в своём свойстве .current
    
    const greenRef = useRef();
    const yellowRef = useRef();
    const redRef = useRef();



    // setInterval(()=>{greenRef.current.classList.add('White')},1300)
    // setInterval(()=>{yellowRef.current.classList.add('White')},1200)
    // setInterval(()=>{redRef.current.classList.add('White')},1100)

    // useEffect(greenInterval

    // ,[]) Cannot read properties of undefined (reading 'classList')



    return (
        <div className='trafficLight'>
            <div ref = {greenRef} className='trafficLightCurcle Green'></div>
            <div ref = {yellowRef} className='trafficLightCurcle Yellow'></div>
            <div ref = {redRef} className='trafficLightCurcle Red'></div>
        </div>
    )

}

export default Ref;