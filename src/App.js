import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Project from './components/Project'

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
