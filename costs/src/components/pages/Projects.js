import { Component } from "react"
import Message from "../layont/Message"
import {useLocation} from 'react-router-dom'
import styles from './Projects.module.css'
import Container from "../layont/Container"
import LinkButton from "../layont/LinkButton"



function Projects(){
const location = useLocation()
let message='Projeto criado com sucesso!!'
if(location.state){
    message =location.state.message
}
    return( 
    <div className={styles.project_container}>
        <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
       <LinkButton to="/newproject" text="Criar projeto"> </LinkButton>
        </div>
  {message && <Message type="success" msg={message}/>}
 <Container  customClass="start">
 <p>Projetos....</p>
 </Container>
    </div>
    )
}

export default Projects

