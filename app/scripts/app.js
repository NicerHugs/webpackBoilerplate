import React from 'react';
import {Router, Route, browserHistory} from 'react-router';

import Index from './routes/index.js';
import NotFound from './routes/notFound.js';

export default React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Index}/>
        <Route path="/*" component={NotFound}/>
      </Router>
    )
  }
});
