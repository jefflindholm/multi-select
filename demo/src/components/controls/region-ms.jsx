var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

import BaseMs from './base-ms';

var DataStore = require('../../stores/region-store');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(DataStore, 'onDataChange'),
        BaseMs
    ],
    componentWillMount: function() {
        Actions.getRegions();
    },
    filter() {
        return this.state.data;
    }
});