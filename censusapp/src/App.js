import logo from './logo.svg';
import './App.css';
import Census from './component/Census';

function handleClick() {
  window.location.reload();
}

function App() {
  return (
    <div>
      <p>
        <Census></Census>
      </p>
      <button onClick={handleClick}>Random other city</button>
    </div>

  );
}

export default App;
