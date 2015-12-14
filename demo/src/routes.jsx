var React = require('react');
var ReactRouter = require('react-router');
var History = require('history');

var history = History.createMemoryHistory();

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');
var PageOne = require('./components/page-one');
var PageTwo = require('./components/page-two');
var PageThree = require('./components/page-three');

module.exports = (
    <Router>
        <Route path="/" component={Main}>
            <Route path="page-one" component={PageOne} />
            <Route path="page-two" component={PageTwo} />
            <Route path="page-three" component={PageThree} />
        </Route>
    </Router>
);