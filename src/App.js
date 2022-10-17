import Header from "./Components/Header";
import Members from "./Components/Members";
import Timeline from "./Components/Timeline";
import Timeline2 from "./Components/Timeline2";
import Companies from "./Components/Companies";
import Tuvalu from "./Components/Tuvalu";
import TDL from './Components/TDL'
import Footer from "./Components/Footer";
import './global.style.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Members/>
      <Timeline/>
      <TDL/>
      <Timeline2/>
      <Tuvalu/>
      <Companies/>
      <Footer/>
    </div>
  );
}

export default App;
