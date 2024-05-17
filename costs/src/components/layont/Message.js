import {useState, useEffect} from 'react'
import styles from './Message.module.css'


function Message({ type, msg }) {

    const [visible,setVisible] =useState(false)

    useEffect(()=>{
        if(!msg){
            //retornar se a mensagem existe
            setVisible(false)
            return
        }
        //caso exista
        setVisible(true)
//tempo para desaparecer mensagem da tela
        const timer =setTimeout(() => {
        setVisible(false)
    },3000 )

    return () => clearTimeout(timer)
    }, [msg] )
    return (<>
{visible && (
        <div className={`${styles.message} ${styles[type]}`}>
        {msg}
    </div>
)}
    </>
    
    );
}

export default Message