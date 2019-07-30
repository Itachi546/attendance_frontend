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
import SubjectReport from './components/pages/SubjectReport';

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Route path='/' component={Header} />
        <Route exact path='/' render={props => (
          <Home {...props} onClickRow={(subjectDetail) => {
            props.history.push({
              pathname: '/subjectReport',
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
              pathname: '/subjectReport',
              state: subjectDetail
            });
          }} />
        )} />

        <Route path='/instructor' component={InstructorList} />

        <Route path='/batch' render={props => (
          <StudentList {...props} onClickRow={(data) => {
            props.history.push({
              pathname: '/student',
              state: data
            });
          }} />
        )} />
        <Route path='/student' component={Student} />

        <Route path='/subjectReport' render={props => (
          <SubjectReport {...props} onClickRow={(data) => {
            props.history.push({
              pathname: '/report',
              state: data
            });
          }}
          />
        )} />

        <Route path='/report' render={props => (
          <Report {...props}
            onClickRow={(data) => {
              props.history.push({
                pathname: '/student',
                state: data
              });
            }}
          />
        )} />
      </div>

    </Router>
  );
}

export default App;
