import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/shared/Header';
import Task from './components/task';
import EditTask from './components/task/editTask';

//redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <HashRouter basename="/">
      <Provider store={store}>
        <Header/>
        <div className="container m-auto pt-5 d-flex flex-sm-row flex-column justify-content-around">
          <Switch>
            <Route exact path="/" component={Task} />
            <Route exact path="/tasks/edit/:id" component={EditTask} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Provider>
    </HashRouter>
  );
}

export default App;
