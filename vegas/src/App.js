import logo from './logo.svg';
import './App.css';


const circleColors = [
  'white',
  'black',
];


const createCircle = () => (
  <svg viewBox="0 0 100 100">
    <circle cx={50} cy={50} r={30} fill="red"/>
  </svg>
);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome
        </p>
      </header>
      {createCircle()}
    </div>
  );
}

export default App;
