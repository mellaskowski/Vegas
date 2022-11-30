import logo from './logo.svg';
import './App.css';
import { IconName } from "react-icons/ri";
import { ShapeName, Diamond, Polygon, CircleGrid } from "react-awesome-shapes";



const circleColors = [
  'white',
  'black',
];

const vegasSignBorder = () => (
<Diamond
    color="linear-gradient(135deg, #93c5fd, #3b82f6)"
    size="100px"
    width="400px"
    height="100px"
    zIndex={2}
/>
);

const diamond = () => (
<svg width="100" height="100">
  <polygon points="0 40,40 80,80 40,40 0" fill="#94B3FD" />
</svg> );

const createCircle = () => (
  <svg viewBox="0 0 100 100" className="circle-box">
    <circle cx={50} cy={50} r={30} fill="#94B3FD"/>
  </svg>
  );




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CircleGrid
    position="relative"
    color="#10b981"
    size="175px"
    zIndex={2}
/>
        <i className="grid-words">
          Welcome
        </i>
      {diamond()}

      </header>
      {vegasSignBorder()}
      {createCircle()}
    </div>
  );
}

export default App;
