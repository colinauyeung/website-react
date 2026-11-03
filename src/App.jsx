import Home from "./pages/index.jsx";
import Research from "./pages/research.jsx";
import Projects from "./pages/projects.jsx";
import Personal from "./pages/personal.jsx";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    StaticRouter
} from "react-router-dom";



function App() {

  return (
      <Router>
            <Routes>
                <Route exact path="/website-react/" element={<Home />} />
                <Route path="/website-react/research" element={<Research />} />
                <Route path="/website-react/projects" element={<Projects />} />
                <Route path="/website-react/personal" element={<Personal />} />
            </Routes>
        </Router>
  )
}

export default App
