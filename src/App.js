import Aboutpeter from "./Aboutpeter";
import "./App.css";
import Jaillife from "./Jaillife";
import Listoflikes from "./Listoflikes";
import Personalinfo from "./Personalinfo";
import Schoollife from "./Schoollife";

function App() {
  return (
    <>
      <div>
        <h1>Alpha's info</h1>
      </div>

      <div class="personal">
        <Personalinfo />
      </div>

      <div class="about">
        <Aboutpeter />
      </div>

      <div class="list">
        <Listoflikes />
      </div>

      <div class="school">
        <Schoollife />
      </div>

      <div class="jail">
        <Jaillife />
      </div>
    </>
  );
}

export default App;
