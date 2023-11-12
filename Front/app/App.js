import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Grades from "./Grades/Grades";
import Courses from "./Courses/Courses";
import Students from "./components/Pages/Students";

const App = () => {
  const navigation = [
    { name: "Home", href: "/", current: true, component: Home },
    { name: "Courses", href: "/courses", current: false, component: Courses },
    { name: "Grades", href: "/grades", current: false, component: Grades },
    { name: "Analytics", href: "/analytics", current: false, component: Analytics },
    { name: "Students", href: "/students", current: false, component: Students },
  ];

  return (
    <Router>
      <Navbar navigation={navigation} />
      <Switch>
        {navigation.map((item, idx) => (
          <Route key={idx} path={item.href} component={item.component} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
