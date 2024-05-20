import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Message.module.css';

function Message({ type }) {
    const [visible, setVisible] = useState(false);
    const [msg, setMsg] = useState(null);
    const location = useLocation();

    useEffect(() => {
        if (location.state?.message) {
            setMsg(location.state.message);
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
                setMsg(null);
            }, 3000);

            // Limpar o estado após exibir a mensagem
            window.history.replaceState({}, document.title);

            return () => clearTimeout(timer);
        }
    }, [location.state]);

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {msg}
                </div>
            )}
        </>
    );
}

export default Message;
