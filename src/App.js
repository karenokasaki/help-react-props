import foods from "./foods.json"
import { useState } from 'react'
import CardFood from './components/CardFood'
import FormAluno from "./components/FormAluno";

function App() {

  const [todosAlunos, setTodosALunos] = useState([
    { name: "karen", sobrenome: 'Okasaki', idade: 28 },
  ])

  return (
    <div>

      <FormAluno todosAlunos={todosAlunos} setTodosAlunos={setTodosALunos}/>

      {todosAlunos.map((aluno) => {
        return (
          <>
            <p>Nome: {aluno.name}</p>
            <p>Idade: {aluno.idade}</p>
          </>
        )
      })

      }

    </div>
  );
}

export default App;