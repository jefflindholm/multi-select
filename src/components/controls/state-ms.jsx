var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

import BaseMs from './base-ms';

var DataStore = require('../../stores/state-store');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(DataStore, 'onDataChange'),
        BaseMs
    ],
    componentWillMount: function() {
        Actions.getStates();
    },
    filter () {
        var data;
        if ( this.props && this.props.countries && this.props.countries.length > 0) {
            data = _.filter(this.state.data, function(s){ return _.find(this.props.countries, 'id', s.org.country_id) }.bind(this));
        } else {
            data = this.state.data;
        }
        return data;
    }
});