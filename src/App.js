import { Tulio } from "./components/Tulio"
import { Tathy } from "./components/Tathy"
import { IdCard } from "./components/IdCard"
import {Card} from "./components/Card"


function App() {

  const paisTulio = "Brasil"
  const paisTathy = "Canada"
  const turma = ["karen", "anna", "ale"]

  const alunos = [
    { name: "tathy", age: 44 }, 
    { name: "tulio", age: 30 }, 
    { name: "karen", age: 29 },
  ]

  return (
    <div className="App" id="app">

      <Tulio
        nomeCompleto="Tulio Minini"
        idade="35"
        country={paisTulio}
        turma={turma}
      />
      <Tulio
        nomeCompleto="Tulio Okasaki"
        idade="30"
        country={paisTulio}
        turma={turma}
      />

      <Tathy paisTathy={paisTathy} idade="44">Eu sou a Tathy!</Tathy>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={"1992-07-14"}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

{/*       <Card name={alunos[0].name} age={alunos[0].age}/>
      <Card name={alunos[1].name} age={alunos[1].age}/>
      <Card name={alunos[2].name} age={alunos[2].age}/>
 */}
      {alunos.map((currentElement) => {
        return (
          <>
            <Card name={currentElement.name} age={currentElement.age}/>
          </>
        )
      })}


    </div>
  );
}

export default App;
