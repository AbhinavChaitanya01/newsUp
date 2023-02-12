import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News.jsx';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Router>
          <Routes>
            <Route exact path="/" key= "general" element={<News country="in" category="general" apiKey ={process.env.REACT_APP_APIKEY}/>}></Route>
            <Route exact path="/general"  key= "general"  element={<News country="in" category="general"  apiKey ={process.env.REACT_APP_APIKEY}/>}></Route>
            <Route exact path="/business"  key= "business"  element={<News country="in" category="business"  apiKey ={process.env.REACT_APP_APIKEY} />}></Route>
            <Route exact path="/technology"  key= "technology"  element={<News country="in" category="technology"  apiKey ={process.env.REACT_APP_APIKEY}/>}></Route>
            <Route exact path="/science"  key= "science"  element={<News country="in" category="science"  apiKey ={process.env.REACT_APP_APIKEY}/>}></Route>
            <Route exact path="/sports"  key= "sports"  element={<News country="in" category="sports" apiKey ={process.env.REACT_APP_APIKEY}/>}></Route>
            <Route exact path="/entertainment"  key= "entertainment"  element={<News country="in" category="entertainment" apiKey ={process.env.REACT_APP_APIKEY}/>}></Route>
            <Route exact path="/health"  key= "health"  element={<News country="in" category="health" apiKey ={process.env.REACT_APP_APIKEY}/>}></Route>
          </Routes>
        </Router>

      </div>
    )
  }
}

export default App;
