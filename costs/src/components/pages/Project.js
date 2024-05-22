import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layont/Loading';
import Container from '../layont/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../layont/Message';


function Project() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [message, setMessage] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(resp => {
                if (!resp.ok) {
                    throw new Error('Erro ao carregar o projeto');
                }
                return resp.json();
            })
            .then(data => {
                setProject(data);
                setLoading(false);
                setShowProjectForm(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
        }, 30);

        return () => clearTimeout(timer);
    }, [id]);

    function editPost(updatedProject) {
        if (updatedProject.budget < updatedProject.cost) {
            setMessage('O orçamento não pode ser menor que o custo do projeto!!');
            setType('error');
            return;
        }

        setLoading(true);
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProject),
        })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Erro ao atualizar o projeto');
            }
            return resp.json();
        })
        .then(data => {
            setProject(data);
            setShowProjectForm(false);
            setLoading(false);
            setMessage('Projeto atualizado');
            setType('success');
        })
        .catch(err => {
            console.error(err);
            setError(err.message);
            setMessage('Erro ao atualizar o projeto');
            setType('error');
            setLoading(false);
        });
    }

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>Ocorreu um erro ao carregar o projeto: {error}</p>;
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    return (
        <div className={styles.project_details}>
            {project ? (
                <Container customClass="column">
                    {message && <Message type={type} msg={message} />}
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar projeto' : 'Fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p><span>Categoria:</span> {project.category.name}</p>
                                <p><span>Total orçamento:</span> R${project.budget}</p>
                                <p><span>Total utilizado:</span> R${project.cost}</p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                            </div>
                        )}
                    </div>
                </Container>
            ) : (
                <p>Projeto não encontrado!</p>
            )}
        </div>
    );
}

export default Project;