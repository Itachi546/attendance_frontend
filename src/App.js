import React from 'react';
import './App.css';
import Header from './components/layout/Header';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import InstructorList from './components/pages/InstructorList';
import ClassList from './components/pages/ClassList';
import SubjectList from './components/pages/SubjectList';
import Report from './components/pages/Report';
import StudentList from './components/pages/StudentList';
import Student from './components/pages/Student';

//@Todo pass the data from link

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Header />
        <Route exact path='/' render={props => (
          <Home {...props} onClickRow={(subjectDetail) => {
            props.history.push({
              pathname: '/report',
              state: subjectDetail
            });
          }} />
        )} />

        <Route path='/classes' render={props => (
          <ClassList {...props} onClickRow={(classDetail) => {
            props.history.push({
              pathname: '/subjectlist',
              state: classDetail
            })
          }} />
        )} />

        <Route exact path='/subjectlist' render={props => (
          <SubjectList {...props} onClickRow={(subjectDetail) => {
            props.history.push({
              pathname: '/report',
              state: subjectDetail
            });
          }} />
        )} />


        <Route path='/instructor' component={InstructorList} />
        <Route path='/report' component={Report} />

        <Route path='/batch' render={props => (
          <StudentList {...props} onClickRow={(data) => {
            console.log(data);
            props.history.push({
              pathname: '/student',
              state: data
            });
          }} />
        )} />
        <Route path='/student' component={Student} />
      </div>
    </Router>
  );
}

export default App;
