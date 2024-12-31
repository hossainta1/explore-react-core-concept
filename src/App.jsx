
import './App.css'

function App() {

  return (
    <>

      <h1>Vite + React</h1>
      <Persion></Persion>
      <Persion></Persion>
      <Persion></Persion>
      <Persion></Persion>
      <Student></Student>

    </>
  )
}

function Persion(){
  const age = 25;
  const money = 200
  return <h3>I am a persion. MY age: {age} . Current Money: {money}</h3>
}

function Student(){
  const student = {
    age : 25,
    name: 'Tanvir',
    gender: 'Male'
  }
  return <div>
    <h3>This is a Student</h3>
    <p>Name:{student.name}</p>
    <p>Age:{student.age}</p>
    <p>Gender:{student.gender}</p>
  </div>
}

export default App
