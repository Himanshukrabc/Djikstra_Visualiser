import "./App.css";
import PathfindingVisualizer from "./PathfindingVisualiser/PathfindingVisualiser.jsx";
import { Tutorial } from "./PathfindingVisualiser/Tutorial/Tutorial.jsx";


function App() {
  return (
    <div className="App">
      <PathfindingVisualizer></PathfindingVisualizer>
      <div className="PopUp">
        <Tutorial />
      </div>
    </div>
  );
}

export default App;