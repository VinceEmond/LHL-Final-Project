import "./App.css";
import NavBar from "./NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
// import LandingPage from "./LandingPage";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Tasks from "./Tasks";
// import Trello from "./Trello1";
import Trello from "./Trello/Trello";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />

        <div className="content">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/trello" element={<Trello />} />
          </Routes>
        </div>
      </ChakraProvider>
    </div>
  );
}

export default App;
