import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


function ProjectForm({btnText}){
return(
  <form className={styles.form}>
    <div>
<Input type="text" text="nome do projeto" name="name" placeholder="insira nome do projeto"/>
    </div>
    <div>
    <Input type="Number" text="orçamento do projeto" name="budget" placeholder="insira o orçamento total"/>
</div>
<Select name="category_id" text="Selecione a categoria"/>
<div>
   <SubmitButton text={btnText} />
</div>
  </form>
   
)
}


export default ProjectForm