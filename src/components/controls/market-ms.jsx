var _ = require('lodash');
var React = require('react');
var Reflux = require('reflux');
var Actions = require('../../actions');

import BaseMs from './base-ms';

var DataStore = require('../../stores/market-store');

module.exports = React.createClass({
    mixins: [
        Reflux.listenTo(DataStore, 'onDataChange'),
        BaseMs
    ],
    componentWillMount: function() {
        Actions.getMarkets();
    },
    filter() {
        var data;
        if ( this.props && this.props.regions && this.props.regions.length > 0) {
            data = _.filter(this.state.data, function(m){ return _.find(this.props.regions, 'id', m.org.region_id) }.bind(this));
        } else {
            data = this.state.data;
        }
        return data;
    }
});