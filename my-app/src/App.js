import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Listado from './components/Listado';

function App() {

  const nombres = [
    {name: "Carlos", description:"Lorem ipsum"},
    {name: "Jose", description:"Lorem ipsum"},
    {name: "Marta", description:"Lorem ipsum"},
    {name: "María", description:"Lorem ipsum"},
    {name: "Juan", description:"Lorem ipsum"}
  ]

  return (
    <div className="App">
      <Header name="Salva"></Header>
      <div>{nombres.map(nombre => <Listado name={nombre.name} description={nombre.description}></Listado>)}</div>
    </div>
  );
}

export default App;
