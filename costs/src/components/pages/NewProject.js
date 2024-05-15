import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){
    return( <div className={styles.newproject_container}>
       <h1>Criar Projeto </h1> 
       <p>Criar seu projeto para depois adicionar os serviços </p>
    <p>Formulario</p>
    <ProjectForm/>
    </div>

    )
}

export default NewProject