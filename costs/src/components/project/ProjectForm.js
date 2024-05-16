import {useEffect, useState} from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({btnText}){

  const [categories,setCategories] = useState([])

 useEffect(( ) => {
  fetch("http://localhost:5000/categories", {
    method: 'Get',
    headers:{
      'Content-type': 'aplication/json',
    },
    
      })
      .then((resp) => resp.json())
      .then((data)=> {
        setCategories(data)
      })
      .catch((err) => console.log(err))
 })
return(
  <form className={styles.form}>
    <div>
<Input type="text" text="nome do projeto" name="name" placeholder="insira nome do projeto"/>
    </div>
    <div>
    <Input type="Number" text="orçamento do projeto" name="budget" placeholder="insira o orçamento total"/>
</div>
<Select name="category_id" text="Selecione a categoria" options={categories}/>
<div>
   <SubmitButton text={btnText} />
</div>
  </form>
   
)
}


export default ProjectForm