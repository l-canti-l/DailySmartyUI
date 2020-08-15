import React, { Component } from "react";

import {connect } from 'react-redux';

class ResultsPosts extends Component {
  render() {
    return (
      <div className="results-post">
        <div className="results-post__wrapper">
          <ul className="results-posts__posts"><li>RESULTS HERE</li></ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        state
    }
}

export default connect(mapStateToProps)(ResultsPosts);
