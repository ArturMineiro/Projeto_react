import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';
import { useNavigate } from 'react-router-dom';

function NewProject() {
    const navigate = useNavigate();

    const createPost = (project) => {
        // Initialize costs and services
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => {
            if (!resp.ok) {
                throw new Error('Network response was not ok');
            }
            return resp.json();
        })
        .then((data) => {
            // Navigate to another page if needed
            navigate('/projects', {message: 'Projeto criado com sucesso!!'});
        })
        .catch(err => console.log(err));
    };

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Criar seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    );
}

export default NewProject;
