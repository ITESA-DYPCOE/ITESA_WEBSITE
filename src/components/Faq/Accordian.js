import React, {useState} from 'react'
import './Faq.css'

function Accordian({question,answer}) {
    const [show,setShow] = useState(false);
    return (
        <>
            <div className='main-heading-faq'>                
                <h3>{question}</h3>
                <i className= {show ? "fas fa-arrow-up":"fas fa-arrow-down"} onClick={() => setShow(!show)} ></i>
            </div>
            {show && <p className='answers'>{answer}</p>}            
        </>
    )
}

export default Accordian;
