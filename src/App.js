import React, { Component } from 'react';
import StackBarChart from './components/StackBarChart';
// import { Switch, Route } from 'react-router-dom';
// import RedirectionEx from './components/RedirectionEx';
// import Chart from './components/Chart';
// import Chart from './components/Chart';

export class App extends Component {
  render() {
    return (
      <div>
        {/* <Switch>
          <Route path="/chart" exact component={Chart} />
        </Switch>
        <Chart />
        <RedirectionEx /> */}
        <StackBarChart />
      </div>
    )
  }
}

export default App;