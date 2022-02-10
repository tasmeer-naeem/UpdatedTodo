import React from 'react'
import { questions } from './AccordionApi'
import { useState } from 'react'
import AccordionShow from './AccordionShow'

const Accordion = () => {
    
    const [data, setdata] = useState(questions)

    return (
        <div>
        <h1>Accodion</h1>
        <section>
           {     
               data.map((item)=>{           
                   const {id} = item
                    return (
                    <AccordionShow  key={id} 
                    {...item}   />
                    ) 
               })
           }
        </section>
        </div>
    )
}

export default Accordion
