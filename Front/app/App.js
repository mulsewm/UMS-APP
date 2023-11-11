import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Grades from './Grades/Grades';
import Courses from './Courses/Courses';
import Students from './Students/Students';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses" component={Courses} />
        <Route path="/grades" component={Grades} />
        <Route path="/students" component={Students} />
      </Switch>
    </Router>
  );
};


export default App;