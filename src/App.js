import Header from "./Components/Header";
import Members from "./Components/Members";
import Timeline from "./Components/Timeline";
import Companies from "./Components/Companies";
import './global.style.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Members/>
      <Companies/>
    </div>
  );
}

export default App;
