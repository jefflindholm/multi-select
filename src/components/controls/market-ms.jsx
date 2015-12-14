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
    getDefaultProps() {
        return { regions: [] };
    },
    componentWillMount: function() {
        Actions.getMarkets();
    },
    filter() {
        var data = this.state.data.map((s) =>{
            if ( this.props.regions.length > 0 ) {
                s.hidden = !_.find(this.props.regions, 'id', s.org.region_id);
            } else {
                s.hidden = false;
            }
            return s;
        });

        return data;
    }
});