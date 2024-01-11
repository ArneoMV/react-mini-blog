import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./components/organism/navBar/NavBar.js"
import Home from "./components/page/home/Home.js"
import Create from './components/page/create/Create.js';
import BlogDetails from './components/organism/blogDetails/BlogDetails.js';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
