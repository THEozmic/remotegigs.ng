import React, { Component } from "react";
import { connect } from "react-redux";
import Jobs from "./components/Jobs";
import "./App.css";
import { apiGetJobs, updateJobs } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Jobs
          updateJobs={this.props.updateJobs}
          apiGetJobs={this.props.apiGetJobs}
          jobs={this.props.jobs}
        />
      </div>
    );
  }
}

// export default connect(state => ({ error: state.error, jobs: state.jobs }), {
//   apiGetJobs,
//   updateJobs: (jobs) => {dispatch(updateJobs(jobs))}
// })(App);

const mapStateToProps = state => ({
  error: state.error,
  jobs: state.jobs
});

const mapDispatchToProps = dispatch => ({
  apiGetJobs: () => dispatch(apiGetJobs()),
  updateJobs: jobs => dispatch(updateJobs(jobs))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
