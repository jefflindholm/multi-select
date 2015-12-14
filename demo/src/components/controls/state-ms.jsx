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
    getDefaultProps() {
        return { countries: [] };
    },
    componentWillMount: function() {
        Actions.getStates();
    },
    filter () {
        var data = this.state.data.map((s) =>{
            if ( this.props.countries.length > 0 ) {
                s.hidden = !_.find(this.props.countries, 'id', s.org.country_id);
            } else {
                s.hidden = false;
            }
            return s;
        });
        return data;
    }
});