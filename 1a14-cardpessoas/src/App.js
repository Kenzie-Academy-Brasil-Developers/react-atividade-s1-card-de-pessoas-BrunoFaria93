import logo from './logo.svg';
import './App.css';
import Developer from './components/Developer/Developer'


function App() {
  const devs = {Bruno: 'Dev: Bruno', Luciano: 'Dev: Luciano', Patrick: 'Dev: Patrick'}
  const idade = {Bruno: 'Idade: 26', Luciano: 'Idade 27', Patrick: 'Idade 28'}
  const pais = 'País: Brasil'
  return (
    <div className="App">
      <Developer name={devs.Bruno} age={idade.Bruno} country={pais}/>
      <Developer name={devs.Luciano} age={idade.Luciano} country={pais}/>
      <Developer name={devs.Patrick} age={idade.Patrick} country={pais}/>
    </div>
  );
}

export default App;
