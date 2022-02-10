
import React from 'react'
import { Button, Card } from '@material-ui/core'
import {useState} from 'react'
import { Add } from '@material-ui/icons'
//import { questions } from './AccordionApi'

const AccordionShow = ({Question,Answer}) => {
  //const [Question,Answer]=questions
    const [show, setshow] =useState(false)
    return (
        <div>     
        <Card style={{ backgroundColor:"darkgray",  minwidth:"500px" , maxWidth:"500px" , marginLeft:"400px"  }} >
          <Button onClick={()=>setshow(!show)} > {show ? "—" : <Add/> } </Button>
          {Question}
          <br/> 
         { show && <p>{Answer}</p>}
          <br/>
        </Card>  
        </div>
    )
}

export default AccordionShow
