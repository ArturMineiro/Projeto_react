import styles from './Project.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Project() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.project_container}>
            {project ? (
                <div>
                    <h1>{project.name}</h1>
         
                </div>
            ) : (
                <p>Projeto não encontrado!</p>
            )}
        </div>
    );
}

export default Project;
