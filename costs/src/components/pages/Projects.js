import { Component } from "react"
import Message from "../layont/Message"
import {useLocation} from 'react-router-dom'

function Projects(){
const location = useLocation()
let message='dasdadsa'
if(location.state){
    message =location.state.message
}
    return( 
    <div>
        <h1>Meus Projetos</h1>
  {message && <Message type="success" msg={message}/>}
    </div>
    )
}

export default Projects

