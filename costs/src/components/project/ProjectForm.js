function ProjectForm(){
return(
  <form>
    <div>
    <input type="text" placeholder="Insira nome do projeto"></input>
    </div>
    <div>
<input type="number" placeholder="Insira orçamento total"></input>
</div>
<select name="category_id">
    <option disable>Selecione a categoria</option>
</select>
<div>
    <input type="submit" value="Criar Projeto"></input>
</div>
  </form>
   
)
}


export default ProjectForm