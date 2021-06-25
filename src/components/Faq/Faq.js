import React, {useState} from 'react'
import { questions } from './faqApi'
import Accordian from './Accordian'
import './Faq.css'

function Faq() {
    const [data] = useState(questions);

    return (
        <>
            <div className='central-line-div'>
            <h1>Frequently Asked Questions</h1>
            {
                data.map((currElem) => {
                    const {id, question, answer} = currElem;
                    return <Accordian 
                                keys={id} 
                                question={question} 
                                answer={answer} 
                            />
                })
            }
            </div>
        </>
    )
}

export default Faq;
