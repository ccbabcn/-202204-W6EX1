import { useState } from "react";
import projects from "./data/data";
import ProjecstList from "./Pages/ProjectListComponent";

function App() {
  const [actualProject, setProject] = useState(projects);
  return (
    <div className="App">
      <h2>Projects</h2>
      <ProjecstList projects={actualProject} />
    </div>
  );
}

export default App;
