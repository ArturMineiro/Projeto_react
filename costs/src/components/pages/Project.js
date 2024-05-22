import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../layont/Loading';
import Container from '../layont/Container';


function Project() {
    const { id } = useParams();
    const [project, setProject] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showProjectForm, setShowProjectForm] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(resp => resp.json())
            .then(data => {
                setProject(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError(err);
                setLoading(false);
            });
        }, 30); // Atraso de 3 segundos

        // Limpeza do timeout se o componente for desmontado
        return () => clearTimeout(timer);
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>Ocorreu um erro ao carregar o projeto.</p>;
    }

    function toggleProjectForm(){
setShowProjectForm(!showProjectForm)
    }

    return (
        <div className={styles.project_details}>
            {project ? (
                <div>
             <Container customClass="column"> 
                <div className={styles.details_container}>
                    <h1>
                        Projeto: { project.name}         
                    </h1>
                    <button className={styles.btn}onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' :'Fechar'}</button>
                    {!showProjectForm ? (
                        <div className={styles.project_info} >
                            <p><span> Categoria:</span> {project.category.name}</p>
                            <p><span> Total orçamento:</span> R${project.budget}</p>
                            <p><span> Total utilizado:</span> R${project.cost}</p>
                        </div>
                    ) : (
                    <div className={styles.project_info}> <p> detalhes do projeto</p></div>)}
                </div> 
                
            </Container> 
             
                </div>
            ) : (
                <p>Projeto não encontrado!</p>
            )}
        </div>
    );
}

export default Project;
