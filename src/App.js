
import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
       <Logo></Logo>
       <ul className='opcoes'>
        <li>
          <p>CATEGORIAS</p>
          <p>MINHA ESTANTE</p>
          <p>FAVORITOS</p>
        </li>
       </ul>
      </header>
    </div>
  );
}

export default App;
