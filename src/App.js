import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./components/organism/navBar/NavBar.js"
import Home from "./components/page/home/Home.js"
import Create from './components/page/create/Create.js';
import BlogDetails from './components/organism/blogDetails/BlogDetails.js';
import PageNotFound from './components/page/pageNotFound/PageNotFound.js';

import './styles/_index.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
